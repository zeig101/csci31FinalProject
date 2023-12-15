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
      <div className="flex m-12 bg-slate-800 rounded-md justify-left text-gray-300">
        <div className="flex m-6">
          Seriously, unless you&apos;re getting the xx80 or xx90 card, or doing something really specific, don&apos;t
          get Nvidia. The 4080 is a rough pick too, because the AMD RX 7900 XTX offers extremely similar performance for
          often less money.
        </div>
      </div>
      <div className="flex m-12 bg-slate-800 rounded-md justify-left text-gray-300">
        <div className="flex m-6">
          Also, Intel cpus are not good for gaming, price to performance wise. Intel&apos;s current top offering, the i9
          14900K is $576.66 at the moment, on sale from $649.99. The AMD top offering, the Ryzen 7 7800X3D is $350.56,
          on sale from $499.00. The performance difference between the two processors is a wash, as the Intel offering
          outperforms slightly in some cases, but fails slightly in others. The major difference in how they accomplish
          this performance - The i9 14900k carries a TDP (Thermal Design Power) of 253W (watts), while the 7800X3D has a
          TDP of 120W. Accoding to TechPowerUp&apos;s testing, the 14900k draws around 144W average at stock
          configuration, while the 7800X3D sits at 49W average during testing, with a peak draw of 60W. This difference
          in power consumption marks a significant saving over a larger period of time, as well as the lower thermal
          design power means the 7800X3D is easier and cheaper to keep cool.
        </div>
      </div>
      <Footer />
    </div>
  )
}
