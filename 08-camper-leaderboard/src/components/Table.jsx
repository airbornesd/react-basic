import React, { useState } from 'react';

const payload = [
  {
    name: 'sjame1958gm',
    totalTime: 6996,
    recent: 609,
    lastTime: '21 hour ago',
  },
  {
    name: 'user1234',
    totalTime: 5000,
    recent: 400,
    lastTime: '2 days ago',
  },
  {
    name: 'example_user',
    totalTime: 10000,
    recent: 1000,
    lastTime: '1 week ago',
  },
  {
    name: 'gamer45',
    totalTime: 3000,
    recent: 200,
    lastTime: '3 hours ago',
  },
  {
    name: 'coding_pro',
    totalTime: 8000,
    recent: 700,
    lastTime: '2 weeks ago',
  },
  {
    name: 'gaming_fanatic',
    totalTime: 12000,
    recent: 1500,
    lastTime: '4 days ago',
  },
  {
    name: 'webdev_guru',
    totalTime: 6000,
    recent: 500,
    lastTime: '1 day ago',
  },
  {
    name: 'python_lover',
    totalTime: 9000,
    recent: 800,
    lastTime: '5 days ago',
  },
  {
    name: 'math_wiz',
    totalTime: 7500,
    recent: 600,
    lastTime: '6 hours ago',
  },
  {
    name: 'guitar_hero',
    totalTime: 4000,
    recent: 300,
    lastTime: '1 month ago',
  },
];

export default function Table() {
  const [data, setData] = useState(payload);
  const [order, setOrder] = useState({ col: null, asc: true });

  function sorting(query) {
    const { col, asc } = order;
    let desc = true;

    if (col === query) desc = !asc;

    const sortData = [...data].sort((a, b) =>
      desc ? a[query] - b[query] : b[query] - a[query]
    );

    setData(sortData);
    setOrder({ col: query, asc: desc });
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 border-r border-gray-300">#</th>
            <th className="px-4 py-2 border-r border-gray-300">Name</th>
            <th
              className="px-4 py-2 border-r border-gray-300"
              onClick={() => sorting('totalTime')}
            >
              <button>All Time</button>
            </th>
            <th
              className="px-4 py-2 border-r border-gray-300"
              onClick={() => sorting('recent')}
            >
              <button>Recent</button>
            </th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td className="px-4 py-2 border-r border-gray-300">
                  {key + 1}
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  {value.name}
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  {value.totalTime}
                </td>
                <td className="px-4 py-2 border-r border-gray-300">
                  {value.recent}
                </td>
                <td className="px-4 py-2">{value.lastTime}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
