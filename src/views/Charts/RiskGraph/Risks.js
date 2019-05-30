import React, { Component } from "react";
import { HeatMapComponent, Legend, Tooltip, Inject } from "@syncfusion/ej2-react-heatmap";
import { Adaptor } from "@syncfusion/ej2-react-heatmap";
import data from "./data.json";

class Risks extends Component {
  render() {
    return (
      <div className="control-section">
        <HeatMapComponent id="heatmap-container" titleSettings={{
          text: "",
          textStyle: {
            size: "10px",
            fontWeight: "500",
            fontStyle: "Normal",
            fontFamily: "Segoe UI"
          }
        }} xAxis={{
          labels: [
            "Impact1", "Impact2", "Impact3", "Impact4", "Impact5"
          ],
          labelRotation: 0,
          labelIntersectAction: "None"
        }} yAxis={{
          title: {
            text: "Likelihood"
          },
          labels: [
            "2000", "2004", "2008", "2012", "2016"
          ],
          opposedPosition: false
        }} dataSource={{
          data: data,
          isJsonData: true,
          adaptorType: "Table",
          xDataMapping: "Impact"
        }} paletteSettings={{
          palette: [
            {
              value: 6,
              label: "Low",
              color: "#0aaf26"
            }, {
              value: 9,
              label: "Medium",
              color: "#f7d660"
            }, {
              value: 12,
              label: "Medium",
              color: "#edc02d"
            }, {
              value: 20,
              label: "High",
              color: "#ea452c"
            }, {
              value: 21,
              label: "Extreme",
              color: "#343a40"
            }
          ]
        }} cellSettings={{
          border: {
            width: 1,
            radius: 4,
            color: "white"
          },
          showLabel: false
        }} load={this.load.bind(this)} tooltipRender={this.tooltipTemplate} style={{
          height: "210px",
          width: "auto",
          // minHeight: "20rem",
          // minWidth: "22rem"
          minHeight: "210px",
          minWidth: "320"
        }}
        >
          <Inject services={[Legend, Tooltip, Adaptor]} />
        </HeatMapComponent>
      </div>

    );
  }
  load(args) {
    let selectedTheme = window.location.hash.split("/")[1];
    selectedTheme = selectedTheme
      ? selectedTheme
      : "Material";
    args.heatmap.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1);
  }
  tooltipTemplate(args) {
    args.content = [args.yLabel + " | " + args.xLabel + " : " + args.value + "  risks"];
  }
}

export default Risks;
