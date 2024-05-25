import Banner from '../../assets/banner_silvestre_lanchonete.png'
// eslint-disable-next-line camelcase
import Banner_Cel from '../../assets/banner_silvestre_cel.png'
import Carousel from './Carousel'
import { Header } from './Header'
import ContatoLocal from './Contato_Local'
import QuemSomos from './QuemSomos'

export function Home() {
  return (
    <section className="Home">
      <Header />
      <div className="h-97 mt-10 w-full">
        <img
          className="block h-auto w-full md:hidden"
          // eslint-disable-next-line camelcase
          src={Banner_Cel}
          alt="Banner_cel"
        />
        <img
          className="hidden h-auto w-full md:block lg:hidden"
          src={Banner}
          alt="Banner_tablet"
        />
        <img
          className="hidden h-auto w-full lg:block"
          src={Banner}
          alt="Banner_desktop"
        />
      </div>
      <div className="h-92 mt-14 flex w-full items-center justify-center">
        <QuemSomos />
      </div>
      <div className="md:h-92 xl:h-144 mt-6 w-full lg:h-128">
        <ContatoLocal />
      </div>
      <div className="flex w-full flex-col items-center justify-center pt-10 2xl:pt-32">
        <h1 className="w-full text-center text-white sm:text-2xl md:text-3xl">
          Destaques da semana
        </h1>
      </div>
      <Carousel />
    </section>
  )
}
