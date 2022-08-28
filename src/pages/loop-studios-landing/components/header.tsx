/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import HamburgerIcon from '../assets/images/icon-hamburger.svg';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="h-screen relative font-['Alata'] text-white pt-10 px-6 bg-loop-studio-hero bg-cover xl:bg-loop-studio-hero-desktop xl:px-40 xl:bg-black/60 xl:bg-blend-overlay"
    >
      <div className={`absolute h-screen w-screen -mx-6 -mt-10 bg-black ${showMenu ? '' : 'hidden'}
                      xl:hidden`}
      >
        {/*  */}
      </div>

      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl z-10 xl:text-4xl">loopstudios</h1>
        <img
          className="h-fit z-10 xl:hidden"
          onClick={() => setShowMenu(!showMenu)}
          src={HamburgerIcon}
          alt=""
          srcSet=""
        />
        <ul className={`gap-x-6 font-semibold
                      ${showMenu ? 'absolute top-1/2 -translate-y-1/2 flex flex-col gap-y-4' : 'hidden'} xl:flex`}
        >
          <li className="z-10">About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="h-full flex flex-col justify-center">
        <div className="border-2 [word-spacing:999rem] rounded-sm uppercase text-4xl p-4 font-['josefin_sans'] font-extralight xl:text-5xl xl:[word-spacing:normal] xl:p-10 xl:w-2/5 xl:tracking-wide">
          immersive experiences that deliver
        </div>
      </div>

    </header>
  );
}

export default Header;
