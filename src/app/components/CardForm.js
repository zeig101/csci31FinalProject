import { redirect } from 'next/navigation'
import Button from './Button'
import Field from './Field'
import Input from './Input'
import Label from './Label'
import { insertCard } from '../utils/supabase-client'

async function createCard(formData) {
  'use server'
  console.log('button is working')
  const title       = formData.get('title')
  const subtitle    = formData.get('subtitle')
  const img         = formData.get('img')
  const description = formData.get('description')
  insertCard({ title, subtitle, img, description })
  redirect('/services')
  // get each field out of formData
  // call supabase-client insertCard
}

export default function CardForm() {
  return (
    <form action={createCard} className="p-8 bg-slate-800 mt-4 rounded-lg">
      <Field>
        <Label label="Build Name" />
        <Input id="title" name="title" />
      </Field>
      <Field>
        <Label label="Price Range" />
        <Input id="subtitle" name="subtitle" />
      </Field>
      <Field>
        <Label label="Image" />
        <Input id="image" name="image" />
      </Field>
      <Field>
        <Label label="Details" />
        <Input id="description" name="description" />
      </Field>
      <div className="mt-4 flex justify-end ">
        <Button type="submit">Add Build</Button>
      </div>
    </form>
  )
}
