document.addEventListener('DOMContentLoaded', function() {
    const selectedDishes = {
        soup: null,
        main_course: null,
        beverage: null
    };

    const categoryLabels = {
        soup: 'Суп',
        main_course: 'Главное блюдо',
        beverage: 'Напиток'
    };

    const emptyMessages = {
        soup: 'Блюдо не выбрано',
        main_course: 'Блюдо не выбрано',
        beverage: 'Напиток не выбран'
    };

    // обработчик клика по карточкам блюд
    document.addEventListener('click', function(event) {
        const dishCard = event.target.closest('.dish-card');
        if (!dishCard) return;

        const keyword = dishCard.getAttribute('data-dish');
        const dish = dishes.find(d => d.keyword === keyword);

        if (dish) {
            selectedDishes[dish.category] = dish;
            updateOrderDisplay();
        }
    });

    function updateOrderDisplay() {
        const orderSection = document.querySelector('#order-section .form-block h3');
        if (!orderSection) return;

        const formBlock = orderSection.parentElement;
        
        // удаляем старый блок заказа, если он есть
        let orderDisplay = formBlock.querySelector('.order-display');
        if (orderDisplay) {
            orderDisplay.remove();
        }

        // создаем новый блок заказа
        orderDisplay = document.createElement('div');
        orderDisplay.className = 'order-display';

        // проверяем, выбрано ли хоть что-то
        const hasSelection = Object.values(selectedDishes).some(dish => dish !== null);

        if (!hasSelection) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'Ничего не выбрано';
            emptyMessage.style.fontStyle = 'italic';
            emptyMessage.style.color = '#666';
            orderDisplay.appendChild(emptyMessage);
        } else {
            let totalPrice = 0;

            // отображаем каждую категорию
            Object.keys(categoryLabels).forEach(category => {
                const categoryBlock = document.createElement('div');
                categoryBlock.className = 'order-category';
                categoryBlock.style.marginBottom = '15px';

                const categoryTitle = document.createElement('p');
                categoryTitle.innerHTML = `<strong>${categoryLabels[category]}</strong>`;
                categoryTitle.style.marginBottom = '5px';
                categoryBlock.appendChild(categoryTitle);

                if (selectedDishes[category]) {
                    const dish = selectedDishes[category];
                    const dishInfo = document.createElement('p');
                    dishInfo.textContent = `${dish.name} ${dish.price}₽`;
                    dishInfo.style.marginLeft = '10px';
                    categoryBlock.appendChild(dishInfo);
                    totalPrice += dish.price;
                } else {
                    const emptyMsg = document.createElement('p');
                    emptyMsg.textContent = emptyMessages[category];
                    emptyMsg.style.marginLeft = '10px';
                    emptyMsg.style.color = '#999';
                    categoryBlock.appendChild(emptyMsg);
                }

                orderDisplay.appendChild(categoryBlock);
            });

            // блок стоимости заказа
            const totalBlock = document.createElement('div');
            totalBlock.className = 'order-total';
            totalBlock.style.marginTop = '20px';
            totalBlock.style.paddingTop = '15px';
            totalBlock.style.borderTop = '1px solid #ddd';

            const totalText = document.createElement('p');
            totalText.innerHTML = `<strong>Стоимость заказа</strong>`;
            totalBlock.appendChild(totalText);

            const totalAmount = document.createElement('p');
            totalAmount.textContent = `${totalPrice}₽`;
            totalAmount.style.fontSize = '1.2em';
            totalAmount.style.fontWeight = '700';
            totalAmount.style.color = '#ff6600';
            totalBlock.appendChild(totalAmount);

            orderDisplay.appendChild(totalBlock);
        }

        // вставляем блок заказа после заголовка "Ваш заказ"
        orderSection.insertAdjacentElement('afterend', orderDisplay);
    }

    // инициализируем отображение при загрузке
    updateOrderDisplay();
});
