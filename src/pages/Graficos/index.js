import React from 'react';
import Highcharts from 'highcharts';
import highchartsMore from 'highcharts/highcharts-more';
import solidGauge from 'highcharts/modules/solid-gauge';
import HighchartsReact from 'highcharts-react-official';
import styled from 'styled-components';
import Carro from '../../assets/carro.png';
import Money from '../../assets/money.png';
import Refeicao from '../../assets/refeicao.png';

// import { Container } from './styles';
highchartsMore(Highcharts);
solidGauge(Highcharts);

let label;

export default function Graficos(props) {

  const Logo = styled.img`
    height: 100px;
    width: 100px;
  `;

  const { isMobile } = props;

  function exibirLabelTotal() {
    const chart = this;

    label = chart.renderer
      .text(
        chart.series[0].yData[0],
        (chart.plotWidth - 80) / 2,
        chart.plotHeight / 2 + 20,
      )
      .css({
        color: '#4572A7',
        fontSize: '30pt',
        fontWeight: 'bold',
      })
      .add();
  }

  function exibirLabelLocomocao() {
    const chart = this;

    label = chart.renderer
      .text(
        chart.series[0].yData[0],
        (chart.plotWidth - 40) / 2,
        chart.plotHeight / 2 + 65,
      )
      .css({
        color: '#4572A7',
        fontSize: '22pt',
        fontWeight: 'bold',
      })
      .add();
  }

  function exibirLabelRefeicao() {
    const chart = this;

    label = chart.renderer
      .text(
        chart.series[0].yData[0],
        (chart.plotWidth - 40) / 2,
        chart.plotHeight / 2 + 65,
      )
      .css({
        color: '#4572A7',
        fontSize: '22pt',
        fontWeight: 'bold',
      })
      .add();
  }

  function exibirLabelGratificacao() {
    const chart = this;

    label = chart.renderer
    .text(
      chart.series[0].yData[0],
      (chart.plotWidth - 50) / 2,
      chart.plotHeight / 2 + 65,
    )
    .css({
      color: '#4572A7',
      fontSize: '20pt',
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
        height: isMobile ? '100%' : '100vh',
        width: '100%',
        overflow: 'auto',
        maxHeight: '100%',
      }}
    >
      <div className="chart-big">
        <h1 style={{ paddingTop: '30px', marginBottom: '-5px' }}>TOTAL</h1>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'solidgauge',
              events: {
                load: exibirLabelTotal,
                redraw: exibirLabelTotal,
              },
              height: 300,
              width: 300,
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
              max: 3500,
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
                    y: 2500,
                  },
                ],
              },
            ],
          }}
        />
      </div>
      <div className="chart">
        <Logo src={Carro} alt="carro" style={{ width: '150px', height: '80px '}}/>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'solidgauge',
              events: {
                load: exibirLabelLocomocao,
                redraw: exibirLabelLocomocao,
              },
              height: 200,
              width: 200,
            },
            credits: {
              enabled: false,
            },
            title: {
              text: 'Locomoção',
              style: {
                fontSize: '20px',
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
              max: 1000,
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
                    y: 750,
                  },
                ],
              },
            ],
          }}
        />
      </div>
      <div style={{ fontSize: '80px', fontWeight: 'bold' }}>+</div>
      <div className="chart">
        <Logo src={Refeicao} alt="carro" style={{ width: '130px', height: '80px '}}/>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'solidgauge',
              events: {
                load: exibirLabelRefeicao,
                redraw: exibirLabelRefeicao,
              },
              height: 200,
              width: 200,
            },
            credits: {
              enabled: false,
            },
            title: {
              text: 'Refeição',
              style: {
                fontSize: '20px',
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
              max: 1000,
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
                    y: 500,
                  },
                ],
              },
            ],
          }}
        />
      </div>

      <div style={{ fontSize: '80px', fontWeight: 'bold' }}>+</div>
      <div className="chart">
        <Logo src={Money} alt="carro" style={{ width: '120px', height: '80px '}}/>
        <HighchartsReact
          highcharts={Highcharts}
          options={{
            chart: {
              type: 'solidgauge',
              events: {
                load: exibirLabelGratificacao,
                redraw: exibirLabelGratificacao,
              },
              height: 200,
              width: 200,
            },
            credits: {
              enabled: false,
            },
            title: {
              text: 'Gratificação',
              style: {
                fontSize: '20px',
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
              max: 1500,
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
                    y: 1250,
                  },
                ],
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
