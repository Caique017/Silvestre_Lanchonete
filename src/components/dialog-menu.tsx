import { ShoppingBag, Trash } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Separator } from "./ui/separator";
import { toast } from "sonner";

interface MenuProps {
  nome: string,
  nameSection: string | null,
  id: number,
  valor: string
}

interface DialogMenuProps {
  selectedDishes: MenuProps[];
  removeFromBag: (dish: MenuProps) => void;
  totalPrice: number;
  formatarPedido: () => string;
}

export function DialogMenu ({ selectedDishes, removeFromBag, totalPrice, formatarPedido }: DialogMenuProps) {

  return (
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

      <a type='button' href={`https://wa.me/5511977468366?text=${encodeURIComponent(formatarPedido())}`} className="bg-green-500 rounded h-7 2xl:h-9 flex items-center justify-center hover:bg-green-600">
        Fazer pedido no WhatsApp
      </a>
  </DialogContent>
</Dialog>
  )
}