import React from 'react'
import exploreImage from '../../assets/images/sections/explore.webp'

const ExploreSection = () => {
  return (
    <>
      <section className='pt-48 px-4 md:px-16'>
        <div className='container mx-auto max-w-6xl'>
          {/* Image Section */}
          <div className='w-full mb-8'>
            <img
              src={exploreImage}
              alt='Food Image'
              className='w-full h-[550px] object-cover rounded-sm shadow-lg'
            />
          </div>

          <div className='w-full flex flex-col items-center my-24'>
            <h2 className='text-2xl font-bold'>Discover Ancient Greece</h2>
            <div className='w-64 h-[2px] bg-brandPrimary mx-auto my-8'></div>
            <p className='max-w-5xl pb-12 text-center'>
              Greece—the land of mythical gods and the cradle of Western
              civilization. It is the birthplace of democracy, the Olympic
              Games, and numerous scientific and mathematical breakthroughs,
              from the railway and showers to central heating, alarm clocks, and
              the fire hose, to name just a few!
            </p>
            <p className='max-w-5xl pb-12 text-center'>
              Known as Hellas, Greece boasts a rich history and tradition, while
              also offering beautiful beaches, a vibrant modern culture, and
              thrilling nightlife. It’s a country that masterfully blends the
              intricate and the simple.
            </p>
            <p className='max-w-5xl pb-12 text-center'>
              Beyond the mainland, Greece’s islands are divided into seven main
              groups based on their geographical location: the Ionian Islands
              (Eptanisa), Cyclades, Dodecanese, Northern Aegean, Sporades,
              Saronic Gulf, and Crete and Evia, which stand alone. Below is a
              glimpse of the wonders awaiting you in this captivating and
              magnificent country.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ExploreSection
