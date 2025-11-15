document.addEventListener('DOMContentLoaded', function() { // Ждём загрузки документа
// Создаём переменные по элементам со страницы
    const asapRadio = document.getElementById('asap');  
    const specificTimeRadio = document.getElementById('specific_time');
    const deliveryTimeInput = document.getElementById('delivery_time');
 
    // функция, которая будет проверять, 
    // какая кнопка выбрана, и в зависимости от этого управлять полем ввода
    function updateTimeField() {
        if (specificTimeRadio.checked) { //проверяем, выбрана ли кнопка "К определенному времени"
            //если да
            deliveryTimeInput.disabled = false; //разблокируем поле ввода
            deliveryTimeInput.required = true; //помечаем поле как обязательное для заполнения
        } else {
            //если нет
            deliveryTimeInput.disabled = true; // блокируем поле
            deliveryTimeInput.required = false; //помечаем поле как необязательное для заполнения
            deliveryTimeInput.value = ''; //очищаем значение в этом поле
        }
    }


    deliveryTimeInput.disabled = true;
    deliveryTimeInput.required = false;

    asapRadio.addEventListener('change', updateTimeField);
    specificTimeRadio.addEventListener('change', updateTimeField);
});
