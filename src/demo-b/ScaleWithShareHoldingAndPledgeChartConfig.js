let xAxisDataArr = [2015, 2016, 2017, 2018, 2019];

let issueAmountArr = [110, 130, 50, 0];
let netFinancingArr = [10, 10, 10, 10, 10];
let amountEndingArr = [120, 250, 300, 300, 20];


let getTipMap = function (params) {
    return params.map(function (n) {
        return `
            <div style='display:flex;justify-content: space-between;'>
                <div style='color:#84a4ad'>${n.seriesName}：</div>
                <div style='color:white;'>${n.data}</div>
            </div>
        `
    }).join('');
};

export default {
    grid: {left: 40, right: 0, top: 10, bottom: 40},
    // backgroundColor: '#011821',//背景色
    color: ['rgba(0,153,201,0.5)', 'rgba(7,89,117,0.5)', 'rgba(247,147,30,0.5)', 'rgba(9,177,73,0.255)'],
    tooltip: {
        trigger: 'axis',
        extraCssText: 'font-size:12px;border-radius: 0;padding: 0;border: 0px solid white;background-color: #064b5d',
        formatter(params) {
            console.log(params);
            return `
                <div style='padding:10px'>
                    ${params[0].name}<br/>
                    ${getTipMap(params)}
                </div>
                
            `
        },
        backgroundColor: '#09455c',
    },
    xAxis: [{
        type: 'category',
        data: xAxisDataArr,
        axisLabel: {
            color: 'rgba(255,255,255,0.5)',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.5)',
            },
        },
        /*坐标刻度*/
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value',
        max: 100,
        min: 0,
        axisLine: {
            show: false
        },
        axisTick: {
            onGap: false,
            lineStyle: {
                color: 'transparent'
            },
        },
        axisLabel: {
            formatter: '{value}%',
            color: 'rgba(255,255,255,0.5)',
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
                type: 'dotted'
            },
        },
    }],
    series: [
        {
            name: '控制人持股比例',
            type: 'line',
            symbol: 'circle',
            symbolSize: 3,
            lineStyle: {
                color: '#09bc48'
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#09bc48',
                    color: 'white',
                    shadowColor: '#f6fdf9',
                    shadowBlur: 5
                }
            },
            data: [61, 10, 10, 0, 10],
        },
        {
            name: '实控人(含一致行动人)持股比例',
            type: 'line',
            symbol: 'circle',
            symbolSize: 3,
            lineStyle: {
                color: '#f7931e'
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#f7931e',
                    color: 'white',
                    shadowColor: '#feefde',
                    shadowBlur: 5
                }
            },
            data: netFinancingArr,
        }
    ],
}
