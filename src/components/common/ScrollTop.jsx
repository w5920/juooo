var offsetTop = 0;
var canPoP = true; //push可能会触发pop在这节流
hashHistory.listen((location) => {
  if (canPoP) {
    canPoP = false;
    if (location.action !== "POP") {
      //记住浏览器位置
      offsetTop = getScrollOffset();
    }
    setTimeout(() => {
      //浏览器前进后退
      if (location.action === "POP") {
        if (offsetTop > 0) {
          window.scrollTo(0, offsetTop);
        }
        return;
      }
      window.scrollTo(0, 0);
    }, 5);
    setTimeout(function () {
      canPoP = true;
    }, 500);
  }
});
