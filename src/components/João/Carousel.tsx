import { useState } from 'react'
import ViradoPaulista from '../../assets/virado.png'
import BifeRole from '../../assets/bife.png'
import Feijoada from '../../assets/feijuca.png'
import Funcionamento from '../../assets/funcionamento.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../components/Caique/ui/carousel'

const ControlledCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const images = [Funcionamento, ViradoPaulista, BifeRole, Feijoada]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  return (
    <div className="relative w-full px-6 md:my-10 md:px-12 lg:px-24 2xl:my-24">
      <Carousel className="relative h-96 w-full overflow-hidden md:h-128 lg:h-160 xl:h-192">
        <CarouselContent
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="h-96 min-w-full md:h-128 lg:h-160 xl:h-192"
            >
              <img
                className="h-full w-full object-contain"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -translate-y-1/2 transform rounded-2xl p-3 text-white transition-colors duration-300 focus:outline-none md:left-1 md:bg-zinc-900 md:hover:bg-zinc-700 lg:left-8 lg:h-12 lg:w-12 2xl:left-28 2xl:h-16 2xl:w-16"
      >
        &larr;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 transform rounded-2xl p-3 text-white transition-colors duration-300 focus:outline-none md:right-[5px] md:bg-zinc-900 md:hover:bg-zinc-700 lg:right-8 lg:h-12 lg:w-12 2xl:right-28 2xl:h-16 2xl:w-16"
      >
        &rarr;
      </button>
    </div>
  )
}

export default ControlledCarousel
