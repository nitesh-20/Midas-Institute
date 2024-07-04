import React from 'react';

const NAV_LINKS = [
//   { text: 'New Sigma 3.0', color: 'blue-600' },
  { text: 'HOME', color: 'zinc-900', },
  { text: 'ABOUT US', color: 'zinc-900' },
  { text: 'COURSES', color: 'zinc-900' },
  { text: 'CONTACT', color: 'zinc-900' },
];

const BUTTON_CLASSES = 'bg-blue-600 text-white px-4 py-2 rounded-lg';
const TEXT_CLASSES = 'text-xl font-bold';

const Navbar = () => {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src=" https://image1.jdomni.in/favicon/23032022/6C/DD/B9/F97D38DEC83BA3427C8E5ED2AC_1648015819179.ico" alt="APNA College Logo" className="h-10 w-10" />
          <span className={`${TEXT_CLASSES} text-green-500`}>MIDAS</span>
          <span className={`${TEXT_CLASSES} text-grey`}>INSTITUE</span>
        </div>
        <div className="flex items-center space-x-6">
          {NAV_LINKS.map((link, index) => (
            <a key={index} href="#" className={`text-${link.color}`}>{link.text}</a>
          ))}
          <button className={BUTTON_CLASSES}>Sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
