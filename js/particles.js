// ==============================================
// 首屏粒子星空：50位同学，首字母显示+悬停全名+边缘完美反弹
// ==============================================

window.addEventListener('load', () => {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    const heroSection = document.getElementById('home');

    function resizeCanvas() {
        canvas.width = heroSection.offsetWidth;
        canvas.height = heroSection.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles = [];
    const mouse = { x: null, y: null, radius: 120 };

    // 初始化粒子
    studentList.forEach(student => {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            baseSize: Math.random() * 2 + 2,
            size: Math.random() * 2 + 2,
            speedX: (Math.random() - 0.5) * 0.35,
            speedY: (Math.random() - 0.5) * 0.35,
            name: student.name,
            abbr: student.abbr,
            baseAlpha: Math.random() * 0.4 + 0.4,
            alpha: Math.random() * 0.4 + 0.4
        });
    });

    // 鼠标监听
    heroSection.addEventListener('mousemove', e => {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    heroSection.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            // 移动
            p.x += p.speedX;
            p.y += p.speedY;

            // ===== 边缘完美反弹：修正位置+反向速度，杜绝卡边 =====
            if (p.x <= p.size) {
                p.x = p.size;
                p.speedX = Math.abs(p.speedX);
            }
            if (p.x >= canvas.width - p.size) {
                p.x = canvas.width - p.size;
                p.speedX = -Math.abs(p.speedX);
            }
            if (p.y <= p.size) {
                p.y = p.size;
                p.speedY = Math.abs(p.speedY);
            }
            if (p.y >= canvas.height - p.size) {
                p.y = canvas.height - p.size;
                p.speedY = -Math.abs(p.speedY);
            }

            // 鼠标交互
            let isHover = false;
            if (mouse.x !== null) {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < mouse.radius) {
                    isHover = true;
                    p.size = p.baseSize * 2.2;
                    p.alpha = 1;

                    // 连接线
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255,255,255,${0.25 * (1 - dist / mouse.radius)})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                } else {
                    p.size = p.baseSize;
                    p.alpha = p.baseAlpha;
                }
            } else {
                p.size = p.baseSize;
                p.alpha = p.baseAlpha;
            }

            // 发光粒子
            ctx.save();
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
            ctx.fill();
            ctx.restore();

            // 常态：首字母
            if (!isHover) {
                ctx.font = '10px "Futura", sans-serif';
                ctx.fillStyle = `rgba(255,255,255,${p.alpha * 0.8})`;
                ctx.textAlign = 'center';
                ctx.fillText(p.abbr, p.x, p.y - p.size - 4);
            }

            // 悬停：全名
            if (isHover) {
                ctx.font = '13px "PingFang SC", sans-serif';
                ctx.fillStyle = 'rgba(255,255,255,0.95)';
                ctx.textAlign = 'center';
                const textWidth = ctx.measureText(p.name).width;
                ctx.fillStyle = 'rgba(0,0,0,0.3)';
                ctx.fillRect(p.x - textWidth / 2 - 6, p.y - p.size - 22, textWidth + 12, 20);
                ctx.fillStyle = '#fff';
                ctx.fillText(p.name, p.x, p.y - p.size - 8);
            }
        });

        requestAnimationFrame(drawParticles);
    }

    drawParticles();
});