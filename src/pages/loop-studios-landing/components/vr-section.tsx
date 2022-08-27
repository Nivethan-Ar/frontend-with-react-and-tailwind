import Section from './section';
import ImageInteractive from '../assets/images/mobile/image-interactive.jpg';

function VR_SECTION() {
  return (
    <Section sectionStyles="py-24 font-['josefin_sans'] text-center">
      <img className="mb-12" src={ImageInteractive} alt="" srcSet="" />
      <h2 className="uppercase text-3xl font-extralight mb-6">the leader in interactive vr</h2>
      <p className="text-slate-600/80 font-['Alata'] px-4">
        Founded in 2011, Loopsstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </Section>
  );
}

export default VR_SECTION;
