import Image from 'next/image'
import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import PageContent from './components/PageContent'
import Card from './components/Card'
import Footer from './components/Footer.js'
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ukgjmfseegaegzadqpuw.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)

export const revalidate = 0

export default async function Home() {
  const { data: cards, error } = await supabase.from('cards').select('*')

  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="Home" />
        <PageContent content="This website contains record of my existing computer builds, as well as my opinions on different hardware options. Below you can see a preview of some of my builds." />
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
