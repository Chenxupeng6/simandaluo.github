
// 目录导航交互
document.addEventListener('DOMContentLoaded', () => {
    // 自动生成目录
    const sections = document.querySelectorAll('.guide-section');
    const menu = document.querySelector('.menu'); 
    
    sections.forEach(section => {
        const heading = section.querySelector('h2, h3');
        if (heading) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${section.id}`;
            link.textContent = heading.textContent;
            listItem.appendChild(link);
            menu.appendChild(listItem);
        }
    });

    // 滚动监听
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            const link = document.querySelector(`.menu a[href="#${id}"]`);
            if (link) {
                entry.isIntersecting ? 
                    link.classList.add('active') :
                    link.classList.remove('active');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));

    // 移动端导航
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.addEventListener('change', (e) => {
        window.location.hash = e.target.value;
    });

    // 自动滚动修正
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

   

});

document.addEventListener('DOMContentLoaded', function() {
    // 获取所有图片
    const imgs = document.querySelectorAll('.zoomable-img');
    console.log('找到图片数量：', imgs.length); // 调试输出

    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';
    
    const modalImg = document.createElement('img');
    modalImg.className = 'modal-content';
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // 为每个图片绑定事件
    imgs.forEach(img => {
        img.style.cursor = 'pointer'; // 确保显示手型光标
        img.addEventListener('click', function() {
            console.log('点击图片：', this.src); // 调试输出
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    // 关闭逻辑
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.style.display = 'none';
    });
});
 // 按ESC键关闭
 document.addEventListener('keydown', (e) => {
     if (e.key === 'Escape' && modal.style.display === 'block') {
         modal.style.display = 'none';
     }
 });
