/*
 * description： 本项目公用方法
 * author： renpan
 */
let Common = {};
// 选中table对应行
Common.pitchOnTable = function (vm, id = 'id', singleTable = 'singleTable', list = 'list') {
  if (vm.itemId) {
    let array = vm.list;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      if (element[id] == vm.itemId) {
        // 需要异步操作，不然无法选中
        setTimeout(() => {
          vm.$refs[singleTable].setCurrentRow(array[index]);
          setTimeout(() => {
            vm.$refs[singleTable] ? vm.$refs[singleTable].setCurrentRow() : '';
          }, 2000);
        }, 30)
        break;
      }
    }
  }
}
// 删除如果是当前页最后一项 则返回上一页列表
Common.delPageIndex = function (list, pageIndex) {
  if (list.length == 1 && pageIndex > 1) {
    return pageIndex - 1
  } else {
    return pageIndex
  }
}

/**
 * author：renpan
 * time：20181020
 * @param {*} vm
 */
Common.goBackRouter = function (vm) {
  if (vm.$route.query.goIndex === 'true') {
    vm.$router.push('/');
  } else {
    vm.$router.back(-1);
  }
}
/****************************charts计时器*********************************************/
function timeTicketFun(myChart, option, currentIndex, timeTicketBln = false, timeNum = 3000) {
  let timeTicket = setInterval(function () {
    if (!timeTicketBln) {
      clearInterval(timeTicket);
    }
    let dataLen = option.series[0].data.length;
    //取消之前高亮的图形
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
    // 显示 tooltip
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: currentIndex
    });
  }, timeNum);
}
/**
 * @param
 * dataArr：将要显示的数据数组;
 * seriesName负责存储各条数据条目名字；
 * chartTitle负责存储各图表名字；
 * boxId:用来实例化图表的domId;
 * chartsStyle:图表样式
 * timeTicketBln：自动循环高亮各条数据开关
 * **/
