import Section from './section';
import ImageInteractive from '../assets/images/mobile/image-interactive.jpg';

function VR_SECTION() {
  return (
    <Section sectionStyles="my-24 text-center relative xl:text-left">
      <img className="mb-12 border border-white" src={ImageInteractive} alt="" srcSet="" />
      <div className="xl:absolute bg-white xl:bottom-0 xl:right-0 xl:pl-16 xl:pt-20 xl:w-2/5 xl:-translate-x-1/4 2xl:w-1/2">
        <h2 className="uppercase text-3xl font-extralight mb-6 xl:text-4xl">the leader in interactive vr</h2>
        <p className="text-slate-600/80 font-['Alata'] px-4 xl:px-0">
          Founded in 2011, Loopsstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </Section>
  );
}

export default VR_SECTION;
