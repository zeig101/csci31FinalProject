export default function Card({ 
    title = "Sample Title", 
    subtitle = "Sample Subtitle", 
    description = "Sample Text", 
    img  = "https://media.istockphoto.com/id/856017598/photo/404-error-with-a-kitten.jpg?s=612x612&w=0&k=20&c=nQDaTOmMxzAy7WP6gUcQDYtJ-PrEsOZUXqcdqltaZsQ="
    }) {
    return <div class="flex-grow-1 justify-around text-center block p-10 bg-gray-100 rounded-2xl border border-black shadow-xl hover:scale-[1.1] transition-transform">
    <h1 class="mb-2 textx-3xl font-bold text-gray-900">{title}</h1>
    <h2 class="text-gray-900">{subtitle}</h2>
    <img src={img}/>
    <p class="py-4">{description}</p>
  </div>
}