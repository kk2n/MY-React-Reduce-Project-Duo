import axios from 'axios';

require('es6-promise').polyfill();

let env_t = document.getElementById('root').getAttribute('data-env');
axios.defaults.baseURL = Boolean(env_t) ? env_t : 'http://192.168.1.57:8881';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function get(url = '', fn = o => {
  console.log('没有成功回调');
  return o
}, error = (a, b) => {
  console.log('出现error！'+b);
  return null
}) {
  return axios.get(url).then(res => {
    let {data, code, message, status} = res.data;
    if (!(statusIsErr(status) && !error(code, message))) {
      if (!arrIsNull(data)) {
        return fn(data, res.data);
      } else {
        return error('数据为空', '!');
      }
    } else {
      return null
    }
  })
}
export function post(url = '',data={}, fn = o => {
  console.log('没有成功回调');
  return o
}, error = (a, b) => {
  console.log('出现error'+b);
  return null
}) {
    return axios.post(url,data).then(res => {
        let {data, code, message, status} = res.data;
      if (!(statusIsErr(status) && !error(code, message))) {
        if (!arrIsNull(data)) {
          return fn(data, res.data);
        } else {
          return error('数据为空', '!');
        }
      } else {
        return null
      }
    })
}

export function arrIsNull(arr) {
  if (arr === null || arr === "") {
    return true;
  }
  return arr.length === 0;
}

export function arrIsNoNull(arr) {
  if (!arr) {
    return false;
  }
  return !arr.length === 0;
}

export function statusIsErr(status) {
  return !status;
}

export function statusIsNoErr(status) {
  return !status;
}

export default axios


/*

 withCredentials: true,
 headers: {'X-Requested-With': 'XMLHttpRequest'},
 transformRequest: [data => {
 return querystring.stringify(data);
 }]
 例子
 ajax({
 method: 'post',
 url: '/user/12345',
 data: {
 firstName: 'Fred',
 lastName: 'Flintstone'
 }
 });

 ajax.get('/user')
 .then(res=>{
 log(res)
 })
 .catch((err)=>{
 log(err);
 })

 ajax.post('/user',{
 firstName:'Fred',
 lastName:'Flintstone'
 })
 .then(res=>{
 log(res)
 })
 .catch((err)=>{
 log(err);
 })
 */