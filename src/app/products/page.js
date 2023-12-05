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
      <Footer />
    </div>
  )
}
