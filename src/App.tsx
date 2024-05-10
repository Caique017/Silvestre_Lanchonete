import { Search, Trash } from 'lucide-react';
import { Footer } from './components/footer';
import { NavLink } from './components/nav-link';
import { ShoppingBag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from './components/ui/separator';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';

interface menuProps {
  nome: string,
  nameSection: string | null,
  id: number,
  valor: string
}

export function App() {
  const [searchText, setSearchText] = useState('');

  const [selectedDishes, setSelectedDishes] = useState<menuProps[]>([]);

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToBag = (dish: menuProps) => {
    setSelectedDishes([...selectedDishes, dish]);
    setTotalPrice(totalPrice + parseFloat(dish.valor.replace('A partir de: R$ ', '')))
    toast.success('Prato adicionado à sacola com sucesso!');
  }

  const removeFromBag = (dish: menuProps) => {
    setSelectedDishes(selectedDishes.filter((d) => d.id !== dish.id));
    setTotalPrice(totalPrice - parseFloat(dish.valor.replace('A partir de: R$ ', '')));
    toast.error('Prato removido da sacola com sucesso!');
  }

  function generateRandomPrice() {
    return (Math.random() * (50 - 10) + 10).toFixed(2); // Gera um valor aleatório entre 10.00 e 50.00
  }

  function handleNavLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const targetId = e.currentTarget.getAttribute('href'); // Obtém o ID do alvo do link
    if (targetId) {
        scrollToSection(targetId.slice(1)); // Remove o "#" do início do ID
    }
}

function scrollToSection(sectionId: string) {
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    const headerHeight = document.querySelector('.header')?.getBoundingClientRect().height || 0;
    let targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
    targetPosition -= 140;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

  const dishes: menuProps[] = [
    { nome: 'Virado à Paulista - Segunda-feira', nameSection: 'Pratos do dia', id: 1, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Bife à rolê - Terça-feira', nameSection: null, id: 2, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Feijoada - Quarta-feira', nameSection: null, id: 3, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Macarrão com frango - Quinta-feira', nameSection: null, id: 4, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Filé de peixe - Sexta-feira', nameSection: null, id: 5, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Feijoada - Sábado', nameSection: null, id: 6, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Omelete', nameSection: 'Pratos Executivos', id: 7, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Picadinho', nameSection: null, id: 8, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Fígado Acebolado', nameSection: null, id: 9, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Frango ao Molho', nameSection: null, id: 10, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Costela ao Molho', nameSection: null, id: 11, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Calabresa', nameSection: null, id: 12, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Bife Acebolado', nameSection: null, id: 13, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Bife à Milanesa', nameSection: null, id: 14, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Bife à Cavalo', nameSection: null, id: 15, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Frango à Passarinho', nameSection: null, id: 16, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Picanha', nameSection: 'Pratos Especiais', id: 17, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Filé Mignon', nameSection: null, id: 18, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Contra Filé', nameSection: null, id: 19, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Parmegiana', nameSection: null, id: 20, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Strogonoff', nameSection: null, id: 21, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Filé de Frango Grelhado', nameSection: null, id: 22, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Filé de Frango à Milanesa', nameSection: null, id: 23, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Carne Assada c/ Molho Madero', nameSection: null, id: 24, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'X-Salada', nameSection: 'Hambúrgueres & Beirutes', id: 25, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'X-Tudo', nameSection: null, id: 26, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'X-Bacon', nameSection: null, id: 27, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'X-Filé de Frango', nameSection: null, id: 28, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'X-Churrasco', nameSection: null, id: 29, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Americano', nameSection: null, id: 30, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Misto-Quente', nameSection: null, id: 31, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Queijo Quente', nameSection: null, id: 32, valor: `A partir de: R$ ${generateRandomPrice()}` },
    { nome: 'Beirute', nameSection: null, id: 33, valor: `A partir de: R$ ${generateRandomPrice()}` },
  ];

  return (
    <div className='bg-zinc-950 mx-auto flex flex-col gap-5'>
      <Toaster position='top-right' />
    <div className='fixed z-10 border border-white/10 bg-zinc-900 pl-4 md:pl-12 xl:pl-16 w-full flex flex-col gap-3'>
      <div className="flex mt-6 gap-7 md:gap-36 xl:gap-40 2xl:gap-80 items-center">
        <a href="#" className="text-zinc-50 font-bold text-sm md:text-xl xl:text-2xl 2xl:text-4xl">Silvestre Lanchonete</a>
        <div className="px-3 md:w-60 xl:w-64 2xl:w-96 py-1 2xl:py-2 md:ml-40 xl:ml-72 border xl:mt-2 border-white/10 rounded-lg flex items-center gap-3 2xl:gap-6">
          <Search className='size-3 xl:size-4 2xl:size-5 text-orange-600' />
          <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
            className="bg-transparent 2xl:text-lg w-20 md:w-40 outline-none border-0 p-0 text-sm focus:ring-0"
            placeholder="busca..."
          />
        </div>
        <Dialog>

        <DialogTrigger>
  <ShoppingBag
    className={`size-6 2xl:size-9 ${
      selectedDishes.length > 0 ? 'text-orange-600 transition duration-700' : ''
    }`}
  />
</DialogTrigger>
  <DialogContent className="bg-zinc-950 w-full">
    <div className="justify-center items-center flex gap-6">
      <ShoppingBag className="size-8 md:size-12"/>
      <p className="text-lg md:text-xl font-semibold">sacola</p>
    </div>
    <Separator className="bg-white/10" />
    {selectedDishes.map((selectedDish) => (
  <div key={selectedDish.id} className="flex justify-between items-center py-2">
    <div>
      <h3 className="md:text-lg font-semibold">{selectedDish.nome}</h3>
      <p className="text-sm md:text-md">{selectedDish.valor}</p>
    </div>
    <button
      type="button"
      onClick={() => {
        removeFromBag(selectedDish);
        toast.error('Prato removido da sacola');
      }}
    >
      <Trash />
    </button>
  </div>
))}

      <div className="flex justify-between">

        <div>
          <p>Itens</p>
          <p>{selectedDishes.length}</p>
        </div>

        <div>
        <p>Total</p>
        <p>R$ {totalPrice.toFixed(2)}</p>
        </div>
    
      </div>
      {/* <button className="flex items-center justify-center bg-zinc-900 rounded h-7"
      onClick={() => {
        handleClose(); // Fecha o modal
      }}
      >
  Continuar comprando
      </button> */}

      <a type='button' href='https://wa.me/5511977468366' className="bg-green-500 rounded h-7 flex items-center justify-center hover:bg-green-600">
        Fazer pedido no WhatsApp
      </a>
  </DialogContent>
</Dialog>
      </div>
      <div className='flex items-center py-3'>
      <nav className='flex items-center gap-3 md:gap-5 xl:gap-7 2xl:gap-10'>
            {dishes
              .filter((dish) => dish.nameSection !== null)
              .map((dish) => (
                <NavLink key={dish.id} href={`#${dish.nameSection.replace(/\s+/g, '-').toLowerCase()}`} onClick={handleNavLinkClick}>
                  {dish.nameSection}
                </NavLink>
              ))}
          </nav>
      </div>
    </div>

    <div className="mx-6 md:mx-10 pt-32 md:pt-40 xl:pt-44">
    {dishes
    .filter((dish) =>
        searchText.trim() === '' ||
        dish.nome.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((dish, index) => (
        <div key={dish.id} id={dish.nameSection ? dish.nameSection.replace(/\s+/g, '-').toLowerCase() : ''} className="prato pb-8">
            {dish.nameSection && <h2 className="text-[17px] 2xl:text-2xl font-semibold w-full flex justify-center md:justify-start pb-2">{dish.nameSection}</h2>}
            {index !== 0 && dish.nameSection && <Separator className="bg-white/10 mb-5" />}
            <button
                type="button"
                onClick={() => addToBag(dish)}
                className="border border-white/10 w-72 h-28 py-3 px-5 rounded-lg hover:bg-zinc-900 hover:transition duration-700 ease-in-out"
            >
                <h3 className="text-sm 2xl:text-xl opacity-50 pb-3">{dish.nome}</h3>
                <p className="2xl:text-[22px]">{dish.valor}</p>
            </button>
        </div>
    ))}
    </div>
       <Footer />
    </div>
  )
}
