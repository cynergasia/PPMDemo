import React, { Component } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel
} from "@syncfusion/ej2-react-charts";
import { Browser } from "@syncfusion/ej2-base";

export let data1 = [
  {
    x: "Jan 2018",
    y: 4000
  }, {
    x: "Feb 2018",
    y: 20000
  }, {
    x: "Mar 2018",
    y: 29000
  }, {
    x: "Apr 2018",
    y: 29000
  }, {
    x: "May 2018",
    y: 29000
  }, {
    x: "Jun 2018",
    y: 29000
  }, {
    x: "July 2018",
    y: 0
  }, {
    x: "Aug 2018",
    y: 29000
  }, {
    x: "Sep 2018",
    y: 1200
  }, {
    x: "Octo 2018",
    y: 500
  }, {
    x: "Nov 2018",
    y: 29000
  }, {
    x: "Dec 2018",
    y: 29000
  }
];
export let data2 = [
  {
    x: "Jan 2018",
    y: 4000
  }, {
    x: "Feb 2018",
    y: 20000
  }, {
    x: "Mar 2018",
    y: 29000
  }, {
    x: "Apr 2018",
    y: 29000
  }, {
    x: "May 2018",
    y: 5000
  }, {
    x: "Jun 2018",
    y: 39000
  }, {
    x: "July 2018",
    y: 40000
  }, {
    x: "Aug 2018",
    y: 4000
  }, {
    x: "Sep 2018",
    y: 2000
  }, {
    x: "Octo 2018",
    y: 35000
  }, {
    x: "Nov 2018",
    y: 15000
  }, {
    x: "Dec 2018",
    y: 10000
  }
];
export let data3 = [
  {
    x: "Jan 2018",
    y: 500
  }, {
    x: "Feb 2018",
    y: 7000
  }, {
    x: "Mar 2018",
    y: 35000
  }, {
    x: "Apr 2018",
    y: 7500
  }, {
    x: "May 2018",
    y: 5500
  }, {
    x: "Jun 2018",
    y: 3300
  }, {
    x: "July 2018",
    y: 2000
  }, {
    x: "Aug 2018",
    y: 900
  }, {
    x: "Sep 2018",
    y: 0
  }, {
    x: "Octo 2018",
    y: 9000
  }, {
    x: "Nov 2018",
    y: 0
  }, {
    x: "Dec 2018",
    y: 300
  }
];
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
export class FinancialAnalysis extends Component {
  render() {
    return (<React.Fragment>
      <div className="control-pane">
        <style>
          {
            SAMPLE_CSS
          }</style>
        <div className="control-section">
          <ChartComponent id="charts" style={{
            textAlign: "center"
          }} primaryXAxis={{
            valueType: "Category",
            interval: 1,
            majorGridLines: {
              width: 0
            },

            labelIntersectAction: "Rotate45"
          }} primaryYAxis={{
            majorGridLines: {
              width: 0
            },
            majorTickLines: {
              width: 0
            },
            lineStyle: {
              width: 0
            }
          }} chartArea={{
            border: {
              width: 0
            }
          }} tooltip={{
            enable: true
          }} width={Browser.isDevice
            ? "100%"
            : "60%"} title="FINANCIAL ANALYSIS" loaded={this.onChartLoad.bind(this)}>
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
            <SeriesCollectionDirective>
              <SeriesDirective dataSource={data1} xName="x" yName="y" name="Actuals" type="Column" marker={{
                dataLabel: {
                  visible: false,
                  position: "Top",
                  // font: {
                  //   fontWeight: "600",
                  //   color: "#f2d1fc"
                  // },
                },

              }} />
              <SeriesDirective dataSource={data2} xName="x" yName="y" name="Planned" type="Column" marker={{
                dataLabel: {
                  visible: false,
                  position: "Top",
                  // font: {
                  //   fontWeight: "600",
                  //   color: "#ffffff"
                  // }
                },
              }} />
              <SeriesDirective dataSource={data3} xName="x" yName="y" name="Forecast (saved)" type="Column" marker={{
                dataLabel: {
                  visible: false,
                  position: "Top",
                  // font: {
                  //   fontWeight: "600",
                  //   color: "yellow"
                  // }
                }
              }} />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </React.Fragment>);
  }
  onChartLoad(args) {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  }
}

export default FinancialAnalysis;
