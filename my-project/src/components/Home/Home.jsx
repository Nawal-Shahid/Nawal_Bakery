import React from 'react'
import HeroImg from '../../assets/cake.png'


const Home = () => {
  return (
    <div className='min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white'>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text comment section */}
                <div>
                    <h1 
                              data-aos="fade-up"
                              data-aos-once="true"
                              
                    className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                        Baked with <span
                                  data-aos="zoom-out"
                                  data-aos-delay="300"
                        className='text-primary font-cursive'>Love</span>, Shared with Joy</h1>
                        <div data-aos="fade-up" data-aos-delay="400">
                          <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105 duration-200">Bake</button>
                        </div>
                </div>
                {/* Image section */}
                <div data-aos="zoom-in" data-aos-duration="300" className='min-h-[450px] justify-center'>
                  <img src={HeroImg} alt="cake" className='w-[300px] sm:w-[450px] sm:scale-110 mx-auto spin'  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home