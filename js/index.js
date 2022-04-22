//使用立即执行函数
//()();
//(function(){})(); 局部变量实现重命名 局部执行
// 柱状图1
(function() {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  // 指定配置和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      //触发提示框方式 item axis
      trigger:"axis",
      axisPointer: {
        type: "shadow" ,
        shadowStyle: {
          color: "rgba(214, 214, 214, 0.2)"
        }
      },
      //提示框背景颜色
      //backgroundColor:'rgba(59,59,59,0.6)',
      //提示框边框颜色
      borderColor:'#2f89cf',
      //提示框宽度
      //borderWidth:1,
      //提示框内文本风格
      textStyle:{
        color:"rgba(50,50,50,0.6)",
        fontStyle:'normal',
        fontWeight:'bold',
        fontFamily:'sans-serif',
        fontSize:14,
        lineHeight:40,
        width:30
      },
      showContent:true
     },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "10%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["4月1日","4月2日","4月3日","4月4日","4月5日","4月6日","4月7日"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,1)",
            fontSize: "12"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,1)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,1)",
            width: 2,
            type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "单位",
        type: "bar",
        //修改柱子宽度
        barWidth: "30%",
        data: [200, 300, 300, 900, 1500, 1200, 600],
        //修改柱形加圆角
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  // 把配置给实例对象
  myChart.setOption(option);
  //屏幕自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  // 数据变化
  var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];

  $(".bar1 .part1 ").on("click", "a", function() {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 柱状图2 
(function() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {
    grid: {
      top: "10%",
      left: "15%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        //设置反向 （原坐标轴从低到高排序 需要反向）
        inverse: false,
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为对应颜色
        axisLabel: {
         color:'#fff'
        }
      },
      {
        data: [702, 350, 610, 793, 664],
        //同理 反向
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色
        axisLabel: {
          color:'#fff'
          //textStyle: {
            //color: function(value, index) {
                //var num = myColor.length;
                //return myColor[index % num]
            //}
        //},
       // formatter: function(value, index) {
           // return [
                //'{title|' + value + '} '
            //].join('\n')
        //},
        //rich: {}
         }
      }
    ],
    series: [
      // 修改第一组柱子 作为内容
      {
        name: "条",
        type: "bar",
        data: [60, 34, 60, 78, 69],
        //显示柱状图背景色showBackground:true,backgroundStyle:{color:'rgba(180,180,180,0.2)'},
        //y轴指示标签 设置层叠
        yAxisIndex: 0,
        // 可在itmestyle中修改柱子内颜色
        itemStyle: {
          // 修改第一组柱子的圆角
          barBorderRadius: 10,
          // 此时的color 可以修改柱子的颜色
          // 要求多颜色时 声明数组 myColor
          color: function(params) {
            // params 传进来的是柱子对象
            //console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%",
          color:'#fff'
        }
      },
      //修改第二组柱子 作为框
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        //设置层叠 1大于0
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        //不显示数字
        itemStyle: {
          //取消内部颜色
          color: "none",
          //增加边框颜色
          borderColor: "#00c1de",
          //边框宽度
          borderWidth: 3,
          //边框圆角
          barBorderRadius: 15
        }
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


//计划完成率
(function(){
  var myChart = echarts.init(document.querySelector(".bar3 .chart"));
  var option = {
    color: ['orange',"#2f89cf"],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid:{
      left: "0%",
      top: "20%",
      right: "0%",
      bottom: "5%",
      //显示刻度标签
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['4/8', '4/11', '4/12', '4/13', '4/14', '4/18', '4/19'],
        axisTick: {
          alignWithLabel: true
        },
         // 修改刻度标签 相关样式
         axisLabel: {
          color: "rgba(255,255,255,1) ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        //show: false,
        type: 'value',
        name: '累计产量/台',
        nameLocation:'end',
        nameTextStyle: {
          fontWeight: "bold",
          color: "rgba(255, 255, 255, 1)"
        },
        // min: 0,
        // max: 300,
        interval: 100,
        axisLabel: {
          formatter: '{value} ',
          color: "rgba(255,255,255,1) ",
          fontSize: 12
          },
        axisTick: {
            show: false
          },
          // y轴的线条改为了 2像素
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.1)",
              width: 2
            }
          },
          // y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,0.1)"
            }
          }
      },
      {
        type: 'value',
        name: '运行效率%',
        // min: 50,
        // max: 100,
        interval: 25,
        nameTextStyle: {
          fontWeight: "bold",
          color: "rgba(255, 255, 255, 1)"
        },
        //修改刻度标签样式
        axisLabel: {
          formatter: '{value} ',
          color: "rgba(255,255,255,1) ",
          fontSize: 12
        },
        // y轴的线条改为了2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1 )",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
        {
        name: '运行效率',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' %';
          }
        },
        data: [100,130,105,100,127,100,100]
      },
      {
        name: '累计产量',
        type: 'bar',
        barWidth:'40%',
        tooltip: {
          valueFormatter: function (value) {
            return value + '台';
          }
        },
        data: [155,168,231,269,238,370,414],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 3
        }
      }
    
    ]
  };
   // 3. 把配置给实例对象
   myChart.setOption(option);
   // 4. 让图表跟随屏幕自动的去适应
   window.addEventListener("resize", function() {
     myChart.resize();
   });
})();

