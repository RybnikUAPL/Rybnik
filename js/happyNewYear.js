function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDifference = newYear - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').textContent =
        `${days} дн ${hours} ч ${minutes} мин ${seconds} сек`;

    if (timeDifference <= 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown-timer').textContent = 'С Новым Годом!!!';
    }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();