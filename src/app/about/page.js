import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import CardForm from '../components/CardForm'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent
          content="Hi, my name's Duncan. I'm a college student, studying computer programming. I've always had an interest in computers, both hardware and software. 
          This interest has led to me developing a hobby of assembling computers. On this website, you'll find information on the most but probably not all the computers I've built already,
          as well as plans for any special future builds I may have, and an opinions page where I talk about my impressions, opinions, and findings relating to computer hardware I've used, researched, or interacted with.
          This website started as a class project for my Web Development course."
        />
      </div>
      <Footer />
    </div>
  )
}
