import React from 'react';
import { Pie } from 'react-chartjs-2';
import Loader from 'react-loader-spinner';

const colors = [
  '#001f3f',
  '#0074D9',
  '#7FDBFF',
  '#39CCCC',
  '#3D9970',
  '#2ECC40',
  '#01FF70',
  '#FFDC00',
  '#FF851B',
  '#85144b'
];

const PieChart = ({ data, amountOfImages }) => {
  if (data.length) {
    const sortedData = [...data].sort((a, b) => {
      return b.amountOfImages - a.amountOfImages;
    }).slice(0, 10);
    const pieData = {
      labels: sortedData.map(breed => breed.breedName),
      datasets: [{
        data: sortedData.map(breed => {
          return parseFloat((100 * breed.amountOfImages) / amountOfImages).toFixed(2);
        }),
        backgroundColor: colors,
        hoverBackgroundColor: colors
      }]
    };
    return <Pie data={pieData}/>
  };

  return (
    <Loader
      type="Rings"
      color="#0074D9"
      height={100}
      width={100}
    />
  );
};

export default PieChart;
