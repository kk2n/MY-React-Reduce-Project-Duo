/**
 * Created by likuan on 10/24 0024.
 */
//转义html标签
export function htmlEncode(text) {
  return text
    .replace(/&/g, "&")
    .replace(/\"/g, '"')
    .replace(/</g, "<")
    .replace(/>/g, ">");
}
//反义html标签
export function htmlDecode(text) {
  let temp = document.createElement("div");
  temp.innerHTML = text;
  let output = temp.innerText || temp.textContent;
  temp = null;
  return output;
}
//获取页面高度
export function getDocHei() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
}
//获取页面宽度
export function getDocWid() {
  let g = document,
    a = g.body,
    f = g.documentElement,
    d = g.compatMode == "BackCompat" ? a : g.documentElement;
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
}
//获取页面可视宽度
export function getWinWid() {
  let d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientWidth;
}
//获取页面可视高度
export function getWinHei() {
  let d = document,
    a = d.compatMode == "BackCompat" ? d.body : d.documentElement;
  return a.clientHeight;
}

//判断所用浏览器，直接返回浏览器名称，IE下返回版本...
//@return {string}
export function browserVer() {
  let explorer = window.navigator.userAgent;
  let browser = "";
  if (explorer.indexOf("MSIE") >= 0) {
    // ie10及以下
    let b_version = navigator.appVersion;
    let version = b_version.split(";");
    version = version[1].replace(/[ ]/g, "");
    version = version.split("MSIE")[1];
    browser = "IE:" + version;
  } else if (explorer.indexOf("Firefox") >= 0) {
    // Firefox
    browser = "Firefox";
  } else if (explorer.indexOf("Chrome") >= 0) {
    // Chrome
    browser = "Chrome";
  } else if (explorer.indexOf("Opera") >= 0) {
    // Opera
    browser = "Opera";
  } else if (explorer.indexOf("Safari") >= 0) {
    // Safari
    browser = "Safari";
  } else if (explorer.indexOf("Trident/7.0") >= 0) {
    // IE11
    browser = "IE:10.0以上";
  }
  return browser;
}
/*=================================
 根据ID获取DOM
 @return {object},但强制转换成数组对象
 =================================
 */
export function getId(id) {
  return [document.getElementById(id.replaceAll("#", ""))];
}
/*=================================
 根据class获取DOM
 @return {array}
 =================================
 */
export function getClass(myclass) {
  return document.getElementsByClassName(myclass.replaceAll("\\.", ""));
}
export function addClass(tag, name) {
  tag.className += " " + name;
}
//获取url参数
export function getUrl(name) {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return null;
}
export function goUrl(url) {
  window.location.href = url;
}
/**
 * 动态加载脚本文件
 */
export function appendscript(src, text, reload, charset) {
  let id = hash(src + text);
  if (!reload && in_array(id, evalscripts)) return;
  if (reload && $(id)) {
    $(id).parentNode.removeChild($(id));
  }

  evalscripts.push(id);
  let scriptNode = document.createElement("script");
  scriptNode.type = "text/javascript";
  scriptNode.id = id;
  scriptNode.charset = charset
    ? charset
    : BROWSER.firefox ? document.characterSet : document.charset;
  try {
    if (src) {
      scriptNode.src = src;
      scriptNode.onloadDone = false;
      scriptNode.onload = function() {
        scriptNode.onloadDone = true;
        JSLOADED[src] = 1;
      };
      scriptNode.onreadystatechange = function() {
        if (
          (scriptNode.readyState == "loaded" ||
            scriptNode.readyState == "complete") &&
          !scriptNode.onloadDone
        ) {
          scriptNode.onloadDone = true;
          JSLOADED[src] = 1;
        }
      };
    } else if (text) {
      scriptNode.text = text;
    }
    document.getElementsByTagName("head")[0].appendChild(scriptNode);
  } catch (e) {}
}

//生成下载,以下载文件框的形式弹出
export function downOpen(href, title) {
  const a = document.createElement("a");
  a.setAttribute("href", href);
  a.setAttribute("download", title);
  a.click();
}

//动态创建表单
export function formSubmit(data = {}, url = "", _blank = 0) {
  let turnForm = document.createElement("form");
  document.body.appendChild(turnForm);
  turnForm.method = "post";
  turnForm.action = url;
  _blank ? (turnForm.target = "_blank") : "";
  let newElement = document.createElement("input");
  newElement.setAttribute("name", "obj");
  newElement.setAttribute("type", "hidden");
  newElement.setAttribute("value", jsonToStr(data));
  turnForm.appendChild(newElement);
  turnForm.submit();
}

/*
* Bottom visible (页面的底部是否可见)
使用 scrollY，scrollHeight 和 clientHeight 来确定页面的底部是否可见。
如果到底返回true，如果没到返回clientHeight
*/
// bottomVisible() -> true
export function bottomVisible() {
  return (
    document.documentElement.clientHeight + window.scrollY >=
      document.documentElement.scrollHeight ||
    document.documentElement.clientHeight
  );
}

/*
* Get scroll position (获取滚动条位置)
如果浏览器支持 pageXOffset 和 pageYOffset ，那么请使用 pageXOffset 和 pageYOffset ，否则请使用 scrollLeft 和 scrollTop 。 你可以省略 el 参数，默认值为 window。*/
// getScrollPos() -> {x: 0, y: 200}
export function getScrollPos(el = window) {
  return {
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
  };
}
/*
Redirect to URL (重定向到URL)
* 使用 window.location.href 或 window.location.replace() 重定向到 url 。 传递第二个参数来模拟链接点击(true – 默认值)或HTTP重定向(false)。*/
// redirect('https://google.com')
export function redirect(url, asLink = true) {
  return asLink ? (window.location.href = url) : window.location.replace(url);
}

/*
* Scroll to top (回到顶部)
使用 document.documentElement.scrollTop 或 document.body.scrollTop 获取到顶部距离。从顶部滚动一小部分距离。使用window.requestAnimationFrame() 来实现滚动动画。*/
// scrollToTop()
export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

/*URL parameters(网址参数)
通过适当的正则表达式，使用 match() 来获得所有的键值对， Array.reduce() 来映射和组合成一个单一的对象。将 location.search 作为参数传递给当前 url。*/
// getUrlParam('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}
export function getUrlParam(url) {
  return url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
      ),
      {}
    );
}

/*
Validate email(邮箱验证)
使用正则表达式来检查电子邮件是否有效。如果电子邮件有效，则返回 true ，否则返回false 。*/
// isEmail('10') -> true
export function isEmail(str) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    str
  );
}
/*
* Validate number (数字验证)
使用 !isNaN 和 parseFloat() 来检查参数是否是一个数字。使用 isFinite() 来检查数字是否是有限数。使用 Number() 来检查强制转换是否成立。*/
export function isNumber(n){return !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;}
