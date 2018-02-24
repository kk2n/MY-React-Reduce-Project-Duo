const Mock = require("mockjs");
const M = Mock.Random;
module.exports = {
    //DEMO
    demo: Mock.mock({
        "data|6": [
            {
                "id|+1": 2,
                "name|1": "@cname",
                "date|1": "@date",
                "sex|1": ["男", "女"],
                email: "@email",
                "grade|1": ["高一", "高二", "高三"]
            }
        ]
    })
};
