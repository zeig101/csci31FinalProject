import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardForm from '../components/CardForm'
import { createClient } from '@supabase/supabase-js'
import { findCards } from '../utils/supabase-client'

export const revalidate = 0

export default async function About() {
  const cards = await findCards()

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Builds" />
        <PageContent
          content="Here you can find the information about the various completed PC builds I have made. These computers were built by myself for either myself, a family member, or a friend. This list is not 
        all encompassing and multiple builds I have done will be left out due to a variety of reasons, usually because I no longer have the actual part list I used for the build."
        />
        <div className="flex gap-6 my-6 flex-wrap">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} subtitle={card.subtitle} img={card.img} description={card.description} />
          ))}
        </div>
        <CardForm />
      </div>
      <Footer />
    </div>
  )
}
