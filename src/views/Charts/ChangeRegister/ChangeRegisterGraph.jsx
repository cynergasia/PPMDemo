import React, {Component} from "react";
import {Line} from "react-chartjs-2";
import {CustomTooltips} from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import {getStyle, hexToRgba} from "@coreui/coreui/dist/js/coreui-utilities";

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const mainChart = {
  labels: [
    "19-Jan",
    "19-Feb",
    "19-Mar",
    "19-Apr",
    "19-May",
    "19-Jun",
    "19-July",
    "19-Aug",
    "19-Sep",
    "19-Octo",
    "19-Nov",
    "19-Dec"
  ],
  datasets: [
    {
      label: "Changes",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: "#0077b5",
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      data: [
        NaN,
        NaN,
        NaN,
        NaN,
        10000,
        6000,
        NaN,
        3000,
        14000
      ]
    }
  ]
};

const mainChartOpts = {
  title: {
    display: true,
    position: "top",
    text: "TOTAL COST OF CHANGES"
  },
  spanGaps: true,
  showLine: true,
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: false,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return {
          backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor
        };
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          min: 0,
          stepSize: 2000,
          max: 16000
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 2,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class ChangeRegisterGraph extends Component {
  render() {
    return (<div>
      <Line data={mainChart} options={mainChartOpts} height={250}/>
    </div>);
  }
}

export default ChangeRegisterGraph;
