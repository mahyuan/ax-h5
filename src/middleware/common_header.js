export default (function() {
    const htmlElement = document.querySelector('html');
    const fontSize = parseFloat(window.getComputedStyle(htmlElement)['font-size']) || 16;
    function goPAGE() {
        return navigator.userAgent.toLocaleUpperCase().match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    }
    function autoSize() {
        const width = document.documentElement.clientWidth;
        const originFontSize = parseFloat(htmlElement.style.fontSize) || 16;
        htmlElement.setAttribute('data-origin-font-size', originFontSize);

        htmlElement.style.fontSize = goPAGE() ? (625 * width / 750 * 16 / fontSize + '%') : (417 + '%');
    }
    autoSize();
    window.addEventListener('resize', autoSize, false);

    /**
     * 添加meta: <meta name="referrer" content="no-referrer" />
     * 取消阻止加载不同域的图片
     */
    const refMeta = document.createElement('meta');
    refMeta.setAttribute('name', 'referrer');
    refMeta.setAttribute('content', 'no-referrer');
    const headElement = document.querySelector('head');
    headElement.prepend(refMeta);
})();
