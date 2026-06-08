const themeQueryBtn = document.getElementById('theme-query-btn');
const bubbleQueryBtn = document.getElementById('bubble-query-btn');
const queryInput = document.getElementById('query-input');
const queryResult = document.getElementById('query-result');
const imageA = document.getElementById('image-a');
const imageB = document.getElementById('image-b');

let currentMode = 'theme';

function notify(title, text) {
    if (typeof swal === 'function') {
        swal(title, text, 'success');
        return;
    }
    alert(title + '\n' + text);
}

notify('通知', '网站优化中，若有bug请联系QQ2471328478。');

themeQueryBtn.addEventListener('click', () => {
    currentMode = 'theme';
    setActive(themeQueryBtn, bubbleQueryBtn);
    queryTheme();
});

bubbleQueryBtn.addEventListener('click', () => {
    currentMode = 'bubble';
    setActive(bubbleQueryBtn, themeQueryBtn);
    queryBubble();
});

queryInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (currentMode === 'theme') {
            queryTheme();
        } else {
            queryBubble();
        }
    }
});

function setActive(activeBtn, inactiveBtn) {
    activeBtn.classList.add('active');
    inactiveBtn.classList.remove('active');
}

function resetImages() {
    imageA.style.display = 'none';
    imageB.style.display = 'none';
    imageA.removeAttribute('src');
    imageB.removeAttribute('src');
}

function showImage(img, url) {
    img.style.display = 'block';
    img.style.opacity = '0';
    img.onload = () => {
        img.style.opacity = '1';
    };
    img.onerror = () => {
        img.style.display = 'none';
    };
    img.src = url;
}

function queryTheme() {
    const num = queryInput.value.trim();
    if (!num) return;

    queryResult.innerHTML = `
        <a href="https://zb.vip.qq.com/mall/item-detail?appid=3&itemid=${num}_nav_titleclr=000000&_nav_txtclr=000000"
           target="_blank">
           点击此处跳转到QQ查看该主题详情
        </a>
    `;

    resetImages();

    showImage(
        imageA,
        `https://tianquan.gtimg.cn/theme/item/${num}/newPreview2.jpg`
    );
}

function queryBubble() {
    const num = queryInput.value.trim();
    if (!num) return;

    queryResult.innerHTML = `
        <a href="https://zb.vip.qq.com/mall/item-detail?appid=2&itemid=${num}_nav_titleclr=000000&_nav_txtclr=000000"
           target="_blank">
           点击此处跳转到QQ查看该气泡详情
        </a>
    `;

    resetImages();

    showImage(
        imageA,
        `https://tianquan.gtimg.cn/bubble/item/${num}/250x300_1.png`
    );

    showImage(
        imageB,
        `https://tianquan.gtimg.cn/bubble/item/${num}/newPreview1.png`
    );
}
