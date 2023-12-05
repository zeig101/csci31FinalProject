const menuItems = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Opinions',
    href: '/contact',
  },
  {
    title: 'Builds',
    href: '/services',
  },
  {
    title: 'Plans',
    href: '/products',
  },
]

export default function Footer() {
  return (
    <div className="flex justify-between gap-6 text-gray-300 bg-slate-800 border border-black">
      <div className="flex text-gray-300 bg-slate-800 gap-6 m-12">Site by Duncan</div>
      <div className="flex text-white bg-gray-600 rounded-md m-12">
        {menuItems.map((item, index) => (
          <a key={index} href={item.href} className="justify-around m-2 gap-6 px-4 py-2 bg-slate-800 shadow-md">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
