import HamburgerIcon from '../assets/images/icon-hamburger.svg';

function Header() {
  return (
    <header
      className="h-screen text-white bg-slate-500 pt-10 px-6 bg-loop-studio-hero bg-cover"
    >
      <div className="flex justify-between items-center ">
        <h1 className="font-semibold text-2xl">loopstudios</h1>
        <img className="h-fit" src={HamburgerIcon} alt="" srcSet="" />
      </div>

      <div className="h-full flex flex-col justify-center">
        <div className="border-4 rounded-sm uppercase text-5xl p-4 font-['josefin sans'] font-extralight">
          immersive experiences that deliver
        </div>
      </div>

    </header>
  );
}

export default Header;
