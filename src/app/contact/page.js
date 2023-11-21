import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Opinions" />
        <PageContent content="You shouldn't be buying an Nvidia graphics card unless you're going for the absolute top of the line, like the RTX 4080/4090. You get better price:performance from AMD." />
      </div>
    </div>
  )
}
