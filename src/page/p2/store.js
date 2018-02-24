/**
 * Created by likuan on 11/17 0017.
 */
//import { createAction } from "redux-actions";
import { connect } from "react-redux";


// ##############
// 页面执行的方法
// ##############
const action = () => ({
    getnjq: payload => ({ type: "FILTER", payload }),
});

// ##############
// 反应：改变数据的方法
// ##############
//过滤条件，入学，年级，学期
const initFilter = {
    ruxue: [],
    nianji: [],
    xueqi: []
};
const filterData = (state = initFilter, { type, payload }) => {
    switch (type) {
        case "FILTER_NIANJI":
            return { ...state };
        case "FILTER_XUEQI":
            return { ...state };
        default:
            return state;
    }
};
// ##############
// 固定不变的数据
// ##############
const thData = () => [
    { title: "序号", dataIndex: "id", sort: 1 },
    { title: "班级名称", dataIndex: "name" },
    { title: "用户名", dataIndex: "username" },
    { title: "所带班级", dataIndex: "daiban" },
    { title: "能查看的班级", dataIndex: "chaban" },
    { title: "所带科目", dataIndex: "daixue" },
    { title: "能查看的学科", dataIndex: "chaxue" }
];
//集合数据
const appState = { filterData,thData };

//合并数据
const reduce = connect(appState => ({
    ...appState,
    //createAction,
    action: action()
}));
export default appState;
export { reduce };
