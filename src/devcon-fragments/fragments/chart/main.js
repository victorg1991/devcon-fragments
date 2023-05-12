import React, { useEffect, useState } from 'react';
import * as chartist from 'chartist';

export default function Chart() {
  const [chartWrapper, setChartWrapper] = useState(null);

  useEffect(() => {
    if (!chartWrapper) return;

    const chart = new chartist.LineChart(chartWrapper, {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      series: [[5, 2, 4, 2, 0]],
    });

    return () => {
      chart.detach();
    }
  }, [chartWrapper]);

  return <div ref={setChartWrapper}></div>;
}
