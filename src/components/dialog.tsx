import { PencilLine, ShoppingBag, Trash } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "./ui/separator";

export function DialogMenu () {
  return (
    <Dialog>

          <DialogTrigger>
            <ShoppingBag className="size-6 2xl:size-9" />
          </DialogTrigger>
            <DialogContent className="bg-zinc-950">
              <div className="justify-center items-center flex gap-6">
                <ShoppingBag className="size-8 md:size-12"/>
                <p className="text-lg md:text-xl font-semibold">sacola</p>
              </div>
              <Separator className="bg-white/10" />
              <div className="bg-zinc-900 py-3 px-5 rounded">
                <div className="flex justify-between pb-1">
                <h3 className="md:text-lg font-semibold">Parmegiana de frango</h3>
                <Trash className="size-5 md:size-6"/>
                </div>
                <p className="text-sm md:text-md">Acompanha arroz, feijão e fritas</p>
                <div className="items-center flex gap-1 pt-10 md:pt-24">
                <PencilLine className="flex size-4"/>
                <p className="text-[12px] pr-[86px] md:pr-[220px]">Clique para editar</p>
                <p className="text-[12px]">1 un x R$ 00,00</p>
                </div>
              </div>
                <div className="mt-20 md:mt-32">
                <Separator className="bg-white/10" />
                </div>
                <div className="flex justify-between">

                  <div>
                    <p>Itens</p>
                    <p>1</p>
                  </div>

                  <div>
                  <p>Total</p>
                  <p>R$ 00,00</p>
                  </div>
              
                </div>
                <button className="bg-zinc-900 rounded h-7">
                  Continuar comprando
                </button> 

                <button className="bg-green-500 rounded h-7">
                  Fazer pedido no WhatsApp
                </button>
            </DialogContent>
        </Dialog>
  )
}