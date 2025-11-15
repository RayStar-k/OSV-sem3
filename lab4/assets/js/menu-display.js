document.addEventListener('DOMContentLoaded', function() {
    // сортировка блюд в алфавитном порядке
    const sortedDishes = dishes.sort((a, b) => a.name.localeCompare(b.name));

    // категории и их заголовки
    const categories = {
        'soup': 'Выберите суп',
        'main_course': 'Выберите главное блюдо',
        'beverage': 'Выберите напиток'
    };

    // находим все секции на странице
    const sections = document.querySelectorAll('main section');

    // перебираем категории
    Object.keys(categories).forEach((category, index) => {
        // Фильтруем блюда по категории
        const categoryDishes = sortedDishes.filter(dish => dish.category === category);

        // находим соответствующую секцию
        const section = sections[index];
        if (!section) return;

        // устанавливаем заголовок секции
        const h2 = section.querySelector('h2');
        if (h2) {
            h2.textContent = categories[category];
        }

        // находим или создаем контейнер для блюд
        let dishesGrid = section.querySelector('.dishes-grid');
        if (!dishesGrid) {
            dishesGrid = document.createElement('div');
            dishesGrid.className = 'dishes-grid';
            section.appendChild(dishesGrid);
        } else {
            // очищаем существующий контейнер
            dishesGrid.innerHTML = '';
        }

        // добавляем карточки блюд
        categoryDishes.forEach(dish => {
            const dishCard = createDishCard(dish);
            dishesGrid.appendChild(dishCard);
        });
    });
});

function createDishCard(dish) {
    const card = document.createElement('div');
    card.className = 'dish-card';
    card.setAttribute('data-dish', dish.keyword);

    const img = document.createElement('img');
    img.src = dish.image;
    img.alt = dish.name;

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = dish.price + '₽';

    const name = document.createElement('p');
    name.className = 'dish-name';
    name.textContent = dish.name;

    const weight = document.createElement('p');
    weight.className = 'weight';
    weight.textContent = dish.count;

    const button = document.createElement('button');
    button.textContent = 'Добавить';

    card.appendChild(img);
    card.appendChild(price);
    card.appendChild(name);
    card.appendChild(weight);
    card.appendChild(button);

    return card;
}
