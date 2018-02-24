/*=========================
 Arr数组和Str字符串的原型扩展
=========================*/
import './prototype'

/*=========================
 session和LocalStrong数据存储
=========================*/
export {
    lsSet, lsGet, lsDel, ssSet, ssGet, ssDel, ssDelAll, ssGetObj
}
    from './sessionAndLocalStrong'

/*=========================
 DOM相关
=========================*/
export {
    htmlDecode, htmlEncode, getClass, getDocHei, getDocWid, getWinWid, getWinHei,
    browserVer, getId, addClass, getUrl, goUrl, appendscript, downOpen, formSubmit,bottomVisible,getUrlParam,scrollToTop,redirect,getScrollPos,isEmail,isNumber
} from './DOM'

/*=========================
 数据和字符串转化
=========================*/
export {
    arrHasObj,arrSort,jsonToStr,strToJson,swapIndex,delRepeat,_delRepeat,objKeyToVal,arrJj,arrHj,arrRemove,delFalse,fillArray,nth,pick,arrToObject,sClone,qClone,objectToArr
} from './Data'

//是否
export function isTrue(or,yes,no){
    if(or){
        yes()
    }else{
        no()
    }
}

//获取当前日期
export function getNowDate(x) {
    let lianjie = x || '-';//连接符
    let now = new Date();
    let month = now.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    let day = now.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    return now.getFullYear() + lianjie + month + lianjie + day;
}

//判断字符是否为数字，两个参数（1:字符，2:强制模式[012]不能算数字，默认为true）
//例子：
// strIsNumber('0123',true)//返回false
// strIsNumber('0123',false)//返回true
export function strIsNumber(x,y=true){
    let reg=y?/^[1-9]\d*$|^0$/:/^\d+$/;    
    return reg.test(x);
}
//判断字符是否是浮点类型的字符
export function strIsFloat(x){
    let reg=/^\d+(\.\d+)?$/;
    return reg.test(x);
}
//判断obj是否是空{}
export function obj_empty(obj){
  return JSON.stringify(obj) == "{}"
}
//清除句子中包含得空格
export function str_space(text) {
  let result = zi.replace(/(^\s+)|(\s+$)/g,"");
  return result.replace(/\s/g,"");
}
//数组排序
export function arr_sort(arr,zmp=3){
  arr.sort(function(a, b) {
    if(zmp === 1){
      return a - b;   //从小到大排
    }else if(zmp === 2){
      return b - a;   //从大到小排
    }else {
      return Math.random() - 0.5;   //数组洗牌
    }
  });
  return arr;
}

//数组去除重复chongfu([1,2,3,4,5,1,1]),返回12345
export function arr_repeat(arr) {
  let result = [], json = {};
  for (let i = 0, len = arr.length; i < len; i++){
    if (!json[arr[i]]) {
      json[arr[i]] = 1;
      result.push(arr[i]);  //返回没被删除的元素
    }
  }
  return result;
}
//输入数组，会随机抽取数组中得一个值输出
export function arr_random(arr){
  return arr[Math.floor((Math.random()*arr.length))];
}
export default {}

export function __(obj){
  return _.chain(obj);
}