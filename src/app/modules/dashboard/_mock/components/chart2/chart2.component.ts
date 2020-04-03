import {Component, ChangeDetectionStrategy, Input, AfterViewInit, NgZone, OnDestroy} from '@angular/core';
import {ChartComponentInterface, ChartInterface} from '../../../models/charts/chart.interface';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chart2Component implements AfterViewInit, OnDestroy, ChartComponentInterface {

  @Input() item: ChartInterface;
  private chart: am4charts.XYChart;

  constructor(
    private zone: NgZone
  ) {
  }

  ngAfterViewInit() {
    const chart = am4core.create('Chart2Component', am4charts.XYChart);

    chart.paddingRight = 20;

    const data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({date: new Date(2018, 0, i), name: 'name' + i, value: visits});
    }

    chart.data = data;

    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';

    series.tooltipText = '{valueY.value}';
    chart.cursor = new am4charts.XYCursor();

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
