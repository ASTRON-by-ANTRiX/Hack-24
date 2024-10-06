import React from 'react'

function StatusBar({level}) {
    const percentage = Math.max(0, Math.min(level, 100));

    return (
      <div className="w-full bg-transparent border-2 border-[#17506e] rounded-md h-6 overflow-hidden mx-auto">
        <div
          className="bg-[#17506e] h-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
}

export default StatusBar