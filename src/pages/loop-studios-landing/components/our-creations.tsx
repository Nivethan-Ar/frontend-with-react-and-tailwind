import Cards from './cards';
import Section from './section';

function OurCreations() {
  return (
    <Section sectionStyles="pb-20 flex flex-col">
      <div className="xl:flex xl:items-start xl:justify-between xl:mb-8">

        <h2 className="uppercase text-3xl font-extralight mb-6 text-center
                       xl:text-4xl"
        >
          our creations
        </h2>

        <button
          className="hidden uppercase font-semibold border w-fit border-black py-2 px-8
                     xl:block"
          type="button"
        >
          see all
        </button>
      </div>

      <div className="flex flex-col gap-y-4
                      xl:grid xl:grid-cols-4 xl:gap-6"
      >
        <Cards
          title="deep earth"
          containerStyles="bg-loop-studio-deep-earth xl:bg-loop-studio-deep-earth-desktop"
        />

        <Cards
          title="night arcade"
          containerStyles="bg-loop-studio-night-arcade xl:bg-loop-studio-night-arcade-desktop"
        />

        <Cards
          title="soccer team vr"
          containerStyles="bg-loop-studio-soccer-team xl:bg-loop-studio-soccer-team-desktop"
        />

        <Cards
          title="the grid"
          containerStyles="bg-loop-studio-the-grid xl:bg-loop-studio-the-grid-desktop"
        />

        <Cards
          title="from up above vr"
          containerStyles="bg-loop-studio-from-up xl:bg-loop-studio-from-up-desktop"
        />

        <Cards
          title="pocket porealis"
          containerStyles="bg-loop-studio-pocket-borealis xl:bg-loop-studio-pocket-borealis-desktop"
        />

        <Cards
          title="the curiosity"
          containerStyles="bg-loop-studio-the-curiosity xl:bg-loop-studio-the-curiosity-desktop"
        />

        <Cards
          title="make it fisheye"
          containerStyles="bg-loop-studio-make-it xl:bg-loop-studio-make-it-desktop"
        />

      </div>

      <button
        className="uppercase font-semibold border w-fit mt-8 self-center border-black py-2 px-8
                   xl:hidden"
        type="button"
      >
        see all
      </button>
    </Section>
  );
}

export default OurCreations;
