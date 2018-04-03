let _ = require('./lodash.core')
let a = {
    name: '本企业',
    sons: [
        {
            name: '资金',
            sons: [
                {
                    name: '股东担保',
                    sons: []
                },
                {
                    name: '对外担保',
                    sons: [
                        {
                            name: '1蔡成功',
                        },
                        {
                            name: '1蔡成功1',
                        },
                        {
                            name: '1蔡成功2',
                        },
                        {
                            name: '1蔡成功3',
                        },
                        {
                            name: '1蔡成功4',
                        },
                    ]
                }
            ]
        }, {
            name: '人物',
        }
    ]
};




console.log(JSON.stringify({
    data: data,
    links: links
}));



