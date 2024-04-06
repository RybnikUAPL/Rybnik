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
});
function goToHomePage() {
    // Используйте window.location.href для перенаправления на главную страницу
    window.location.href = "index.html";
  }
