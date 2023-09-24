export default function CarrouselHeader() {
  return (
    <>
      <div className="flex justify-center gap-8 mt-2 pb-8">
        <div className="">
          <div className="outline outline-offset-2 outline-3 outline-blue-400 rounded-3xl">
          <img
            className="w-36 h-20 rounded-3xl transition ease-in-out delay-150 hover:-translate-1 hover:scale-110 duration-300"
            src="https://img.freepik.com/free-photo/_23-2149543516.jpg?size=240&ext=jpg"
            alt=""
            />
            </div>
          <p className="text-center mt-3 sm:text-white">Vectores</p>
        </div>
        <div className="">
          <img
            className="w-36 h-20 outline outline-offset-2 outline-3 outline-blue-400 rounded-3xl"
            src="https://img.freepik.com/free-photo/_23-2148037174.jpg?size=240&ext=jpg"
            alt=""
          />
          <p className="text-center mt-3 sm:text-white">Fotos</p>
        </div>
        
      </div>

      <div className="flex pl-4 text-sm pt-3 pb-3 font-medium bg-green-200 sm:text-center sm:justify-center sm:items-center">
        <p className="w-1/2 text-gray-600 sm:w-2/6">
          Crea una cuenta para obtener mas descargas gratuitas
        </p>
        <div className="w-1/2 text-center pt-3 sm:w-1/6 sm:pb-2">
          <button className="text-center bg-blue-600 px-4 py-2 text-white rounded-sm">
            Registrarse gratis
          </button>
        </div>
      </div>
    </>
  );
}
