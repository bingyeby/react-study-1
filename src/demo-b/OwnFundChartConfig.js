let issueAmountArr = [110, 130, 50, 0];

let xAxisDataArr = [2015, 2016, 2017, 2018];

export default {
    grid: {
        left: 30,
        right: 0,
        top: 30,
        bottom: 40,
    },
    // backgroundColor: '#011821',//背景色
    color: ['rgba(0,153,201,0.5)', 'rgba(7,89,117,0.5)', 'rgba(247,147,30,0.5)', 'rgba(9,177,73,0.255)'],
    tooltip: {
        trigger: 'item',
        extraCssText: 'font-size:12px;border-radius: 0;padding: 0;border: 0px solid white;background-color: #064b5d',
        formatter(params) {
            console.log(params);
            return `
                <div style='padding:10px'>
                    ${xAxisDataArr[params.dataIndex]}<br/>
                    <div style='display:flex;justify-content: space-between;'>
                        <div style='color:#84a4ad'>股东占款(千万)：</div>
                        <div style='color:white;'>${params.data}</div>
                    </div>
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

            // formatter: '{value} ml'
        },
        axisLine: {
            show: false,
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
        name: '(千万)',
        axisTick: {
            onGap: false,
            lineStyle: {
                color: 'transparent',
            },
        },
        axisLabel: {
            color: 'rgba(255,255,255,0.5)',
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            },
        },
    },
    ],
    series: [
        {
            name: '实际新发债券金额',
            type: 'bar',
            data: [110, 130, 50, 0],
            emphasis: {
                itemStyle: {
                    color: '#075975',
                },
            },
            barWidth: 20,
        }
    ],
}
