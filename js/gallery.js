// ==============================================
// 相册：分类筛选、灯箱、全屏自动轮播+背景音乐（修复版）
// ==============================================

const galleryGrid = document.getElementById('galleryGrid');
const tabs = document.querySelectorAll('.gallery-tab');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

const carouselModal = document.getElementById('carouselModal');
const carouselImg = document.getElementById('carouselImg');
const carouselDots = document.getElementById('carouselDots');
const openCarouselBtn = document.getElementById('openCarousel');
const closeCarousel = document.getElementById('closeCarousel');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');
const toggleMusicBtn = document.getElementById('toggleMusic');
const carouselBgm = document.getElementById('bgMusic');

let currentSlideIndex = 0;
let autoPlayTimer = null;
let isMusicPlaying = false;

// 1. 动态渲染相册
function renderGallery() {
    galleryList.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item fade-in cursor-pointer overflow-hidden rounded-lg aspect-square';
        div.dataset.category = item.category;
        div.innerHTML = `<img src="${item.src}" alt="${item.alt}" class="w-full h-full object-cover" loading="lazy">`;

        div.addEventListener('click', () => {
            openLightbox(item.src);
        });

        galleryGrid.appendChild(div);
        observer.observe(div);
    });
}

// 2. 分类筛选
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => {
            t.classList.remove('active', 'bg-accent', 'text-white');
            t.classList.add('hover:bg-accent/10');
        });
        tab.classList.add('active', 'bg-accent', 'text-white');
        tab.classList.remove('hover:bg-accent/10');

        const category = tab.dataset.category;
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (category === 'all' || item.dataset.category === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// 3. 单图灯箱
function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
}
closeLightbox.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
});
lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
    }
});

// 4. 全屏轮播核心
function openCarousel() {
    currentSlideIndex = 0;
    renderCarouselDots();
    updateCarousel(false);
    carouselModal.classList.remove('hidden');
    carouselModal.classList.add('flex');

    startAutoPlay();

    // 随机选一首背景音乐
    const randomBgm = bgmList[Math.floor(Math.random() * bgmList.length)];
    carouselBgm.src = randomBgm.url;

    // 用户点击触发后尝试播放
    carouselBgm.play().then(() => {
        isMusicPlaying = true;
        toggleMusicBtn.innerHTML = '<i class="fa fa-pause"></i>';
    }).catch(() => {
        isMusicPlaying = false;
        toggleMusicBtn.innerHTML = '<i class="fa fa-music"></i>';
    });
}

function closeCarouselHandler() {
    carouselModal.classList.add('hidden');
    carouselModal.classList.remove('flex');
    stopAutoPlay();
    carouselBgm.pause();
    isMusicPlaying = false;
    toggleMusicBtn.innerHTML = '<i class="fa fa-music"></i>';
}

function updateCarousel(animate = true) {
    if (animate) {
        carouselImg.style.transition = 'opacity 0.3s ease';
        carouselImg.style.opacity = '0';
        setTimeout(() => {
            carouselImg.src = galleryList[currentSlideIndex].src;
            carouselImg.style.opacity = '1';
        }, 300);
    } else {
        carouselImg.src = galleryList[currentSlideIndex].src;
        carouselImg.style.opacity = '1';
    }

    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('bg-white', i === currentSlideIndex);
        dot.classList.toggle('bg-white/40', i !== currentSlideIndex);
    });
}

function renderCarouselDots() {
    carouselDots.innerHTML = '';
    galleryList.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = `carousel-dot w-2 h-2 rounded-full cursor-pointer transition-colors ${i === 0 ? 'bg-white' : 'bg-white/40'}`;
        dot.addEventListener('click', () => {
            currentSlideIndex = i;
            updateCarousel();
            resetAutoPlay();
        });
        carouselDots.appendChild(dot);
    });
}

function goNext() {
    currentSlideIndex = (currentSlideIndex + 1) % galleryList.length;
    updateCarousel();
}

function goPrev() {
    currentSlideIndex = (currentSlideIndex - 1 + galleryList.length) % galleryList.length;
    updateCarousel();
}

// 自动轮播控制
function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(goNext, 3500);
}

function stopAutoPlay() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
    }
}

function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
}

// 音乐开关
toggleMusicBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        carouselBgm.pause();
        isMusicPlaying = false;
        toggleMusicBtn.innerHTML = '<i class="fa fa-music"></i>';
    } else {
        carouselBgm.play().then(() => {
            isMusicPlaying = true;
            toggleMusicBtn.innerHTML = '<i class="fa fa-pause"></i>';
        }).catch(() => {
            alert('音乐加载失败，请检查music文件夹的文件名和路径是否正确');
        });
    }
});

// 事件绑定
openCarouselBtn.addEventListener('click', openCarousel);
closeCarousel.addEventListener('click', closeCarouselHandler);
prevSlide.addEventListener('click', () => { goPrev(); resetAutoPlay(); });
nextSlide.addEventListener('click', () => { goNext(); resetAutoPlay(); });

// 键盘控制
document.addEventListener('keydown', e => {
    if (!carouselModal.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') { goNext(); resetAutoPlay(); }
        if (e.key === 'ArrowLeft') { goPrev(); resetAutoPlay(); }
        if (e.key === 'Escape') closeCarouselHandler();
        if (e.key === ' ') {
            e.preventDefault();
            toggleMusicBtn.click();
        }
    }
});

// 点击遮罩关闭
carouselModal.addEventListener('click', e => {
    if (e.target === carouselModal) closeCarouselHandler();
});

// 初始化
document.addEventListener('DOMContentLoaded', renderGallery);