/* eslint-disable no-sparse-arrays */
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardHeader } from "reactstrap";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

// eslint-disable-next-line no-unused-vars
const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
// eslint-disable-next-line no-unused-vars
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const mainChart = {
  labels: [
    "Dec/18",
    "Jan-19",
    "Feb-19",
    "Mar-19",
    "Apr-19",
    "May-19",
    "Jun-19"
  ],
  datasets: [
    {
      label: "Contracted Value",
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: "black",
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      data: [35, 35, 33, 34, 32, 30, 35, 30, 28]
    },
    {
      label: "Invoiced Amounts",
      backgroundColor: "transparent",
      borderColor: brandSuccess,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      data: [, 5, 10, 24, 25, 23, 24, 32, 23, 22]
    },
    {
      label: "Paid",
      backgroundColor: "transparent",
      borderColor: brandDanger,
      pointHoverBackgroundColor: "#fff",
      borderWidth: 3,
      // borderDash: [8, 5],
      data: [10, 15, 25, 25, 26, 28, 30, 28, 22]
    }
  ]
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor
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
          maxTicksLimit: 7,
          stepSize: 5,
          max: 60
        }
      }
    ]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

class FinancialStatus extends Component {
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            Financial Status
            <div className="card-header-actions" />
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper financial">
              <div className="chart-header">
                <p>In $ Millions</p>
              </div>
              <div className="chart-wrapper financial">
                <Line data={mainChart} options={mainChartOpts} height={320} />
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default FinancialStatus;
