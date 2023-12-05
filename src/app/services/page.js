import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardForm from '../components/CardForm'


export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Builds" />
        <PageContent content="Here you can find the information about the various completed PC builds I have made. These computers were built by myself for either myself, a family member, or a friend. This list is not 
        all encompassing and multiple builds I have done will be left out due to a variety of reasons, usually because I no longer have the actual part list I used for the build."/>
        <CardForm />
      </div>
      <Footer />
    </div>
  )
}
