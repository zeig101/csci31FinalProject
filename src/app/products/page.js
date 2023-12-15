import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Plans" />
        <PageContent content="Here, you will be able to see my plans for future builds!" />
      </div>
      <div className="flex m-12 bg-slate-800 rounded-md justify-left text-gray-300">
      <div className='flex m-6'>
      <strong>What I'm working on now:</strong>
      <br />I'm currently working on a special project I've been considering for a long while. I've gotten my hands on a non-functioning
      Nintendo 64 console, and an Asrock STX form factor motherboard. Paired with an Athlong 3000g processor from AMD, that gives me a 
      small package with plenty of power to run emulators for everything from the N64/PS2 era and backwards, and even some PS3 titles.
      I'm planning on posting documentation of the process and build on Youtube once I'm finished all the prep work.
      </div>
      </div>
      <Footer />
    </div>
  )
}
