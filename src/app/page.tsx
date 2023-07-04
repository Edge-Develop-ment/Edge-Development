import Image from 'next/image';
import Hero from './Hero';
import About from './About';
import Testimonials from './Testimonials';
import Footer from './Footer';
import logo from '../../public/LogoGrayOrange.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className='flex flex-row w-full'>
        <Image src={logo} alt="Logo" width={150} height={150}/>
        <ul className='flex flex-row w-full gap-4'>
          <li><a>Our Work</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}
