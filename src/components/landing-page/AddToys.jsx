import toysImage from '../../assets/images/sections/toys.svg'
import toysScuba from '../../assets/images/sections/toys-scuba.svg'

const AddToys = () => {
  return (
    <section className=' py-8 pt-48'>
      <div className='container mx-auto max-w-6xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          {/* Left Section (Image) */}
          <div>
            <h2 className='text-3xl font-bold'>Add Toys</h2>
            <div className='w-32 h-[2px] bg-brandPrimary my-3'></div>
            {/* Paragraph */}
            <p className='mb-4 text-lg text-gray-700 mt-4'>
              To elevate your onboard experience, we highly recommend choosing
              one or more of the exciting toys from our exclusive collection.
              They're guaranteed to provide endless fun for all! Our selection
              includes Bamboo GTX series electric skateboards for effortless
              cruising all day, Fliteboards, Seabobs F5 S, Mavic 2 Pro drones,
              Stand-Up Paddle boards, Yamaha SeaWing II sea scooters designed
              for power and performance, and Kaabo high-speed electric scooters
              built for the ultimate on or off-road adventure. These top-rated
              toys offer something for everyone!
            </p>

            {/* Three Images Below Paragraph */}
            <div className='grid grid-cols-3 gap-4'>
              <img
                src='https://via.placeholder.com/150'
                alt='Image 1'
                className='w-full object-cover rounded-lg shadow-md'
              />
              <img
                src='https://via.placeholder.com/150'
                alt='Image 2'
                className='w-full object-cover rounded-lg shadow-md'
              />
              <img
                src='https://via.placeholder.com/150'
                alt='Image 3'
                className='w-full object-cover rounded-lg shadow-md'
              />
            </div>
          </div>
          {/* Right Section (Text + Images) */}
          <div className=' flex items-center justify-center flex-col'>
            <img src={toysImage} alt='Water Toys Splash' className='h-24 ' />
            <p className='my-4 text-2xl text-center font-bold text-brandPrimary'>
              Toys Water Splash
            </p>
            <img src={toysScuba} alt='Water Toys Splash' className='h-24 ' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddToys
