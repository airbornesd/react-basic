import React from 'react';

const data = [
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
];

function sorting(query, ascending) {
  if (!ascending) data.sort((a, b) => b[query] - a[query]);
  data.sort((a, b) => a[query] - b[query]);
}

export default function Table() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 border-r border-gray-300">Name</th>
            <th
              className="px-4 py-2 border-r border-gray-300"
              onClick={() => sorting('totalTime', true)}
            >
              All Time
            </th>
            <th
              className="px-4 py-2 border-r border-gray-300"
              onClick={() => sorting('recent', true)}
            >
              Recent
            </th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {data.map((value, key) => {
            return (
              <tr key={key}>
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
