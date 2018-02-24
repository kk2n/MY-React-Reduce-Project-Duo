/** @format */

import React, { Component } from 'react';
import { reduce } from "./store";

import { get } from "../../comm-util/axios";
@reduce
export default class extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    componentWillMount() {
        //获取过滤条件
        get("/filterData", data => {
            let grade = data[0].sub[0].id;
            this.setState({ grade });
        });
    }
    //##############################
    //容器组件的HTML
    //##############################
    render() {
        return <div className="likuan">1</div>;
    }
}

//##############################
//子组件
//##############################
