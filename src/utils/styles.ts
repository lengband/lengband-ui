export const loadCssCode = (code: string): void => {
  var style = document.createElement('style');
  //for Chrome Firefox Opera Safari
  style.appendChild(document.createTextNode(code));
  //for IE
  //style.styleSheet.cssText = code;
  var head = document.getElementsByTagName('head')[0];
  console.log(head);
  head.appendChild(style);
}
