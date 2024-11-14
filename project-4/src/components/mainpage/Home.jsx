import React from 'react'
import Categories from './Categories'
import SliderCard from './Slider'

const Home = () => {
  return (
    <>
      <section className='home'>

        <div className="container d_flex">
<Categories/>
<SliderCard/>
        </div>
      </section>
    </>
  )
}

export default Home
