import { BurgersBeiruts } from "./menu/burgers-beiruts";
import { DishOfTheDay } from "./menu/dish-of-the-day";
import { ExecutiveDishes } from "./menu/executive-dishes";
import { SpecialDishes } from "./menu/special-dishes";

export function Menu () {
  return (
    <div>
      <div>
      <DishOfTheDay />
      <ExecutiveDishes />
      <SpecialDishes />
      <BurgersBeiruts />
      </div>
    </div>
  )
}