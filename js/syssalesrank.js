import '../plug/echarts/echarts.js';
import '../plug/vue/vue.min.js';

var vm = new Vue({
    el: '#day_sales_rank',
    data: {
        rankGoodsPerDay: [{
            name: '绿茶',
            sales: 100
        }, {
            name: '红茶',
            sales: 200
        }, {
            name: '四季春',
            sales: 60
        }, {
            name: '乐事',
            sales: 20
        }, {
            name: '奥利奥',
            sales: 300
        }, {
            name: '农夫山泉',
            sales: 222
        }, {
            name: '德芙',
            sales: 5
        }, {
            name: 'test',
            sales: 1213123
        }],
        rankGoodsPerWeek:[],
        rankGoodsPerMonth:[]
    },
    created() {
        // this.getSaleGoodsPerDay();
        // this.getSaleGoodsPerWeek();
        // this.getSaleGoodsPerMonth();
    },
    mounted(){
        this.dayChart(),
        this.weekChart(),
        this.monthChart()
    },
    methods: {
        dayChart() {
            var myChart = echarts.init(document.getElementById('day_sales_rank'));
            var option;
            var rg = this.rankGoodsPerDay;
            option = {
                
                dataset: [{
                    dimensions: ['name', 'sales'],
                    source: [
                        [rg[0].name, rg[0].sales],
                        [rg[1].name, rg[1].sales],
                        [rg[2].name, rg[2].sales],
                        [rg[3].name, rg[3].sales],
                        [rg[4].name, rg[4].sales],
                        [rg[5].name, rg[5].sales],
                        [rg[6].name, rg[6].sales]
                    ]
                }, {
                    transform: {
                        type: 'sort',
                        config: { dimension: 'sales', order: 'desc' }
                    }
                }],
                xAxis: {
                    type: 'category',
                    axisLabel: { interval: 0, rotate: 30 },
                },
                yAxis: {},
                series: {
                    type: 'bar',
                    encode: { x: 'name', y: 'score' },
                    datasetIndex: 1
                },
                color:['#ff9999']
            };

            option && myChart.setOption(option);
        },
        weekChart() {
            var myChart = echarts.init(document.getElementById('week_sales_rank'));
            var option;
            var rg = this.rankGoodsPerDay;
            option = {
                
                dataset: [{
                    dimensions: ['name', 'sales'],
                    source: [
                        [rg[0].name, rg[0].sales],
                        [rg[1].name, rg[1].sales],
                        [rg[2].name, rg[2].sales],
                        [rg[3].name, rg[3].sales],
                        [rg[4].name, rg[4].sales],
                        [rg[5].name, rg[5].sales],
                        [rg[6].name, rg[6].sales]
                    ]
                }, {
                    transform: {
                        type: 'sort',
                        config: { dimension: 'sales', order: 'desc' }
                    }
                }],
                xAxis: {
                    type: 'category',
                    axisLabel: { interval: 0, rotate: 30 },
                },
                yAxis: {},
                series: {
                    type: 'bar',
                    encode: { x: 'name', y: 'score' },
                    datasetIndex: 1
                },
                color:['#ffcc99']
            };

            option && myChart.setOption(option);
        },
        monthChart() {
            var myChart = echarts.init(document.getElementById('month_sales_rank'));
            var option;
            var rg = this.rankGoodsPerDay;
            option = {
                
                dataset: [{
                    dimensions: ['name', 'sales'],
                    source: [
                        [rg[0].name, rg[0].sales],
                        [rg[1].name, rg[1].sales],
                        [rg[2].name, rg[2].sales],
                        [rg[3].name, rg[3].sales],
                        [rg[4].name, rg[4].sales],
                        [rg[5].name, rg[5].sales],
                        [rg[6].name, rg[6].sales]
                    ]
                }, {
                    transform: {
                        type: 'sort',
                        config: { dimension: 'sales', order: 'desc' }
                    }
                }],
                xAxis: {
                    type: 'category',
                    axisLabel: { interval: 0, rotate: 30 },
                },
                yAxis: {},
                series: {
                    type: 'bar',
                    encode: { x: 'name', y: 'score' },
                    datasetIndex: 1
                },
                color:['#80aaff']
            };

            option && myChart.setOption(option);
        }
    }
})



