'use client';

import Image from 'next/image';

export default function SyncWearablesSection() {
  return (
    <section className="py-16 bg-white text-black text-center px-6 md:px-12 lg:px-24">
      <div className="max-w-screen-xl mx-auto space-y-12">
        {/* Title */}
        <div>
          <h2 className="text-4xl font-bold md:text-5xl">
            Seamlessly Sync with Your Favorite Wearables.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Unfold works with leading devices to give you a full picture of your health.
          </p>
        </div>

        {/* Circle with Wearables */}
        <div className="relative w-full max-w-[797px] mx-auto">
          {/* Circular Background */}
          <div className="relative bg-purple-50 rounded-full w-full h-full aspect-square flex items-center justify-center">
            {/* Central Mockup */}
            <Image
              src="/Frame 2.png" // Replace with your actual image
              alt="App Mockup"
              width={594}
              height={594}
              className="z-10"
            />
          </div>

          {/* Wearables Logos */}
          <div className="absolute w-full h-full top-[189px] bottom-[189px] flex items-center justify-center">
            {/* Position Wearables Around the Circle */}
            {wearables.map((wearable, index) => (
              <div
              key={index}
              style={{
                ...wearable.style,
                boxShadow: '0px 2.77px 6.92px 0px rgba(51, 51, 51, 0.12), 0px 1.38px 2.77px 0px rgba(51, 51, 51, 0.04)',
                transform: `${wearable.style.transform} rotate(-10.55deg)`,
              }}
              className="absolute bg-white rounded-[7.72px] md:rounded-tl-[12.54px] lg:rounded-[18.75px]
                w-[41.16px] h-[41.16px] md:w-[66.88px] md:h-[66.88px] lg:w-[100px] lg:h-[100px]
                p-[10.72px_8.8px_10.65px_8.99px] md:p-[17.42px_14.3px_17.31px_14.61px] lg:p-[26.05px_21.38px_25.88px_21.85px]
                flex items-center justify-center"
            >
              <Image
                src={wearable.icon}
                alt={wearable.name}
                width={130}
                height={130}
                objectFit='contain'
                className="w-full h-full object-contain"
              />
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const wearables = [
  {
    name: 'Fitbit',
    icon: '/icons/integration (2).svg',
    style: { bottom: '20%', right: '10%' },
  },
  {
    name: 'Oura',
    icon: '/icons/integration (4).svg',
    style: { top: '25%', left: '-10%' },
  },
  {
    name: 'Custom Tracker',
    icon: '/icons/integration (5).svg',
    style: { bottom: '-20%', left: '50%', transform: 'translate(-50%, 50%)' },
  },
  {
    name: 'Garmin',
    icon: '/icons/integration (3).svg',
    style: { bottom: '20%', left: '10%' },
  },
  {
    name: 'Apple Health',
    icon: '/icons/integration.svg',
    style: { top: '-20%', left: '50%', transform: 'translate(-50%, -50%)' },
  },
  {
    name: 'Google Fit',
    icon: '/icons/integration (1).svg',
    style: { top: '25%', right: '-10%' },
  },
];

