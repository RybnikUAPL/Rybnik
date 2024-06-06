document.addEventListener("DOMContentLoaded", function() {
    // Loading jQuery and other libraries
    Promise.all([
        loadScript("js/jquery-1.11.3.min.js"),
        loadScript("js/jquery.magnific-popup.min.js"),
        loadScript("js/jquery.singlePageNav.min.js")
    ]).then(() => {
        // All scripts loaded successfully
        console.log("Все скрипты загружены");
    }).catch(error => {
        console.error('Ошибка при загрузке скриптов:', error);
    });

    // Function to load a script
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
    // Loading common navigation
    fetch("common/navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка при загрузке навигации:', error);
        });

    // Loading common footer
    fetch("common/footer-2.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-2").innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка при загрузке футера:', error);
        });
    // Loading icons
    fetch("common/icons-1.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-icons").innerHTML = data;
        })
        .catch(error => {
            console.error('Ошибка при загрузке иконок:', error);
        });    
    // Loading job search pages
});
function goToHomePage() {
    // Use window.location.href to redirect to the home page
    window.location.href = "index.html";
  }
