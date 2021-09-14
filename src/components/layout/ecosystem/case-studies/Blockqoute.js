import React from 'react';

export default function Blockqoute() {
  return (
    <div className="bg-substrateGray-light dark:bg-substrateDark p-6 mb-6 rounded">
      <div className="mb-4 text-lg font-bold italic">
        “Mangata provides the best conditions for traders on the market by guarantee of transaction success, making
        costs fixed and preventing frontrunning on the consensus level”
      </div>
      <div className="flex items-center w-full">
        <div className="w-12 h-12 bg-gray-400 rounded-full mr-4"></div>
        <div className="text-lg font-bold uppercase w-5/6">Mangata co-founders Peter Kris and Gleb Urvanov.</div>
      </div>
    </div>
  );
}
