export default (function (){
    let htmlElement = document.querySelector('html');
    let fontSize = parseFloat(window.getComputedStyle(htmlElement)['font-size'] ) || 16;
    function goPAGE () {
        return navigator.userAgent.toLocaleUpperCase().match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
    }
    function autoSize() {
        let width = document.documentElement.clientWidth;
        let originFontSize = parseFloat(htmlElement.style.fontSize) || 16;
        htmlElement.setAttribute('data-origin-font-size', originFontSize);
        htmlElement.style.fontSize = goPAGE ? (625 * width / 750 * 16 / fontSize + '%') : ( 417 + '%');
    }
    autoSize();
    window.addEventListener('resize', autoSize, false);
})()
