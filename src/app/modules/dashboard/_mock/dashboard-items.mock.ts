import {Dashboard} from '../models/dashboard/dashboard.interface';
import {ChartInterface} from '../models/charts/chart.interface';

export const DASHBOARDS: Dashboard<any>[] = [
  {
    _id: 1,
    items: [
      {
        _id: 1,
        cols: 3, rows: 3, y: 0, x: 0,
        content: {
          componentRef: ''
        }
      },
      {
        _id: 2,
        cols: 3, rows: 4, y: 4, x: 2,
        content: {
          componentRef: ''
        }
      },
      {
        _id: 3,
        cols: 6, rows: 6, y: 6, x: 6,
        content: {
          componentRef: ''
        }
      }
    ]
  },
];

export const AVAILABLE_CHARTS: ChartInterface[] = [
  {
    _id: 2,
    type: 'medium',
    comp: 'Chart2Component'
  },
  {
    _id: 4,
    type: 'advanced',
    comp: 'Chart4Component'
  }
];
