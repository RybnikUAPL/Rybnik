// common.js
fetch('common/common.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('commonContent').innerHTML = data;
    })
    .catch(error => {
        console.error('Ошибка при загрузке общего файла:', error);
    });
