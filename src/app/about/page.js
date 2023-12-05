import Image from 'next/image'
import Navbar from '../components/Navbar'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/PageContent'
import MyTable from '../components/MyTable'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { findCards } from '../utils/supabase-client'

const cardTableColumns = [
  {
    title: 'Build Name',
    key: 'title',
  },
  {
    title: 'Price Range',
    key: 'subtitle',
  },
  {
    title: 'Image',
    key: 'img',
  },
  {
    title: 'Details',
    key: 'description',
  },
]

export const revalidate = 0

export default async function About() {
  const cards = await findCards()
  return (
    <div>
      <Navbar />
      <div className="m-12">
        <PageTitle title="About" />
        <PageContent
          content="Hi, my name's Duncan. I'm a college student, studying computer programming. I've always had an interest in computers, both hardware and software. 
          This interest has led to me developing a hobby of assembling computers. On this website, you'll find information on the most but probably not all the computers I've built already,
          as well as plans for any special future builds I may have, and an opinions page where I talk about my impressions, opinions, and findings relating to computer hardware I've used, researched, or interacted with.
          This website started as a class project for my Web Development course. My opinions on Nvidia hardware will be partially biased as I still haven't forgiven them for the GTX 970."
        />
        <MyTable columns={cardTableColumns} records={cards} />
      </div>
      <Footer />
    </div>
  )
}
