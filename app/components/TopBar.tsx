// components/TopBar.tsx
import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center gap-2">
        <Image 
          src="/image1.png" 
          alt="Huzzle ltd " 
          width={40} 
          height={40} 
        />
        <span className="font-semibold text-sm">Huzzle ltd </span>
      </div>

      <div className="text-right">
        <h1 className="text-base font-bold">Frontend  Developer</h1>
        <p className="text-sm text-gray-600">📍 London, UK</p>
      </div>
    </div>
  );
};

export default TopBar;
