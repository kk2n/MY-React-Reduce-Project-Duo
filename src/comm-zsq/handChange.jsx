import React, { Component } from "react";
//表单公用的onChange方法,注意：需传入的对象为属性fromObj，目的接收变化后的值
//返回一个props，handChange
//使用方法：handChange事件
//{...this.props.handChange("zongfen")}相当于onChange={this.props.handChange.handChange("zongfen")},里面的"zongfen",为返回对象的键
export default WComp => {
    return class extends Component {
        state = {
            fromObj: this.props.fromObj
        };
        //公共的change
        onChange = (val, key) => {
            this.setState(
                (state, props) => +(state.fromObj[key] = val) && state
            );
        };
        render() {
            //绑定操作
            let props = {
                ...this.props,
                ...this.state,
                handChange: val => ({
                    onChange: key => this.onChange(key, val)
                })
            };
            return <WComp {...props} />;
        }
    };
}