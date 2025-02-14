
const ContactForm = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto mt-8">
      <form
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-4">
          <div>
            <label
              className="block text-sm text-slate-800 font-medium mb-1"
              htmlFor="username"
            >
              Nombre
            </label>
            <input
              className="w-full p-2 rounded-md"
              id="username"
              name="username"
              placeholder="Juan Perez"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1 text-slate-800"
              htmlFor="email"
            >
              Correo Electrónico
            </label>
            <input
              className="w-full p-2 rounded-md"
              id="email"
              name="email"
              placeholder="juan@gmail.com"
              type="email"
              required
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1 text-slate-800"
              htmlFor="phone"
            >
              Teléfono
            </label>
            <input
              className="w-full p-2 rounded-md"
              id="phone"
              name="phone"
              placeholder="1122334455"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <label
              className="block text-sm font-medium mb-1 text-slate-800"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="w-full rounded-md p-4 h-32"
              id="msg"
              name="msg"
              placeholder="Escribe tu consulta"
              required
            />
          </div>
          <button
            type="submit"
            className="w-fit bg-emerald-600 hover:bg-esmerald-800 border hover:border-white hover:border-2 p-2 px-8 text-white rounded-md"
          >
            Consultar | Reservar
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm