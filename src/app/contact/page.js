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
        <PageTitle title="Opinions" />
        <PageContent
          content="As of 2023-12-04: In my region, Nvidia graphics cards are much less performance for the price than AMD graphics cards and should only be seen as an option if REALLY care about ray tracing.
        Intel's ARC GPU series is still fledgling, and can still have some pretty odd or impactful problems in new games and unpopular older games. They have made pretty significant strides over the past year, 
        but still leave a lot to be desired. Their enhanced video encoding can allegedly be good for certain types of VR systems, but I have no first hand experience on the matter."
        />
      </div>
      <Footer />
    </div>
  )
}
