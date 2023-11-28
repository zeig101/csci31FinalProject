import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import CardForm from '../components/CardForm'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent
          content="I like to build computers, and have opinions on the matter to share. This website will give you a look at computers I've built already, 
        plans for future builds that may or may not happen, 
        and an opinions page where I post my opinions on past, current, and upcoming hardware and the companies that make it."
        />
        <CardForm />
      </div>
    </div>
  )
}
