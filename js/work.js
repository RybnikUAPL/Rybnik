document.addEventListener("DOMContentLoaded", function() {
    // Загрузка страниц поиска работы
    fetch("common/work.html")
        .then(response => response.text())
        .then(data => {
            var workElement = document.getElementById("work");
            if (workElement) {
                workElement.innerHTML = data;
            } else {
                console.error('Элемент с id "work" не найден на странице.');
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке ссылок', error);
        }); 

});
