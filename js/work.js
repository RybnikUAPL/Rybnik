document.addEventListener("DOMContentLoaded", function() {
    // Загрузка страниц поиска работы
    fetch("common/work-3.html")
        .then(response => response.text())
        .then(data => {
            var workElement = document.getElementById("work-3");
            if (workElement) {
                workElement.innerHTML = data;
            } else {
                console.error('Элемент с id "work-3" не найден на странице.');
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке ссылок', error);
        }); 

});
