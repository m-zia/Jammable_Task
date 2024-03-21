//import Image from "next/image";

import Button from '../components/button';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Genres from '../components/Genres';
import Promoted from '../components/Promoted';
import Community from '../components/Community';
import MoreVoices from '../components/MoreVoices';
import Footer from '../components/Footer';



export default function Home() {
  return (


    //maybe have a parent wrapper to apply the global styles (flex, padding etc)?
<>

      <Navbar></Navbar>
      <Banner></Banner>
      <Genres></Genres>
      <Promoted></Promoted>
      <Community></Community>
      <MoreVoices></MoreVoices>
      <Footer></Footer>

    </>





  );
}
