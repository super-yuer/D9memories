// ==============================================
// 背景音乐播放器 · 无文字纯按钮版
// ==============================================
(function () {
    function init() {
        var audio = document.getElementById('bgMusic');
        var playBtn = document.getElementById('musicToggle');

        if (!audio || !playBtn) return;
        if (typeof musicList === 'undefined' || musicList.length === 0) return;

        var currentIndex = 0;
        var isPlaying = false;

        // 加载指定歌曲
        function loadMusic(index) {
            currentIndex = index;
            audio.src = musicList[index].src;
        }

        // 切换播放/暂停
        function togglePlay() {
            if (isPlaying) {
                audio.pause();
                isPlaying = false;
            } else {
                audio.play().then(function () {
                    isPlaying = true;
                }).catch(function (err) {
                    console.error('播放失败:', err);
                    isPlaying = false;
                });
            }
            updateBtnState();
        }

        // 更新按钮状态
        function updateBtnState() {
            var icon = playBtn.querySelector('i');
            if (!icon) return;
            if (isPlaying) {
                icon.className = 'fa fa-pause';
                playBtn.classList.add('playing');
            } else {
                icon.className = 'fa fa-music';
                playBtn.classList.remove('playing');
            }
        }

        // 自动切下一首
        audio.addEventListener('ended', function () {
            var next = currentIndex + 1;
            if (next >= musicList.length) next = 0;
            loadMusic(next);
            if (isPlaying) audio.play().catch(function () { });
        });

        playBtn.addEventListener('click', togglePlay);
        loadMusic(0);
        updateBtnState();
    }

    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();