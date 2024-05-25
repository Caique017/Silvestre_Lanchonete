import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()

  const handleNavigateHome = () => {
    navigate('/menu')
  }
  return (
    <div className="flex flex-col items-center space-y-5 border border-white/10 bg-zinc-900 py-4">
      <h1 className="text-xl font-bold 2xl:text-3xl">Silvestre Lanchonete</h1>
      <button
        onClick={handleNavigateHome}
        className="h-10 w-44 rounded-md border border-white/10 text-zinc-300 duration-500 ease-in-out hover:bg-orange-50 hover:transition 2xl:h-14 2xl:w-52 2xl:text-lg"
      >
        Acesse nosso cardápio
      </button>
    </div>
  )
}
