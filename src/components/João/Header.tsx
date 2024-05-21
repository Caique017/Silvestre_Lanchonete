import { useNavigate } from "react-router-dom";

export function Header () {

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/about');
  };
  return (
    <div className='border flex flex-col items-center space-y-5 py-4 border-white/10 bg-zinc-900'>
      <h1 className="text-xl font-bold">Silvestre Lanchonete</h1>
      <button onClick={handleNavigateHome} className="border text-zinc-300 border-white/10 h-10 w-44 rounded-md hover:bg-orange-50 hover:transition duration-500 ease-in-out">
        Acesse nosso cardápio
      </button>
    </div>
  )
}