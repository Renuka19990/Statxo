// import React, { useEffect, useRef } from 'react';
// import { Chart, registerables } from 'chart.js';

// const ImpactChart = ({ data }) => {
//   const chartRef = useRef(null);
//   Chart.register(...registerables);

//   useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');
//     const chartInstance = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Low', 'Mid', 'High'],
//         datasets: [
//           {
//             label: 'Impact Count',
//             data: [
//               data.filter(item => item.Impact === 'Low').length,
//               data.filter(item => item.Impact === 'Mid').length,
//               data.filter(item => item.Impact === 'High').length,
//             ],
//             backgroundColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//       },
//     });

//     return () => {
//       chartInstance.destroy();
//     };
//   }, [data]);

//   return <canvas ref={chartRef} />;
// };

// export default ImpactChart;
// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const ImpactChart = ({ data }) => {
//   const chartData = {
//     labels: ['Low', 'Mid', 'High'],
//     datasets: [
//       {
//         label: 'Impact Count',
//         data: [
//           data.filter(item => item.Impact === 'Low').length,
//           data.filter(item => item.Impact === 'Mid').length,
//           data.filter(item => item.Impact === 'High').length,
//         ],
//         backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//         borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Count'
//         }
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Impact Level'
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Impact Analysis'
//       }
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="chart-container" style={{ position: "relative", height: "50vh", width: "100%" }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ImpactChart;
// import React, { useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ImpactChart = ({ data }) => {
//   useEffect(() => {
//     return () => {
//       // No need to manually destroy charts, Chart.js handles it
//     };
//   }, []);

//   const chartData = {
//     labels: ['Low', 'Mid', 'High'],
//     datasets: [
//       {
//         label: 'Impact Count',
//         data: [
//           data.filter(item => item.Impact === 'Low').length,
//           data.filter(item => item.Impact === 'Mid').length,
//           data.filter(item => item.Impact === 'High').length,
//         ],
//         backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//         borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Count'
//         }
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Impact Level'
//         }
//       }
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Impact Analysis'
//       }
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="chart-container" style={{ position: "relative", height: "50vh", width: "100%" }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ImpactChart;

// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ImpactChart = ({ data }) => {
//   const chartData = {
//     labels: ['Low', 'Mid', 'High'],
//     datasets: [
//       {
//         label: 'Impact Count',
//         data: [
//           data.filter(item => item.Impact === 'Low').length,
//           data.filter(item => item.Impact === 'Mid').length,
//           data.filter(item => item.Impact === 'High').length,
//         ],
//         backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//         borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Count',
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Impact Level',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Impact Analysis',
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ImpactChart;
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ImpactChart = ({ data }) => {
//   // Extract the count of each impact level
//   const impactCounts = {
//     Low: data.filter(item => item.Impact === 'Low').length,
//     Mid: data.filter(item => item.Impact === 'Mid').length,
//     High: data.filter(item => item.Impact === 'High').length,
//   };

//   const chartData = {
//     labels: ['Low', 'Mid', 'High'],
//     datasets: [
//       {
//         label: 'Impact Count',
//         data: [impactCounts.Low, impactCounts.Mid, impactCounts.High],
//         backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//         borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Count',
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Impact Level',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Impact Analysis',
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ImpactChart;
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ImpactChart = ({ data }) => {
//   // Extract the count of each impact level
//   const impactCounts = {
//     Low: data.filter(item => item.Impact === 'Low').length,
//     Mid: data.filter(item => item.Impact === 'Mid').length,
//     High: data.filter(item => item.Impact === 'High').length,
//   };

//   const chartData = {
//     labels: ['Low', 'Mid', 'High'],
//     datasets: [
//       {
//         label: 'Impact Count',
//         data: [impactCounts.Low, impactCounts.Mid, impactCounts.High],
//         backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//         borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Count',
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Impact Level',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Impact Analysis',
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ImpactChart;
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ImpactChart = ({ data }) => {
//   const chartData = {
//     labels: ['Low', 'Mid', 'High'],
//     datasets: [
//       {
//         label: 'Impact Count',
//         data: [
//           data.filter(item => item.Impact === 'Low').length,
//           data.filter(item => item.Impact === 'Mid').length,
//           data.filter(item => item.Impact === 'High').length,
//         ],
//         backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//         borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Count',
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Impact Level',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Impact Analysis',
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ImpactChart;
// import React from 'react';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const ImpactChart = ({ data }) => {
//   const chartData = {
//     labels: ['Low', 'Mid', 'High'],
//     datasets: [
//       {
//         label: 'Impact Count',
//         data: [
//           data.filter(item => item.Impact === 'Low').length,
//           data.filter(item => item.Impact === 'Mid').length,
//           data.filter(item => item.Impact === 'High').length,
//         ],
//         backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
//         borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Count',
//         },
//       },
//       x: {
//         title: {
//           display: true,
//           text: 'Impact Level',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Impact Analysis',
//       },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
//       <Bar data={chartData} options={options} />
//     </div>
//   );
// };

// export default ImpactChart;

import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ImpactChart = ({ data }) => {
  const quantityData = {
    labels: data.map(item => item.id),
    datasets: [
      {
        label: 'Quantity',
        data: data.map(item => item.quantity),
        backgroundColor: 'rgba(75,192,192,0.6)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const amountData = {
    labels: data.map(item => item.id),
    datasets: [
      {
        label: 'Amount',
        data: data.map(item => item.amount),
        backgroundColor: 'rgba(153,102,255,0.6)',
        borderColor: 'rgba(153,102,255,1)',
        borderWidth: 1,
      },
    ],
  };

  const impactData = {
    labels: ['Low', 'Mid', 'High'],
    datasets: [
      {
        label: 'Impact Count',
        data: [
          data.filter(item => item.Impact === 'Low').length,
          data.filter(item => item.Impact === 'Mid').length,
          data.filter(item => item.Impact === 'High').length,
        ],
        backgroundColor: ['rgba(75,192,192,0.6)', 'rgba(153,102,255,0.6)', 'rgba(255,159,64,0.6)'],
        borderColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,159,64,1)'],
        borderWidth: 1,
      },
    ],
  };

  const quantityOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantity',
        },
      },
      x: {
        title: {
          display: true,
          text: 'ID',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quantity Analysis',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const amountOptions = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Amount',
        },
      },
      x: {
        title: {
          display: true,
          text: 'ID',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Amount Analysis',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const impactOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Impact Analysis',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div>
      <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
        <Bar data={quantityData} options={quantityOptions} />
      </div>
      <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
        <Bar data={amountData} options={amountOptions} />
      </div>
      <div className="chart-container" style={{ position: 'relative', height: '50vh', width: '100%' }}>
        <Pie data={impactData} options={impactOptions} />
      </div>
    </div>
  );
};

export default ImpactChart;
