function updateCountdown() {
    // 获取所有倒计时容器
    const countdownElements = document.querySelectorAll(".countdown");

    countdownElements.forEach((element) => {
        // 获取目标日期
        const endDate = new Date(element.getAttribute("data-end-date")).getTime();
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        // 计算天、小时、分钟和秒
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // 更新倒计时显示
        if (timeLeft > 0) {
            element.innerHTML = `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
        } else {
            element.innerHTML = "倒计时结束！";
        }
    });
}

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);

// 初始化倒计时
updateCountdown();