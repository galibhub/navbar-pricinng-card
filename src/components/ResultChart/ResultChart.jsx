import React from 'react';
import { LineChart,Line,XAxis,YAxis} from 'recharts';

const resultData=[
  {
    "id": 1,
    "name": "Rahim",
    "physics": 78,
    "chemistry": 82,
    "math": 85
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 88,
    "chemistry": 74,
    "math": 91
  },
  {
    "id": 3,
    "name": "Ayesha",
    "physics": 95,
    "chemistry": 89,
    "math": 92
  },
  {
    "id": 4,
    "name": "Rafi",
    "physics": 67,
    "chemistry": 72,
    "math": 70
  },
  {
    "id": 5,
    "name": "Nabila",
    "physics": 80,
    "chemistry": 76,
    "math": 84
  },
  {
    "id": 6,
    "name": "Imran",
    "physics": 85,
    "chemistry": 90,
    "math": 87
  },
  {
    "id": 7,
    "name": "Tania",
    "physics": 92,
    "chemistry": 95,
    "math": 98
  },
  {
    "id": 8,
    "name": "Jamil",
    "physics": 60,
    "chemistry": 65,
    "math": 68
  },
  {
    "id": 9,
    "name": "Farhana",
    "physics": 84,
    "chemistry": 80,
    "math": 79
  },
  {
    "id": 10,
    "name": "Sakib",
    "physics": 73,
    "chemistry": 77,
    "math": 75
  }
]

const ResultChart = () => {
    return (
        <div class="mt-10 ml-10">
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
    <Line dataKey="math"></Line>
    <Line dataKey="chemistry" stroke="red"></Line>
            </LineChart>

        </div>
    );
};

export default ResultChart;