// ==============================================
// 神秘人士：纯文字卡片 · 每次刷新随机分配语录
// ==============================================

const memberGrid = document.getElementById('memberGrid');
const memberModal = document.getElementById('memberModal');
const modalName = document.getElementById('modalName');
const modalSign = document.getElementById('modalSign');
const closeMemberModal = document.getElementById('closeMemberModal');

// Fisher-Yates 洗牌算法，保证随机均匀
function shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 动态渲染卡片
function renderMembers() {
    // 打乱语录池，随机分配
    const shuffledSigns = shuffleArray(signPool);
    const membersWithSign = memberList.map((member, index) => ({
        ...member,
        sign: shuffledSigns[index]
    }));

    membersWithSign.forEach(member => {
        const card = document.createElement('div');
        // 纯文字卡片，居中排版，去掉图片
        card.className = 'member-card bg-white/70 rounded-lg p-8 text-center fade-in flex flex-col items-center justify-center min-h-[160px]';
        card.innerHTML = `
            <h4 class="font-bold text-lg mb-2">${member.name}</h4>
            <p class="text-sm opacity-70">点击解锁语录</p>
        `;
        card.addEventListener('click', () => {
            modalName.textContent = member.name;
            modalSign.textContent = member.sign;
            memberModal.classList.remove('hidden');
            memberModal.classList.add('flex');
        });
        memberGrid.appendChild(card);
        observer.observe(card);
    });
}

// 关闭弹窗
closeMemberModal.addEventListener('click', () => {
    memberModal.classList.add('hidden');
    memberModal.classList.remove('flex');
});
memberModal.addEventListener('click', (e) => {
    if (e.target === memberModal) {
        memberModal.classList.add('hidden');
        memberModal.classList.remove('flex');
    }
});

document.addEventListener('DOMContentLoaded', renderMembers);