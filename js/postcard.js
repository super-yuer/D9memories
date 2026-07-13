// ==============================================
// 明信片 纯预览稳定版 · 只保留网页显示功能
// 下拉框/切换/实时预览 全部正常，零报错
// ==============================================

const postcardImg = document.getElementById('postcardImg');
const postcardText = document.getElementById('postcardText');
const quickPhrasesBox = document.getElementById('quickPhrases');
const generateBtn = document.getElementById('generatePostcard');
const sideTabs = document.querySelectorAll('.side-tab');

const frontImg = document.getElementById('frontImg');
const frontText = document.getElementById('frontText');
const postcardFront = document.getElementById('postcardFront');
const postcardBack = document.getElementById('postcardBack');

let currentSide = 'front';

// 1. 填充下拉选项
function initImgSelect() {
    if (!galleryList) return;
    galleryList.forEach(item => {
        const option = document.createElement('option');
        option.value = item.src;
        option.textContent = item.alt;
        postcardImg.appendChild(option);
    });
}

// 2. 快捷短语
function initPhrases() {
    if (!quickPhrases) return;
    quickPhrases.forEach(phrase => {
        const tag = document.createElement('span');
        tag.className = 'px-3 py-1 text-xs border border-accent/30 rounded-full cursor-pointer hover:bg-accent/10 transition-colors';
        tag.textContent = phrase;
        tag.addEventListener('click', () => {
            postcardText.value = phrase;
            updateFront();
        });
        quickPhrasesBox.appendChild(tag);
    });
}

// 3. 正反面切换
sideTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        sideTabs.forEach(t => {
            t.classList.remove('active', 'bg-accent', 'text-white');
        });
        tab.classList.add('active', 'bg-accent', 'text-white');
        currentSide = tab.dataset.side;

        if (currentSide === 'front') {
            postcardFront.classList.remove('hidden');
            postcardBack.classList.add('hidden');
        } else {
            postcardFront.classList.add('hidden');
            postcardBack.classList.remove('hidden');
        }
    });
});
sideTabs[0].classList.add('active', 'bg-accent', 'text-white');

// 4. 更新正面预览
function updateFront() {
    frontImg.src = postcardImg.value;
    frontText.textContent = postcardText.value.trim() || '山水万程，皆有好运';
}

// 5. 生成按钮（只是刷新预览，无复杂逻辑）
function generatePostcard() {
    updateFront();
}

// 事件绑定
postcardImg.addEventListener('change', updateFront);
postcardText.addEventListener('input', updateFront);
generateBtn.addEventListener('click', generatePostcard);

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    initImgSelect();
    initPhrases();
});
// ========== 左按钮：随机起点全屏烟花 ==========
function launchFirework(button) {
    // 发射起点：屏幕底部随机X位置
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 60;
    // 爆炸点：高度随机（100-260px 区间）
    const burstY = 100 + Math.random() * 160;

    // 创建上升的烟花弹
    const shell = document.createElement('div');
    shell.className = 'firework-shell';
    shell.style.left = startX + 'px';
    shell.style.top = startY + 'px';
    document.body.appendChild(shell);

    // 上升动画
    shell.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(${burstY - startY}px)`, opacity: 1 }
    ], {
        duration: 700,
        easing: 'ease-out',
        fill: 'forwards'
    });

    // 到达顶点炸开
    setTimeout(() => {
        shell.remove();
        burstFireworkParticles(startX, burstY);
    }, 700);
}

// 烟花爆炸粒子（全屏范围 + 多色随机）
function burstFireworkParticles(x, y) {
    const count = 220;
    const maxRadius = 920; // 爆炸半径，数值越大范围越广
    // 多色系随机：金、橙、红、暖棕、米白
    const colors = [
        '#b8860b', '#daa520', '#ffd700', '#f0b850', '#cd853f',
        '#ff7f50', '#ff6347', '#ffa07a', '#ffdab9', '#fff8dc',
        '#ffb347', '#ff8c00', '#e9967a'
    ];

    for (let i = 0; i < count; i++) {
        const dot = document.createElement('div');
        dot.className = 'firework-dot';
        const angle = Math.PI * 2 * (i / count) + Math.random() * 0.5;
        const distance = maxRadius * (0.45 + Math.random() * 0.55);
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const size = 3 + Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];

        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.background = color;
        dot.style.boxShadow = `0 0 12px 4px ${color}`;

        dot.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0.2)`, opacity: 0 }
        ], {
            duration: 1400 + Math.random() * 500,
            easing: 'ease-out',
            fill: 'forwards'
        });

        document.body.appendChild(dot);
        setTimeout(() => dot.remove(), 2000);
    }
}

// ========== 右按钮：多方向全屏喷射彩带 ==========
function sprayConfetti(button) {
    const totalCount = 380;
    const colors = [
        '#ff6b6b', '#4ecdc4', '#ffe66d', '#95e1d3', '#f38181',
        '#aa96da', '#fcbad3', '#a8d8ea', '#ffd93d', '#6bcb77',
        '#ff9a9e', '#fecfef', '#a18cd1', '#fbc2eb'
    ];

    // 7个喷射点，分布在屏幕四周，确保占满全屏
    const emitters = [
        { x: -80, y: window.innerHeight / 2, angle: 0 },                  // 左中 → 向右
        { x: window.innerWidth + 80, y: window.innerHeight / 2, angle: Math.PI }, // 右中 → 向左
        { x: window.innerWidth * 0.2, y: -80, angle: Math.PI / 2 },      // 左上 → 向下
        { x: window.innerWidth * 0.5, y: -80, angle: Math.PI / 2 },      // 中上 → 向下
        { x: window.innerWidth * 0.8, y: -80, angle: Math.PI / 2 },      // 右上 → 向下
        { x: -80, y: window.innerHeight + 80, angle: -Math.PI / 2.5 },   // 左下 → 斜上
        { x: window.innerWidth + 80, y: window.innerHeight + 80, angle: -Math.PI + Math.PI / 2.5 } // 右下 → 斜上
    ];

    emitters.forEach(emitter => {
        const perCount = Math.floor(totalCount / emitters.length);
        for (let i = 0; i < perCount; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';

            // 120度扇形扩散，覆盖范围拉满
            const spreadAngle = Math.PI / 1.5;
            const angle = emitter.angle + (Math.random() - 0.5) * spreadAngle;
            const distance = 400 + Math.random() * 700;

            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance + Math.random() * 300;
            const rotate = Math.random() * 1440 - 720 + 'deg';
            const color = colors[Math.floor(Math.random() * colors.length)];
            // 随机宽度，增加层次感
            const width = 3 + Math.random() * 5;
            const height = 12 + Math.random() * 12;

            piece.style.left = emitter.x + 'px';
            piece.style.top = emitter.y + 'px';
            piece.style.width = width + 'px';
            piece.style.height = height + 'px';
            piece.style.background = color;

            piece.animate([
                { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
                { transform: `translate(${tx}px, ${ty}px) rotate(${rotate})`, opacity: 0 }
            ], {
                duration: 2200 + Math.random() * 1000,
                easing: 'ease-out',
                fill: 'forwards'
            });

            document.body.appendChild(piece);
            setTimeout(() => piece.remove(), 3500);
        }
    });
}

// 绑定到对应按钮
document.getElementById('downloadPng').addEventListener('click', function () {
    launchFirework(this);
});
document.getElementById('downloadPdf').addEventListener('click', function () {
    sprayConfetti(this);
});