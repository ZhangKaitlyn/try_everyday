pjax请求一个在服务器生成的HTML碎片

pjax原理：
  pjax = pushState + ajax;
  
  ajax优点：可实现页面的无刷新操作。
  ajax缺点：无法改变页面的url;无法前进与后退。
  
  通过pushState可以解决ajax带来的问题。
  
  pushState()方法：
    pushState(obj,title,url);
    obj:状态对象；任何可序列号的对象都可以被当做状态对象。存储json字符串，可以用在popState事件中。
    title:目前大多数浏览器不支持或者忽略该参数，传入""比较安全
    url:提供新历史记录的地址。新URL不一定是绝对地址，但若是相对地址，则是相对当前位置的URL。新URL和当前URL必须同源
