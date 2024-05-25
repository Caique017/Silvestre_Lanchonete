import whats from '../../assets/whats.png'
import insta from '../../assets/insta.png'

function ContatoLocal() {
  return (
    <section className="mt-8 flex w-full flex-col items-center justify-around space-y-5 lg:flex-row lg:items-start lg:space-x-5 lg:space-y-0">
      <div className="mt-5 w-11/12 rounded-lg p-3 md:w-2/3 lg:w-1/4">
        <h3 className="font-FontePadrao w-full font-bold text-white lg:w-80 2xl:text-2xl">
          Venha nos visitar!
        </h3>
        <p className="w-full pt-5 text-left text-base text-white lg:w-80 2xl:w-96 2xl:text-2xl">
          Endereço: R. Rishin Matsuda, 508
          <br />
          Vila Santa Catarina
          <br />
          CEP: 04371-000
          <br />
          São Paulo - SP
          <br />
        </p>
        <div className="flex w-full flex-row justify-center gap-5 pt-5 lg:w-40 lg:justify-start">
          <a href="https://wa.me/5511977468366">
            <button
              className="h-10 w-10 border-none bg-transparent"
              type="button"
            >
              <img src={whats} alt="WhatsApp" />
            </button>
          </a>
          <a href="https://www.instagram.com/silvestre_lanchonete?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <button
              className="h-10 w-10 border-none bg-transparent"
              type="button"
            >
              <img src={insta} alt="Instagram" />
            </button>
          </a>
        </div>
      </div>
      <div className="mb-5 h-full w-11/12 p-4 md:h-96 md:w-2/3 lg:h-auto lg:w-1/2">
        <iframe
          title="Meu Iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.766356433943!2d-46.6587291!3d-23.648536999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bc79c46996b%3A0x3d9bcb8e22665dc2!2sSilvestre%20Lanchonete%20e%20Hambugueria!5e0!3m2!1spt-BR!2sbr!4v1713741921956!5m2!1spt-BR!2sbr"
          width="100%"
          height="500"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  )
}

export default ContatoLocal
