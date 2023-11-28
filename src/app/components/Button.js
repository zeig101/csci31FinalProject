export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button
      className="flex bg-gray-100 text-slate-500 rounded-md shadow-md px-4 py-2 hover:scale-120"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
