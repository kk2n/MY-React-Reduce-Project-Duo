//数组是否包含
export function arrHasObj(arr, val) {
  let zhi = arr.findIndex(function(value, index, arr) {
    return value[_.keys(val)] == val[_.keys(val)];
  });
  return zhi != -1;
}

//数组去除重复 delRepeat([1,2,3,4,5,1,1]),返回[1,2,3,4,5]
export function delRepeat(arr) {
  let o = {};
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let k = arr[i];
    if (!o[k]) {
      o[k] = true;
      new_arr.push(k);
    }
  }
  return new_arr;
}
//数组去重复，
export function _delRepeat(arr, isSort, iterator) {
  return _.uniq(arr, isSort, iterator);
}
//数组交集
/*
arrJj(arr,arr);
参数：(数组,数组);
作用：找到两个数组中相同的（数组交集）;
* let arr = arrJj([1,2,3,4],[2,3,7,8,9]);
* => arr=[2,3]
* */
export function arrJj(a, b) {
  const s = new Set(b);
  return a.filter(x => s.has(x));
}

//数据合集
// union([1,2,3], [4,3,2]) -> [1,2,3,4]
export function arrHj(a, b) {
  return Array.from(new Set([...a, ...b]));
}

//数组移除
/*remove(arr func)
参数：(数组,方法);
目的：从数组中，按照func方法移除数据
remove([1, 2, 3, 4], n => n % 2 == 0) -> [2, 4]
*
* */
export function arrRemove(arr, func) {
  return Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];
}
///*
// delFalse (过滤掉数组中所有假值元素)
//使用 Array.filter() 过滤掉数组中所有 假值元素(false, null, 0, "", undefined, and NaN)。*/
// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
export function delFalse(arr) {
  return arr.filter(v => v);
}

// fillArray([1,2,3,4],'8',1,3) -> [1,'8','8',4]
/*
* 使用 Array.map() 将指定值映射到 start(包含)和  end (排除)之间。省略  start 将从第一个元素开始，省略 end 将在最后一个元素完成。*/
export function fillArray(arr, value, start = 0, end = arr.length) {
  return arr.map((v, i) => (i >= start && i < end ? value : v));
}

/*
* Nth element of array (获取数组的第N个元素)
使用 Array.slice() 获取数组的第 n 个元素。如果索引超出范围，则返回 [] 。省略第二个参数 n ，将得到数组的第一个元素。*/
// nth(['a','b','c'],1) -> 'b'
// nth(['a','b','b']-2) -> 'a'
export function nth(arr, n = 0) {
  return (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
}

/*
* Pick(提取)
使用 Array.reduce() 只 过滤/萃取 出 arr 参数指定 key (如果 key 存在于 obj 中)的属性值，。*/
// pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a', 'c']) -> { 'a': 1, 'c': 3 }
// pick(object, ['a', 'c'])['a'] -> 1
export function pick(obj, arr) {
  return arr.reduce(
    (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {}
  );
}

//数组排序
export function arrSort(arr, zmp = 3) {
  return arr;
}

export function strToJson(str) {
  return JSON.parse(str);
}
//json转字符
export function jsonToStr(json) {
  return JSON.stringify(json);
}

//数组序列互换位置
export function swapIndex(arr, index1, index2) {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0];
  return arr;
}

export function arrayEq(arr1, arr2) {}
//对象里通过key找值，没有key,可设默认值
export function objKeyToVal(obj, key, def) {
  return _.result(obj, key, def);
}

/*
Object from key-value pairs (根据键值对创建对象)
使用 Array.reduce() 来创建和组合键值对。
* */
// objectFromPairs([['a',1],['b',2]]) -> {a: 1, b: 2}
export function arrToObject(arr) {
  return arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
}

/*
* Object to key-value pairs (对象转化为键值对 )
使用 Object.keys() 和  Array.map() 遍历对象的键并生成一个包含键值对的数组*/
// objectToPairs({a: 1, b: 2}) -> [['a',1],['b',2]])
export function objectToArr(obj) {
  return Object.keys(obj).map(k => [k, obj[k]]);
}


/*
* Shallow clone object (浅克隆对象)
使用 Object.assign() 和一个空对象({})来创建原始对象的浅拷贝。*/
export function qClone(obj) {
  return Object.assign({}, obj);
}
/*
* Shallow clone object (深克隆对象)
*/
export function sClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}



