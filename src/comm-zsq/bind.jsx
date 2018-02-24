/**
 * Created by likuan on 2/1 0001.
 */
export default function addFunc(target) {
  target.prototype.addFunc = () => {
    return 'i am addFunc'
  }
  return target;
}
