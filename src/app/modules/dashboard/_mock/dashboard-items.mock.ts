import {Dashboard} from '../models/dashboard/dashboard.interface';
export const DASHBOARDS: Dashboard<any>[] = [
  {
    _id: 1,
    items: [
      {
        cols: 3, rows: 3, y: 0, x: 0,
        content: {
          _id: 1,
          data: 'Content from first item'
        }
      },
      {
        cols: 3, rows: 4, y: 4, x: 2,
        content: {
          _id: 1,
          data: 'Content from second item'
        }
      },
      {
        cols: 6, rows: 6, y: 6, x: 6,
        content: {
          _id: 1,
          data: 'Content from thirst item'
        }
      }
    ]
  },
];
