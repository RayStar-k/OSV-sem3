
document.addEventListener('DOMContentLoaded', function() {

    const asapRadio = document.getElementById('asap');
    const specificTimeRadio = document.getElementById('specific_time');
    const deliveryTimeInput = document.getElementById('delivery_time');

    function updateTimeField() {
        if (specificTimeRadio.checked) {

            deliveryTimeInput.disabled = false;
            deliveryTimeInput.required = true;
        } else {

            deliveryTimeInput.disabled = true;
            deliveryTimeInput.required = false;
            deliveryTimeInput.value = '';
        }
    }


    deliveryTimeInput.disabled = true;
    deliveryTimeInput.required = false;

    asapRadio.addEventListener('change', updateTimeField);
    specificTimeRadio.addEventListener('change', updateTimeField);
});