// 折线图1模块制作
(function() {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [88,88,88,88,88,88,88],
        [91.1,90.9,93.2,90.5,82.5,90.6,91.7]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["orange", "#2f89cf"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#fff"
      },
      // 这个10% 必须加引号
      // position:'center'
      right: "10%"

    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: false, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data:["4月1日","4月2日","4月3日","4月4日","4月5日","4月6日","4月7日"
    ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#fff" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      min:60,
      type: "value",
      name:"百分比%",
      nameTextStyle: {
        fontWeight: "bold",
        color: "rgba(255, 255, 255, 1)"
      },
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "#fff" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"// 分割线颜色
        }
      }
    },
    series: [
      {
        name: "FTQ目标值",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        // smooth: true,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' %';
          }
        },
        symbol:'diamond',
        symbolSize: 8,
        data: yearData[0].data[0]
      },
      {
        name: "FTQ实际值",
        type: "line",
        // smooth: true,
        tooltip: {
          valueFormatter: function (value) {
            return value + ' %';
          }
        },
        symbol:'diamond',
        symbolSize: 8,
        data: yearData[0].data[1]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 5.点击切换效果
  $(".line1 .part1").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();


// 折线图2 模块制作
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  var option = {
    tooltip: {
      trigger: "axis"
    },
    legend: {
      top: "0%",
      // data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },

    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // x轴更换数据
        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "26",
          "28",
          "29",
          "30"
        ],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "邮件营销",
        type: "line",
        // 圆滑曲线
        smooth: true,
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: "2"
        },
        // 填充颜色设置
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.1)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.6)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 标点图形 rect roundRect triangle diamond pin arrow none
        symbol: 'circle',
        // 拐点大小
        symbolSize: 8,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框(影子)
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, 0.1)",
          borderWidth: 12,
          //描边类型
          borderType: "dotted"
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          20,
          60,
          50,
          40
        ]
      },
      {
        name: "联盟广告",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [
          130,
          10,
          20,
          40,
          30,
          40,
          80,
          60,
          20,
          40,
          90,
          40,
          20,
          140,
          30,
          40,
          130,
          20,
          20,
          40,
          80,
          70,
          30,
          40,
          30,
          120,
          20,
          99,
          50,
          20
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();


// 饼形图1
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  // 2.指定配置
  var option = {
    color: ["#075dfd", "#427ded", "#048f27", "#5ece7a", "#06a0ab"],
    tooltip: {
      trigger: "item",
      // 访问来源:{a} 系列名 {b} 数据名 {c} 数值 {d}百分比 <br/>  类型不同 不同
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 8,
      itemHeight: 8,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,1)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "人数",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["35%", "60%"],
        //位置
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 421, name: "总装" },
          { value: 208, name: "焊装" },
          { value: 249, name: "涂装" },
          { value: 116, name: "车架" },
          { value: 100, name: "冲压" }
        ]
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图2 地区分布模块
(function() {
  var myChart = echarts.init(document.querySelector(".pie1 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "0%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "地区分布",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链文字的线条
          length2: 8
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" }
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
