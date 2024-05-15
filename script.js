// 获取页面元素
const themeQueryBtn = document.getElementById('theme-query-btn');
const bubbleQueryBtn = document.getElementById('bubble-query-btn');
const queryInput = document.getElementById('query-input');
const queryResult = document.getElementById('query-result');
const imageA = document.getElementById('image-a');
const imageB = document.getElementById('image-b');

// 监听按钮点击事件
themeQueryBtn.addEventListener('click', handleThemeQuery);
bubbleQueryBtn.addEventListener('click', handleBubbleQuery);

// 处理主题查询
function handleThemeQuery() {
  const num = queryInput.value;
  queryResult.innerHTML = '<a href="' + 'https://zb.vip.qq.com/mall/item-detail?appid=3&itemid=' + num + '_nav_titleclr=000000&_nav_txtclr=000000' + '">' + '点击跳转到QQ装扮查看该主题详情' + '</a>'; 
  // 将生成的链接作为超链接的 href 属性;

  // 生成图片链接
  const linkA = 'https://tianquan.gtimg.cn/theme/item/' + num + '/a.jpg';
  const linkB = 'https://tianquan.gtimg.cn/theme/item/' + num + '/newPreview1.png';

  // 设置图片链接
  imageA.src = linkA;
  imageB.src = linkB;
}

// 处理气泡查询
function handleBubbleQuery() {
  const num = queryInput.value;
  queryResult.innerHTML = '<a href="' + 'https://zb.vip.qq.com/mall/item-detail?appid=3&itemid=' + num + '_nav_titleclr=000000&_nav_txtclr=000000' + '">' + '点击跳转到QQ查看该气泡详情' + '</a>'; 
  // 将生成的链接作为超链接的 href 属性;
  
  // 生成图片链接
  const linkA = 'https://tianquan.gtimg.cn/bubble/item/' + num + '/250x300_1.png';
  const linkB = 'https://tianquan.gtimg.cn/bubble/item/' + num + '/newPreview1.png';

  // 设置图片链接
  imageA.src = linkA;
  imageB.src = linkB;
}