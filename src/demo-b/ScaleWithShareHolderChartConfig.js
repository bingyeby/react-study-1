let xAxisDataArr = [2015, 2016, 2017, 2018, 2019];
let getTipMap = function (params) {
    return params.map(function (n) {
        return `
            <div class="chart-tip-body">
                <div class="chart-tip-body-key">${n.seriesName}：</div>
                <div class="chart-tip-body-value">${n.data}</div>
            </div>
        `
    }).join('<div style="height: 8px"></div>');
};

export default {
    grid: {left: 40, right: 0, top: 10, bottom: 40},
    // backgroundColor: '#011821',//背景色
    color: ['rgba(0,153,201,0.5)', 'rgba(7,89,117,0.5)', 'rgba(247,147,30,0.5)', 'rgba(9,177,73,0.255)'],
    tooltip: {
        trigger: 'axis',
        extraCssText: 'font-size:12px;border-radius: 0;padding: 0;border: 0px solid white;background-color: #064b5d;font-family:"宋体"',
        formatter(params) {
            console.log(params);
            return `
                <style>
                    .chart-tip-wrap{
                        padding: 12px;
                    }
                    .chart-tip-head{
                        color:#ffffff;
                        font-size: 12px;
                        line-height: 12px;
                        padding-bottom: 10px;
                    }
                    .chart-tip-body{
                        display:flex;
                        justify-content: space-between;
                        line-height:10px;
                        font-size: 10px;

                    }
                    .chart-tip-body-key{
                        color:rgba(255,255,255,0.5); 
                    }
                    .chart-tip-body-value{
                        color:#ffffff;
                    }
                </style>
                <div class="chart-tip-wrap">
                    <div class="chart-tip-head">${params[0].name}</div>
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
            name: '股东资产占比：',
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
            data: [30, 40, 50, 10, 90],
        },
        {
            name: '股东净利润占比：',
            type: 'line',
            symbol: 'circle',
            symbolSize: 3,
            lineStyle: {
                color: '#0099c9'
            },
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#0099c9',
                    color: 'white',
                    shadowColor: '#feefde',
                    shadowBlur: 5
                }
            },
            data: [50, 10, 40, 50, 60],
        },
        {
            name: '股东收入占比：',
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
            data: [50, 90, 10, 30, 40],
        }
    ],
}
