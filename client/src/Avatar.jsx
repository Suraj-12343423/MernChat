/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function Avatar({ userId, username, online }) {
  const colors = [
    'bg-red-200',
    'bg-green-200',
    'bg-purple-200',
    'bg-blue-200',
    'bg-yellow-200',
    'bg-teal-200',
  ];

  const userIdBase10 = parseInt(userId, 16);
  const colorIndex = userIdBase10 % colors.length;

  const color = colors[colorIndex];

  const initial = username ? username[0] : '';

  return (
    <div className={`w-7 h-7 relative rounded-full flex items-center ${color}`}>
      <div className="text-center w-full">{initial}</div>
      {online && (
        <div className="absolute w-3 h-3 bg-green-400 -bottom-1 -right-1 rounded-full border border-white shadow"></div>
      )}
    </div>
  );
}
