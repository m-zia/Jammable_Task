//import Image from "next/image";

//import Button from '../components/button';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Socials from '../components/Socials'
import Genres from '../components/Genres';
import Promoted from '../components/Promoted';
import Community from '../components/Community';
import MoreVoices from '../components/MoreVoices';
import Footer from '../components/Footer';


export default function Home() {
  return (

    <>
      <Main>
        <Navbar />
        <Banner />
        <Socials />
        <Genres />
        <Promoted />
        <Community />
        <MoreVoices />
      </Main>
      <Footer />
    </>




  );
}
