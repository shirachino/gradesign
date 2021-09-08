import '../plug/echarts/echarts.js';
import '../plug/vue/vue.min.js';

var chartDom = document.querySelector(".cus-chart");
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '顾客流量统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['日流量', '月流量', '年流量'],
        selected: {
            '日流量': true,
            '月流量': true,
            '年流量': false
        }
    },
    axisPointer: {
        lineStyle: {
            width: 0
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }, {
        type: 'category',
        boundaryGap: false,
        position: 'bottom',
        offset: 30,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }, {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        data: ['第一季度', '第二季度', '第三季度', '第四季度']
    }
    ],
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '日流量',
            type: 'line',
            xAxisIndex: '0',
            data: [33, 38, 61, 88, 110, 40, 21]
        },
        {
            name: '月流量',
            type: 'line',
            xAxisIndex: '1',
            data: [220, 182, 191, 234, 290, 330, 523, 123, 213, 452, 234, 123],
        },
        {
            name: '年流量',
            type: 'line',
            xAxisIndex: '2',

            data: [1241, 4343, 2132, 3232]
        }
    ]
};

option && myChart.setOption(option);
