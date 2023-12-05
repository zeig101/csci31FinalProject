import { AcademicCapIcon } from '@heroicons/react/24/solid'

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

export default function Navbar() {
  return (
    <div
      className="flex justify-between gap-6 m-12
     text-gray-300 items-center"
    >
      <AcademicCapIcon className="h-12 w-12 text-gray-300" />
      <div className="flex gap-4">
        {menuItems.map((item, index) => (
          <a key={index} href={item.href} className="px-4 py-2 bg-slate-800 shadow-md rounded-md">
            {item.title}
          </a>
        ))}
      </div>
    </div>
  )
}
