import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroImg from '../../assets/strawberry.png'

const Hero = () => {

    const [sidebar, setSidebar] = React.useState(true);


    return (
        <main className='bg-primaryDark md:py-6 md:px-12'>
            <section className='relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md'>
                <div className="container">
                    <Navbar />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
                        {/* text container */}
                        <div className='text-white space-y-4 p-4 md:mt-0'>
                            <h1 className='text-3xl pl-6 md:pl-14'>01___________</h1>
                            <h1 className='text-5xl font-bold uppercase text-shadow'>A Healthy Fruit</h1>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vero corrupti impedit ea, dolore qui, molestias architecto, quia sequi ex ipsum! Commodi aut laudantium sed ipsum quod consequuntur voluptates quaerat.</p>
                        <button className='border border-white px-4 py-2 rounded-lg'>Shop Now</button>
                    </div>
                    {/* image container */}
                    <div>
                        <img src={HeroImg} alt='Not Found' className='w-[400ps] img-shadow relative z-[1]s' />
                    </div>
                    {/* blank container */}
                    <div className='md:hidden'></div>
                </div>
            </div>
            <h1 className='text-center text-[80px] text-white uppercase font-bold sm:text-[120px] md;text-[150px]xl:text-[180px] absolute bottom-0 w-full z-0 text-shadow'>berries</h1>
            {
               sidebar && (
                <div className='absolte top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10'>
                    <div className='w-full h-full'>
                        {/* Lining */}
                        <div className='w-[1px] h-[70px] bg-white'></div>
                        {/* social media icons */}
                        <div>
                            <FaFacebookF />
                        </div>

                    </div>
                </div>
               )
            }
        </section>
    </main>
  )
}

export default Hero