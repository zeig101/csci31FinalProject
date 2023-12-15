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
        <PageContent content="This website contains record of my existing computer builds, plans for future builds, and other related content. Below you can see a preview of some of my builds.
        There's not much to loook at here, simply because everything else is handled on other pages. I do my best to explain terms that someone might not know, but all this technobabble has
        really turned into second nature for me, so I may think something is simple enough that someone gets it regardless when they really don't. I apologize in advance." />
      </div>
      <Footer />
    </div>
  )
}
