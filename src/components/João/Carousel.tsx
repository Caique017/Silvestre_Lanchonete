import { useState } from 'react';
import ViradoPaulista from '../../assets/virado.png';
import BifeRole from '../../assets/bife.png';
import Feijoada from '../../assets/feijuca.png';
import Funcionamento from '../../assets/funcionamento.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../Caique/ui/carousel";

const ControlledCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Funcionamento, ViradoPaulista, BifeRole, Feijoada];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full md:my-24 px-6 md:px-12 lg:px-24">
    <Carousel className="relative w-full h-96 overflow-hidden">
      <CarouselContent className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <CarouselItem key={index} className="min-w-full h-96">
            <img className="w-full h-full object-contain" src={image} alt={`Slide ${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    <button
      onClick={prevSlide}
      className="absolute left-4 md:left-12 lg:left-24 top-1/2 transform -translate-y-1/2 md:bg-zinc-900 text-white p-3 rounded-full shadow-lg focus:outline-none hover:bg-zinc-700 transition-colors duration-300"
    >
      &larr;
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 md:right-12 lg:right-24 top-1/2 transform -translate-y-1/2 md:bg-zinc-900 text-white p-3 rounded-full shadow-lg focus:outline-none hover:bg-zinc-700 transition-colors duration-300"
    >
      &rarr;
    </button>
  </div>
  );
};

export default ControlledCarousel;
