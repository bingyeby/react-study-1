export default {
    title: {
        text: '董事会总席位:9',
        x: 'center',
        textStyle: {
            color: 'white',
            fontWeight: 'normal',
            fontSize: 13
        }
    },
    tooltip: {
        trigger: 'item',
        // formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        show: false
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            center: ['50%', '55%'],
            radius: [0, '80%'],
            data: [
                {
                    value: 335,
                    name: '实际控制人派驻董事会',
                    chartsShowTip: '实际控制人派驻董事会数量',
                    itemStyle: {
                        color: '#009245'
                    }
                },
                {
                    value: 310,
                    name: '独立董事',
                    chartsShowTip: '独立董事数量',
                    itemStyle: {
                        color: '#00a99d'
                    }
                },
                {
                    value: 234,
                    name: '一致行动人派驻董事会',
                    chartsShowTip: '一致行动人派驻董事会数量',
                    itemStyle: {
                        color: '#8cc63f'
                    }
                },
                {
                    value: 135,
                    name: '其他',
                    chartsShowTip: '其他',
                    itemStyle: {
                        color: '#0071bc'
                    }
                }
            ],
            tooltip: {
                extraCssText: 'font-size:12px;border-radius: 0;padding: 0;border: 0px solid white;background-color: #064b5d',
                formatter(params) {
                    console.log('params', params);
                    return `
                        <div style='padding:15px 10px'>
                            <div style='display:flex;justify-content: space-between;'>
                                <div style='color:#84a4ad'>${params.data.chartsShowTip}：</div>
                                <div style='color:white;'>${params.value}</div>
                            </div>
                            <div style='display:flex;justify-content: space-between;'>
                                <div style='color:#84a4ad'>占比：</div>
                                <div style='color:white;'>${params.percent}%</div>
                            </div>
                        </div>
                    `
                },
                position: function (point, params, dom, rect, size) {
                    // dom.setAttribute('style','')
                    return [point[0], '10%'];
                }

            },
            label: {
                show: false
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}