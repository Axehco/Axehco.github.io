export default () => {
    function addCopy(e) {
      let copyTxt = ""
      e.preventDefault(); // 取消默认的复制事件
      copyTxt = window.getSelection(0).toString()
      copyTxt = `${copyTxt}\n\n作者：钟波\n原文链接：${window.location.href}\n版权声明：本文为博主的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。`
      const clipboardData = e.clipboardData || window.clipboardData
      clipboardData.setData('text', copyTxt);
    }
    document.addEventListener("cut", e => {
      addCopy(e)
    });
    document.addEventListener("copy", e => {
      addCopy(e)
    });
  }