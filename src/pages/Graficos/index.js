import React from 'react';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
import HighchartsReact from 'highcharts-react-official';

// import { Container } from './styles';
highchartsMore(Highcharts);
solidGauge(Highcharts);

let label;

export default function Graficos(props) {
  const { isMobile } = props;

  function exibirLabelLocomocao() {
    const chart = this;

    label = chart.renderer
      .text(
        chart.series[0].yData[0],
        (chart.plotWidth - 100) / 2,
        chart.plotHeight / 2 + 90
      )
      .css({
        color: '#4572A7',
        fontSize: '60pt',
        fontWeight: 'bold',
      })
      .add();
  }

  function exibirLabelRefeicao() {
    const chart = this;

    label = chart.renderer
      .text(
        chart.series[0].yData[0],
        (chart.plotWidth - 60) / 2,
        chart.plotHeight / 2 + 90
      )
      .css({
        color: '#4572A7',
        fontSize: '60pt',
        fontWeight: 'bold',
      })
      .add();
  }

  function exibirLabelGratificacao() {
    const chart = this;

    label = chart.renderer
      .text(
        chart.series[0].yData[0],
        (chart.plotWidth - 100) / 2,
        chart.plotHeight / 2 + 90
      )
      .css({
        color: '#4572A7',
        fontSize: '60pt',
        fontWeight: 'bold',
      })
      .add();
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'solidgauge',
            events: {
              load: exibirLabelLocomocao,
              redraw: exibirLabelLocomocao,
            },
            height: '80%',
          },
          credits: {
            enabled: false,
          },
          title: {
            enabled: false,
            text: '',
          },
          tooltip: {
            enabled: false,
          },

          pane: {
            startAngle: 0,
            endAngle: 360,
            background: [
              {
                // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(
                  Highcharts.getOptions().colors[1]
                )
                  .setOpacity(0.3)
                  .get(),
                borderWidth: 0,
              },
            ],
          },

          yAxis: {
            min: 0,
            max: 3000,
            lineWidth: 0,
            tickPositions: [],
          },

          plotOptions: {
            solidgauge: {
              dataLabels: {
                enabled: false,
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true,
            },
          },

          series: [
            {
              data: [
                {
                  color: Highcharts.getOptions().colors[1],
                  radius: '87%',
                  innerRadius: '63%',
                  y: 350,
                },
              ],
            },
          ],
        }}
      />

      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'solidgauge',
            events: {
              load: exibirLabelLocomocao,
              redraw: exibirLabelLocomocao,
            },
            height: '80%',
          },
          credits: {
            enabled: false,
          },
          title: {
            text: 'Locomoção',
            style: {
              fontSize: '40px',
            },
          },
          tooltip: {
            enabled: false,
          },

          pane: {
            startAngle: 0,
            endAngle: 360,
            background: [
              {
                // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(
                  Highcharts.getOptions().colors[1]
                )
                  .setOpacity(0.3)
                  .get(),
                borderWidth: 0,
              },
            ],
          },

          yAxis: {
            min: 0,
            max: 3000,
            lineWidth: 0,
            tickPositions: [],
          },

          plotOptions: {
            solidgauge: {
              dataLabels: {
                enabled: false,
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true,
            },
          },

          series: [
            {
              data: [
                {
                  color: Highcharts.getOptions().colors[1],
                  radius: '87%',
                  innerRadius: '63%',
                  y: 350,
                },
              ],
            },
          ],
        }}
      />
      <div style={{ fontSize: '80px', fontWeight: 'bold' }}>+</div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'solidgauge',
            events: {
              load: exibirLabelRefeicao,
              redraw: exibirLabelRefeicao,
            },
            height: '80%',
          },
          credits: {
            enabled: false,
          },
          title: {
            text: 'Refeição',
            style: {
              fontSize: '40px',
            },
          },
          tooltip: {
            enabled: false,
          },

          pane: {
            startAngle: 0,
            endAngle: 360,
            background: [
              {
                // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(
                  Highcharts.getOptions().colors[1]
                )
                  .setOpacity(0.3)
                  .get(),
                borderWidth: 0,
              },
            ],
          },

          yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: [],
          },

          plotOptions: {
            solidgauge: {
              dataLabels: {
                enabled: false,
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true,
            },
          },

          series: [
            {
              name: 'Exercise',
              data: [
                {
                  color: Highcharts.getOptions().colors[1],
                  radius: '87%',
                  innerRadius: '63%',
                  y: 23,
                },
              ],
            },
          ],
        }}
      />
      <div style={{ fontSize: '80px', fontWeight: 'bold' }}>+</div>
      <HighchartsReact
        highcharts={Highcharts}
        options={{
          chart: {
            type: 'solidgauge',
            events: {
              load: exibirLabelGratificacao,
              redraw: exibirLabelGratificacao,
            },
            height: '80%',
          },
          credits: {
            enabled: false,
          },
          title: {
            text: 'Gratificação',
            style: {
              fontSize: '40px',
            },
          },
          tooltip: {
            enabled: false,
          },

          pane: {
            startAngle: 0,
            endAngle: 360,
            background: [
              {
                // Track for Exercise
                outerRadius: '87%',
                innerRadius: '63%',
                backgroundColor: Highcharts.color(
                  Highcharts.getOptions().colors[1]
                )
                  .setOpacity(0.3)
                  .get(),
                borderWidth: 0,
              },
            ],
          },

          yAxis: {
            min: 0,
            max: 2000,
            lineWidth: 0,
            tickPositions: [],
          },

          plotOptions: {
            solidgauge: {
              dataLabels: {
                enabled: false,
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true,
            },
          },

          series: [
            {
              name: 'Exercise',
              data: [
                {
                  color: Highcharts.getOptions().colors[1],
                  radius: '87%',
                  innerRadius: '63%',
                  y: 750,
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
}
