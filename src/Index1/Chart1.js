import React, { Component } from "react";
import Chart from "react-apexcharts";

class Chart1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        colors: ['#4361ee'],
        chart: {
          id: "sparkline1",
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          curve: 'smooth',
          width: 2,
        },
      },
      series: [
        {
          name: "Sales",
          data: [38, 60, 38, 52, 36, 40, 28 ]
        }
      ],
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      yaxis: {
        min: 0
      },
      tooltip: {
        x: {
          show: false,
        }
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area" 
              height={160}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Chart1;
