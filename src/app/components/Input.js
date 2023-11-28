export default function Input({ type = 'text', placeholder = 'enter text here...', name, id }) {
  return <input className="p2 rounded-md shadow-md" type={type} placeholder={placeholder} name={name} id={id} />
}
