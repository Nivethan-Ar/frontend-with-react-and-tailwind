import HamburgerIcon from '../assets/images/icon-hamburger.svg';

function Header() {
  return (
    <header
      className="h-screen font-['Alata'] text-white pt-10 px-6 bg-loop-studio-hero bg-cover xl:bg-loop-studio-hero-desktop xl:px-32 xl:bg-black/60 xl:bg-blend-overlay"
    >
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-2xl xl:text-4xl">loopstudios</h1>
        <img className="h-fit xl:hidden" src={HamburgerIcon} alt="" srcSet="" />
        <ul className="hidden gap-x-6 font-semibold xl:flex">
          <li>About</li>
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
