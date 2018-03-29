

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
        formatter (params) {
            return fooltip(params, dateFormat(params[0].name, 'yyyy/MM/dd'), 300, 1)
        },
        backgroundColor: '#09455c',
        trigger: 'axis',

    },
    legend: {
        data: [
            {
                name: '实际新发债券金额',
                icon: 'rect',
                textStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 12,
                },
            },
            {
                name: '实际偿还债券金额',
                icon: 'rect',
                textStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 12,
                },
            },
            {
                name: '企业发债净融资',
                icon: 'diamond',
                textStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 12,
                },
            },
            {
                name: '年末存量债券余额',
                icon: 'diamond',
                textStyle: {
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 12,
                },
            }],
        right: 0,
        top: 290,
        itemHeight: 6,
        itemWidth: 14,
    },
    xAxis: [{
        type: 'category',
        data: dateArr,
        // axisPointer: {
        //     type: 'shadow'
        // },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.5)',
            },
        },
    }],
    yAxis: [{
        type: 'value',
        name: '(亿元)',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.5)',
            },
        },
        axisTick: {
            onGap: false,
            lineStyle: {
                color: 'transparent',
            },
        },
        axisLabel: {
            color: 'rgba(255,255,255,0.5)',
            // formatter: '{value} ml'
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
            data: issueAmountArr,
            emphasis: {
                itemStyle: {
                    color: '#075975',
                },
            },
            barWidth: 19,

        },
        {
            name: '实际偿还债券金额',
            type: 'bar',
            data: payAmountArr,
            emphasis: {
                itemStyle: {
                    color: '#0099c9',
                },
            },
            barWidth: 19,
        },
        {
            name: '企业发债净融资',
            type: 'line',
            symbol: 'circle',
            data: netFinancingArr,
        },
        {
            name: '年末存量债券余额',
            type: 'line',
            symbol: 'circle',
            data: amountEndingArr,
        },
    ],
}