Common.PieEcharts = (echarts, xArr, dataArr, boxId, chartTitle = '', isO = false, timeTicketBln = false) => {

  let option = {
    title: {
      text: chartTitle,
      subtext: '',
      x: 'center'
    },

    tooltip: {
      trigger: 'item',
      formatter: "{b}({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: xArr
    },
    color: ["#ffc600", "#c091fe", "#749efb", "#01f7ff", "#005eaa", "#339ca8", "#cda819", "#32a487"],
    series: [
      {
        name: '',
        type: 'pie',
        radius: isO ? ['50%', '70%'] : '55%',
        label: { normal: { position: 'inner', formatter: "{d}%" } }, labelLine: { normal: { show: false } },
        center: ['50%', '60%'],
        data: dataArr,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  let myChart = echarts.init(document.getElementById(boxId), 'walden');
  myChart.setOption(option);
  let currentIndex = -1;
  timeTicketFun(myChart, option, currentIndex, timeTicketBln, 1000);
  return myChart
};

/**
 * @param
 * resultData：将要显示的数据数组;
 * seriesName负责存储各条数据条目名字；
 * chartTitle负责存储各图表名字；
 * boxId:用来实例化图表的domId;
 * chartsStyle:图表样式
 * timeTicketBln：自动循环高亮各条数据开关
 * **/
Common.LineEcharts = (echarts, serArr, dayTxt, dataArr, boxId, yAxis, chartTitle = '') => {
  let option = {
    title: {
      text: chartTitle,
      subtext: '',
      x: 'center'
    },
    legend: {
      data: serArr,
      left: 'left',
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ["line", "bar"] },
        restore: { show: false },
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        animation: true
      }
    },
    xAxis: {
      data: dayTxt
    },
    yAxis: yAxis,
    color: ["#0098d9", "#c12e34", "#e6b600", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"],
    // dataZoom: [{
    //   startValue: ''
    // }, {
    //   type: 'inside'
    // }],
    series: dataArr
  };
  let myChart = echarts.init(document.getElementById(boxId), 'walden');
  myChart.setOption(option);
  return myChart
};

/**
* @param
* resultData：将要显示的数据数组;
* seriesName负责存储各条数据条目名字；
* chartTitle负责存储各图表名字；
* boxId:用来实例化图表的domId;
* chartsStyle:图表样式
* timeTicketBln：自动循环高亮各条数据开关
* **/

Common.HieEcharts = (echarts, serArr, dayTxt, dataArr, boxId, yAxis, chartTitle = '') => {
  let option = {
    title: {
      text: chartTitle,
      subtext: '',
      x: 'center'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: false, readOnly: false },
        magicType: { show: false, type: ["line", "bar"] },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      left: 'left',
      data: serArr
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        splitLine: { show: false },
        type: 'value',
        // data:[0,10,20,30,40,50,60,70,80,90,100],
        axisLabel:
        {
          color: '#fff',
        },
        axisLine: {
          lineStyle: {
            color: '#116377',
          }
        }
      }
    ],
    yAxis: {
      type: 'category',
      data: yAxis,
      splitLine: { show: false },
      axisLabel: { color: '#fff', },
      axisLine: {
        lineStyle: {
          color: '#116377',
        }
      }
    },
    color: ["#ffc600", "#c091fe", "#749efb", "#01f7ff", "#005eaa", "#339ca8", "#cda819", "#32a487"],
    // dataZoom: [{
    //   startValue: ''
    // }, {
    //   type: 'inside'
    // }],
    series: dataArr
  };
  let myChart = echarts.init(document.getElementById(boxId), 'walden');
  myChart.setOption(option);
  return myChart
};
Common.HieEcharts2 = (echarts, serArr, dayTxt, dataArr, boxId, yAxis, chartTitle = '') => {
  let option = {
    title: {
      text: chartTitle,
      subtext: '',
      x: 'center'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: false, readOnly: false },
        magicType: { show: false, type: ["line", "bar"] },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      left: 'left',
      show:false,
      data: serArr,
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        splitLine: { show: false },
        type: 'category',
        data: dayTxt,
        name: '',
        nameTextStyle: {
          color: '#fff'
        },
        axisLabel:
        {
          interval:0,
          // showMinLabel:true,
          color: '#fff',
        },
        axisLine: {
          lineStyle: {
            color: '#116377',
          }
        }
      }
    ],
    yAxis: yAxis,
    color: ["#ffc600", "#c091fe", "#749efb", "#01f7ff", "#005eaa", "#339ca8", "#cda819", "#32a487"],
    series: dataArr
  };
  let myChart = echarts.init(document.getElementById(boxId), 'walden');
  myChart.setOption(option);
  return myChart
};
Common.HieEcharts3 = (echarts, serArr, dayTxt, dataArr, boxId, yAxis, chartTitle = '') => {
  
  let option = {
    title: {
      text: chartTitle,
      subtext: '',
      x: 'center'
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: false, readOnly: false },
        magicType: { show: false, type: ["line", "bar"] },
        restore: { show: false },
        saveAsImage: { show: false }
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      left: 'left',
      data: serArr,
     
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        splitLine: { show: false },
        type: 'category',
        data: dayTxt,
        name: '',
        axisLine: {
          lineStyle: {
            color: '#116377',
          }
        }
      }
    ],
    yAxis: yAxis,
    color: ["#ffc600", "#c091fe", "#749efb", "#01f7ff", "#005eaa", "#339ca8", "#cda819", "#32a487"],
    series: dataArr
  };
  let myChart = echarts.init(document.getElementById(boxId), 'walden');
  myChart.setOption(option);
  return myChart
};
/**
  * author：renpan
  * time：20180927
  * @param {*} value 秒数 
  */
Common.calculateSecond = function (value = 0) {
  if (!value) {
    return "0小时";
  }
  value = parseInt(value);
  const pat = /^[0-9]*$/;
  if (!pat.exec(value)) {
    return "0小时";
  }
  const time = parseInt(value);
  if (time < 60) {
    return "不到1分钟";
  } else if (time >= 60 && time < 60 * 60) {
    return Math.round(time / 60) + "分钟";
  } else {
    let Hour = Math.floor(time / 3600);
    let Min = Math.ceil((time % 3600) / 60);
    return Hour + "小时" + Min + "分钟";
  }
}
export default Common