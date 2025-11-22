document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.order-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const selected = window.selectedDishes || {
            soup: null,
            main_course: null,
            salad: null,
            beverage: null,
            dessert: null
        };

        const hasSoup = selected.soup !== null;
        const hasMainCourse = selected.main_course !== null;
        const hasSalad = selected.salad !== null;
        const hasBeverage = selected.beverage !== null;
        const hasDessert = selected.dessert !== null;

        if (!hasSoup && !hasMainCourse && !hasSalad && !hasBeverage && !hasDessert) {
            showNotification('Ничего не выбрано. Выберите блюда для заказа');
            return;
        }

        const validCombos = [
            { soup: true, main_course: true, salad: true, beverage: true },
            { soup: true, main_course: true, salad: false, beverage: true },
            { soup: true, main_course: false, salad: true, beverage: true },
            { soup: false, main_course: true, salad: true, beverage: true },
            { soup: false, main_course: true, salad: false, beverage: true }
        ];

        const isValidCombo = validCombos.some(combo => 
            combo.soup === hasSoup &&
            combo.main_course === hasMainCourse &&
            combo.salad === hasSalad &&
            combo.beverage === hasBeverage
        );

        if (isValidCombo) {
            form.submit();
        } else {
            let message = '';

            if ((hasSoup && hasMainCourse && hasSalad) ||
                (hasSoup && hasMainCourse) ||
                (hasSoup && hasSalad) ||
                (hasMainCourse && hasSalad) ||
                hasMainCourse) {
                if (!hasBeverage) {
                    message = 'Выберите напиток';
                }
            }

            if (hasSoup && !hasMainCourse && !hasSalad) {
                message = 'Выберите главное блюдо/салат/стартер';
            }

            if (hasSalad && !hasSoup && !hasMainCourse) {
                message = 'Выберите суп или главное блюдо';
            }

            if (!hasSoup && !hasMainCourse && !hasSalad && (hasBeverage || hasDessert)) {
                message = 'Выберите главное блюдо';
            }

            if (!message) {
                if (!hasBeverage) {
                    message = 'Выберите напиток';
                } else if (!hasMainCourse && !hasSoup) {
                    message = 'Выберите суп или главное блюдо';
                } else if (hasSoup && !hasMainCourse && !hasSalad) {
                    message = 'Выберите главное блюдо/салат/стартер';
                } else {
                    message = 'Выберите подходящую комбинацию блюд';
                }
            }

            showNotification(message);
        }
    });

    function showNotification(message) {
        const existingNotification = document.querySelector('.notification-overlay');
        if (existingNotification) {
            existingNotification.remove();
        }

        const overlay = document.createElement('div');
        overlay.className = 'notification-overlay';

        const notification = document.createElement('div');
        notification.className = 'notification';

        const title = document.createElement('h3');
        title.textContent = 'Ничего не выбрано';

        const text = document.createElement('p');
        text.textContent = message;

        const button = document.createElement('button');
        button.textContent = 'Окей 👌';

        button.addEventListener('click', function() {
            overlay.remove();
        });

        notification.appendChild(title);
        notification.appendChild(text);
        notification.appendChild(button);
        overlay.appendChild(notification);

        document.body.appendChild(overlay);
    }
});
