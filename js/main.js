document.addEventListener("DOMContentLoaded", function() {
    // Загрузка скриптов jQuery и других библиотек
    Promise.all([
        loadScript("js/jquery-1.11.3.min.js"),
        loadScript("js/jquery.magnific-popup.min.js"),
        loadScript("js/jquery.singlePageNav.min.js")
    ]).then(() => {
        // Все скрипты загружены успешно
        console.log("Все скрипты загружены");
    }).catch(error => {
        console.error('Ошибка при загрузке скриптов:', error);
    });

    // Функция для загрузки скрипта
    function loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Загрузка общей навигации
    fetch("common/navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка при загрузке навигации:', error);
        });

    // Загрузка общего футера
    fetch("common/footer-2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-2").innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка при загрузке футера:', error);
        });
    // Загрузка иконок
    fetch("common/icons-1.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-icons").innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка при загрузке иконок:', error);
        });    
    // Загрузка страниц поиска работы
    fetch("common/work-3.html")
        .then(response => response.text())
        .then(data => {
            var workElement = document.getElementById("work-2");
            if (workElement) {
                workElement.innerHTML = data;
            } else {
                console.error('Элемент с id "work-2" не найден на странице.');
            }
        })
        .catch(error => {
            console.error('Ошибка при загрузке ссылок', error);
        }); 

});
function goToHomePage() {
    // Используйте window.location.href для перенаправления на главную страницу
    window.location.href = "index.html";
  }
