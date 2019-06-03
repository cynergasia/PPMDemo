import React, { Component, lazy, Suspense } from "react";
import { Bubble } from "react-chartjs-2";
import { Card, CardBody, CardHeader } from "reactstrap";
import { getStyle } from "@coreui/coreui/dist/js/coreui-utilities";

const Widget03 = lazy(() => import("../../Widgets/Widget03"));

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const dataBubble = {
  label: ["Red", "Yellow", "Green"],
  datasets: [
    {
      backgroundColor: brandDanger,
      borderColor: brandPrimary,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      fill: false,
      lineTension: 0.1,
      //backgroundColor: 'rgba(75,192,192,0.4)',
      // borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      //pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      // pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      //pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      label: "Lable is here",
      data: [{ x: 50, y: 80, r: 35, label: "Red" }]
    },
    {
      label: "Yellow",
      borderColor: brandPrimary,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      fill: false,
      lineTension: 0.1,
      backgroundColor: brandWarning,
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      // pointBorderColor: 'rgba(75,192,192,1)',
      //pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      //pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [{ x: 68, y: 45, r: 20 }]
    },
    {
      label: "Green",
      backgroundColor: brandSuccess,
      borderColor: brandPrimary,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      borderDash: [8, 5],
      fill: true,
      lineTension: 0.1,
      //backgroundColor: 'rgba(75,192,192,0.4)',
      // borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      //pointBorderColor: 'rgba(75,192,192,1)',
      // pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      //pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      //pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        { x: 80, y: 25, r: 10 },
        { x: 90, y: 15, r: 20 },
        { x: 5, y: 42, r: 10 },
        { x: 12, y: 55, r: 25 },
        { x: 20, y: 5, r: 0 },
        { x: 20, y: 40, r: 0 }
      ]
    }
  ]
  // scales: {
  //   xAxes: [
  //     {
  //       display: [10, 20, 30, 40, 50, 60],
  //     }],
  //   yAxes: [
  //     {
  //       display: [10, 20, 30, 40, 50, 60],
  //     }],Traffic & Sales
  // },

  //data: [{ label: 'red', x: 20, y: 10, r: 5 }, { label: 'Yellow', x: 40, y: 20, label: 'Yellow', r: 15 }, { label: 'Green', x: 60, y: 15, r: 10 }]
};

const dataBubbleChartOpts = {
  // tooltips: {
  //   enabled: false,
  //   custom: CustomTooltips,
  //   intersect: true,
  //   mode: 'index',
  //   position: 'nearest',
  //   callbacks: {
  //     labelColor: function (tooltipItem, chart) {
  //       return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
  //     }
  //   }
  // },
  // maintainAspectRatio: false,
  // legend: {
  //   display: false,
  // },
  scales: {
    xAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 7,
          stepSize: Math.ceil(100 / 5),
          max: 100
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false
        },
        ticks: {
          beginAtZero: true,
          stepSize: Math.ceil(100 / 5),
          max: 100
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 20,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }

  // legend: {
  //   display: true,
  //   labels: {
  //     fontColor: 'red',
  //     text: "Amit",

  //   },
  //   title: {
  //     display: true,
  //     text: 'Custom Chart Title'
  //   }
  // },
};

class Project extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader>My Project</CardHeader>
          <CardBody>
            <div className="chart-wrapper project">
              <div className="chart-header">
                <p>
                  <b>Physical Percent Complete</b>
                </p>
              </div>
              <Bubble data={dataBubble} options={dataBubbleChartOpts} />
              <div className="chart-footer">
                <p>
                  <b>Financial Percent Complete</b>
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Project;
