export default function Card({


  title = 'Sample Title',
  subtitle = 'Sample Subtitle',
  description = 'Sample Text',
  img = 'https://media.istockphoto.com/id/856017598/photo/404-error-with-a-kitten.jpg?s=612x612&w=0&k=20&c=nQDaTOmMxzAy7WP6gUcQDYtJ-PrEsOZUXqcdqltaZsQ=',
}) {
  return (
    <div className="flex-grow-1 flex-wrap justify-around text-center block p-10 bg-slate-800 rounded-2xl border border-black shadow-xl hover:scale-[1.1] transition-transform max-w-xl">
      <h1 className="mb-2 text-2xl font-bold text-gray-300">{title}</h1>
      <h2 className="text-gray-300">{subtitle}</h2>
      <img src={img} />
      <p className="py-4 text-gray-300 flex-wrap">{description}</p>
    </div>
  )
}
