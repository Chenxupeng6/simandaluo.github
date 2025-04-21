// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 模块点击事件
    document.querySelectorAll('.module').forEach(module => {
        module.addEventListener('click', () => {
            // 根据模块类型跳转不同页面
            const isNewbie = module.classList.contains('newbie');
            window.location.href = isNewbie ? 'https://www.simandaluo.cn/NewbieGuide' : 'https://www.simandaluo.cn/home';
        });
    });

    // 加入按钮交互
    const joinBtn = document.querySelector('.join-btn');
    joinBtn.addEventListener('mouseover', () => {
        joinBtn.style.transform = 'scale(1.05)';
    });
    
    joinBtn.addEventListener('mouseout', () => {
        joinBtn.style.transform = 'scale(1)';
    });
    
    joinBtn.addEventListener('click', () => {
        window.location.href = '/join';
    });

    // 图标悬停动画
    const icon = document.querySelector('.icon');
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(15deg) scale(1.1)';
    });
    
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});
