import fbIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinIcon from '../assets/images/icon-pinterest.svg';
import instaIcon from '../assets/images/icon-instagram.svg';

function Footer() {
  return (
    <footer className="h-screen flex flex-col gap-y-8 font-['Alata'] bg-black text-white
                       xl:h-fit xl:flex-row xl:justify-between xl:items-center xl:px-20 xl:py-4"
    >
      <div className="py-10 flex flex-col gap-8 items-center
                      xl:items-start"
      >
        <h2 className="font-bold text-5xl xl:text-3xl">loopstudios</h2>
        <ul className="capitalize text-center text-xl space-y-6
                       xl:flex-row xl:flex xl:space-y-0 xl:gap-x-4 xl:text-base"
        >
          <li>about</li>
          <li>careers</li>
          <li>events</li>
          <li>products</li>
          <li>support</li>
        </ul>
      </div>

      <div className="flex flex-col items-center gap-y-4
                      xl:items-end xl:gap-y-8"
      >
        <div className="flex gap-x-4">
          <img className="" src={fbIcon} alt="" srcSet="" />
          <img src={twitterIcon} alt="" srcSet="" />
          <img src={pinIcon} alt="" srcSet="" />
          <img src={instaIcon} alt="" srcSet="" />
        </div>

        <div>
          <p className="text-gray-400">&copy; 2021 Loopstudios. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
