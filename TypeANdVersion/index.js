navigator.sayswho = (function(){
  let agent = navigator.userAgent,tem;
  m = agent.match(/(opera|chrome|safari|firefox|msie |trident(?=\/))\/?\s*(\d+)/i)||[];
  browser = m[1];
  version = m[2];
  if(/trident/i.test(m[1])){
    tem = /\brv[  :]+(\d+)/g.exec(agent)|| [];
    browser='IE';
    version = tem[1];
  }
alert("Type of Browser : "+ browser);
alert("Version Type : "+ version);
})();