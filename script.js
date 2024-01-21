// script.js

document.addEventListener("DOMContentLoaded", function () {
    updateDateTime(); // Wywołaj funkcję aktualizującą datę i godzinę przy załadowaniu strony
    setInterval(updateDateTime, 1000); // Ustaw interwał na 1000 milisekund (1 sekunda) dla regularnej aktualizacji

    function updateDateTime() {
        var currentDateElement = document.getElementById('currentDate');
        var currentDate = new Date();
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
        currentDateElement.innerHTML = currentDate.toLocaleString('pl-PL', options);
    }
});
