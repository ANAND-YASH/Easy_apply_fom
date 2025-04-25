
import Image from 'next/image';

const TopBar = () => {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex items-center gap-2">
        <Image 
          src="/imagess1.png" 
          alt="comapny  " 
          width={40} 
          height={40} 
        />
        <span className="font-semibold text-sm">Any company </span>
      </div>

      <div className="text-right">
        <h1 className="text-base font-bold">Frontend  Developer</h1>
        <p className="text-sm text-gray-600">📍 Europe</p>
      </div>
    </div>
  );
};

export default TopBar;
