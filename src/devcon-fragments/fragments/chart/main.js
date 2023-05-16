import React, { useEffect, useState } from 'react';
import * as chartist from 'chartist';

const LABEL_LIST = [1, 2, 3, 4, 5, 6, 7, 8];
const INTERVAL_DELAY = 10000;
const SERIES_SIZE = 4;
const VALUE_SIZE = 3;

export default function Chart() {
  const [chartWrapper, setChartWrapper] = useState(null);

  useEffect(() => {
    if (!chartWrapper) return;

    const getValues = () => [0, ...LABEL_LIST.slice(1, LABEL_LIST.length - 1).map(() => Math.random() * VALUE_SIZE * 2 - VALUE_SIZE), 0];
    const getSeries = () => Array.from({ length: SERIES_SIZE }).map(() => getValues());

    const chart = new chartist.LineChart(chartWrapper, {
      labels: LABEL_LIST,
      series: getSeries(),
    }, {
      high: VALUE_SIZE,
      low: VALUE_SIZE * -1,
      showArea: true,
      showLine: false,
      showPoint: false,
      fullWidth: true,
      axisX: { showLabel: false, showGrid: false },
      axisY: { showLabel: false, showGrid: false },
    });

    const intervalId = setInterval(() => {
      chart.update({ labels: LABEL_LIST, series: getSeries() });
    }, Math.random() * INTERVAL_DELAY + INTERVAL_DELAY);

    return () => {
      chart.detach();
      clearInterval(intervalId);
    }
  }, [chartWrapper]);

  return <div ref={setChartWrapper}></div>;
}
