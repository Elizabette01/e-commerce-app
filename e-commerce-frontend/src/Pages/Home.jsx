import React from 'react';
import Hero from '../components/Hero';
import NewIn from '../containers/NewIn';
import BigBanner from '../containers/BigBanner';
import { assets } from '../assets/assets';
import Policy from '../containers/Policy';
import NewsletterBox from '../components/NewsletterBox';


const Home = () => {
  return (
    <div>
      <Hero />
      <NewIn />
      <BigBanner image={assets.banner1} text1={'Shop by fit'} text2={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} text3={'view collections'} />
      <Policy />
      <NewsletterBox />
       
    </div>
  )
}

export default Home
