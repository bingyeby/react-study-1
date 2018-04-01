export default {
    // title: {text: '关系图谱'},
    tooltip: {
        formatter: (x) => {
            return x.data.des
        },
    },
    series: [
        {
            type: 'graph',
            layout: 'force',// 力引导布局
            //   hoverAnimation: true,
            symbolSize: 80,
            roam: true, //'scale'
            edgeSymbol: ['circle', 'none'],
            edgeSymbolSize: [2, 10],
            // 突出显示节点以及节点的边和邻接节点
            //   focusNodeAdjacency: true,
            //   animation: true,
            cursor: 'pointer',
            force: {// 张力 斥力 决定总体的展示样式
                repulsion: 1000,
                edgeLength: [10, 50],
                // layoutAnimation: false
            },
            draggable: false,
            itemStyle: {
                normal: {
                    color: 'red',
                },
            },
            lineStyle: {// 连接线的样式 宽度 颜色 弯曲程度
                width: 2,
                color: 'red',
                curveness: 0.3,
            },
            edgeLabel: {
                show: true,
                position: 'end',
                normal: {
                    show: true,
                    formatter(x) {
                        return x.data.name
                    },
                },
            },
            label: {
                normal: {
                    position: 'right',
                    show: true,
                    textStyle: {},
                },
            },
            data: [
                {
                    name: '本企业',
                    des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
                    itemStyle: {
                        normal: {
                            color: '#0099c9'
                        }
                    },
                    label: {// 未添加此属性值则默认为旁边显示
                        normal: {
                            position: 'inside',
                        },
                    },
                },
                {
                    name: '资金',
                    des: '汉东省省委常委，京州市市委书记。是一个正义无私的好官。<br/>但为人过于爱惜自己的羽毛，对待身边的亲人和朋友显得有些无情。',
                    itemStyle: {
                        normal: {
                            color: '#3bb9b2'
                        }
                    },
                    label: {
                        normal: {
                            position: 'inside',
                        },
                    },
                    symbolSize: 50
                },
                {
                    name: '人物',
                    des: '汉东省公安厅厅长',
                    itemStyle: {
                        normal: {
                            color: '#3ead65'
                        }
                    },
                    symbolSize: 50,
                    label: {
                        normal: {
                            position: 'inside',
                        },
                    },

                }, {
                    name: '业务',
                    symbolSize: 50,
                    itemStyle: {
                        normal: {
                            color: '#e39132'
                        }
                    },
                    label: {
                        normal: {
                            position: 'inside',
                        },
                    },
                    des: '山水集团董事长，是一位叱咤于政界和商界的风云人物，处事圆滑、精明干练。'
                }, {
                    name: '关联交易',
                    symbolSize: 50,
                    itemStyle: {
                        normal: {
                            color: '#5b7fd8'
                        }
                    },
                    label: {
                        normal: {
                            position: 'inside',
                        },
                    },
                }, {
                    name: '股东担保',
                    symbolSize: 50,
                    itemStyle: {
                        normal: {
                            color: '#5b7fd8'
                        }
                    },
                    label: {
                        normal: {
                            position: 'inside',
                        },
                    },
                }, {
                    name: '赵瑞龙',
                    symbolSize: 20,
                    des: '副国级人物赵立春的公子哥，官二代，打着老子的旗子，<br/>黑白两道通吃，可谓呼风唤雨，权倾一时。',
                }, {
                    name: '吴心怡',
                    symbolSize: 20,
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                }, {
                    name: '蔡成功',
                    symbolSize: 20,
                }
            ],
            links: [
                {
                    source: '本企业',
                    target: '资金',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#0099c9',
                        },
                    },
                }, {
                    source: '本企业',
                    target: '业务',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#0099c9',
                        },
                    },
                }, {
                    source: '本企业',
                    target: '人物',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#0099c9',
                        },
                    },
                }, {
                    source: '资金',
                    target: '股东担保',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#3bb9b2',
                        },
                    },
                }, {
                    source: '资金',
                    target: '关联交易',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#3bb9b2',
                        },
                    },
                }, {
                    source: '股东担保',
                    target: '吴心怡',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#5b7fd8',
                        },
                    },
                }, {
                    source: '股东担保',
                    target: '蔡成功',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#5b7fd8',
                        },
                    },
                }, {
                    source: '股东担保',
                    target: '赵瑞龙',
                    name: '',
                    lineStyle: {
                        normal: {
                            color: '#5b7fd8',
                        },
                    },
                }],
        },
    ],
}