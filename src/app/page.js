import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer.js'
import { createClient } from '@supabase/supabase-js'
import { findCards } from './utils/supabase-client'

export const revalidate = 0

export default async function Home() {
  const cards = await findCards()

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="This website contains record of my existing computer builds, plans for future builds, and other related content. Below you can see a preview of some of my builds." />
        <div className="flex gap-6 my-6 flex-wrap">
          {cards.map((card, idx) => (
            <Card key={idx} title={card.title} subtitle={card.subtitle} description={card.description} img={card.img} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
