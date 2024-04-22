import { Footer } from './components/footer';
import { Header } from './components/header';
import { Menu } from './components/menu';

export function App() {

  return (
    <div className='mx-auto flex flex-col gap-5'>
       <Header />
       <Menu />
       <Footer />
    </div>
  )
}
