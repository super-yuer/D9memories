// ==============================================
// 通用交互：导航、滚动进度条、滚动动画、随机语录
// ==============================================

// 1. 首屏随机语录
document.addEventListener('DOMContentLoaded', () => {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    document.getElementById('randomQuote').textContent = quoteList[randomIndex];
});

// 2. 导航栏滚动效果 + 进度条
const navbar = document.getElementById('navbar');
const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // 更新进度条
    progressBar.style.width = scrollPercent + '%';

    // 导航栏背景切换
    if (scrollTop > 100) {
        navbar.classList.add('bg-paper/95', 'backdrop-blur-sm', 'shadow-sm', 'text-ink');
        navbar.classList.remove('bg-transparent', 'text-white');
        document.querySelectorAll('#navbar a').forEach(a => {
            a.classList.remove('text-white', 'text-shadow-sm');
        });
    } else {
        navbar.classList.remove('bg-paper/95', 'backdrop-blur-sm', 'shadow-sm', 'text-ink');
        navbar.classList.add('bg-transparent', 'text-white');
        document.querySelectorAll('#navbar a').forEach(a => {
            a.classList.add('text-white', 'text-shadow-sm');
        });
    }
});

// 3. 移动端菜单
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 4. 滚动渐显动画
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));

// 5. 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
