import whats from '../../assets/whats.png'
import insta from '../../assets/insta.png'

function Contato_Local(){
    return(
      <section className="w-full flex flex-col lg:flex-row justify-around items-center lg:items-start mt-8 space-y-5 lg:space-y-0 lg:space-x-5">
      <div className="w-11/12 md:w-2/3 lg:w-1/4 rounded-lg mt-5 p-3">
        <h3 className="text-white font-FontePadrao font-bold w-full lg:w-80">Venha nos visitar!</h3>
        <p className="text-white text-base pt-5 text-left w-full lg:w-80">
          Endereço: R. Rishin Matsuda, 508
          <br />
          Vila Santa Catarina
          <br />
          CEP: 04371-000
          <br />
          São Paulo - SP
          <br />
        </p>
        <div className="flex flex-row w-full lg:w-40 pt-5 gap-2 justify-center lg:justify-start">
          <a href='https://wa.me/5511977468366'>
            <button className="bg-transparent w-10 h-10 border-none" type="button">
              <img src={whats} alt="WhatsApp" />
            </button>
          </a>
          <a href='https://www.instagram.com/silvestre_lanchonete?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
            <button className="bg-transparent w-10 h-10 border-none" type="button">
              <img src={insta} alt="Instagram" />
            </button>
          </a>
        </div>
      </div>
      <div className="w-11/12 md:w-2/3 lg:w-1/2 h-full md:h-96 lg:h-auto p-4 mb-5">
        <iframe
          title="Meu Iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.766356433943!2d-46.6587291!3d-23.648536999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bc79c46996b%3A0x3d9bcb8e22665dc2!2sSilvestre%20Lanchonete%20e%20Hambugueria!5e0!3m2!1spt-BR!2sbr!4v1713741921956!5m2!1spt-BR!2sbr"
          width="100%"
          height="500"
          className="rounded-lg">
        </iframe>
      </div>
    </section>

    )
}
export default Contato_Local