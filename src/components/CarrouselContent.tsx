export default  function CarrouselContent(){
  return (
    <>
    <div className="pt-10 text-center flex flex-col items-center pb-5 sm:justify-start">
        <p className="text-xl font-medium w-11/12 text-gray-600 sm:text-start sm:text-3xl sm:w-11/12">Saca la creatividad que hay en tu interior</p>
        <p className="text-sm w-11/12 text-gray-600 pt-2 sm:w-11/12 sm:text-start sm:text-xl">Inspirate con las colecciones que hemos selecionados para ayudarte a sacar el maximo partido a tus proyectos </p>
    </div>

    <div className="p-3 overflow-x-auto pb-10 sm:w-full sm:overflow-hidden">
        <div className="flex sm:w-full w-[200%] h-56 ml-4 sm:h-80 ">

            <div className="relative w-11/12 sm:w-72 sm:h-auto">
                <div className="bg-gray-400 rounded-lg absolute rotate-6 w-48 h-56 sm:h-80 sm:w-full"></div>
                <img className="rounded-lg absolute w-48 h-56 sm:w-full sm:h-full" src="https://img.freepik.com/fotos-premium/chica-lazo-rosa-parada-frente-paisaje-urbano_839169-7374.jpg?size=626&ext=jpg" alt="img1" />
                <p className="relative top-64 left-4 text-white">Videos de estudiantes</p>
            </div>

            <div className="relative w-11/12 sm:w-72 sm:h-auto sm:ml-8">
                <div className="bg-gray-400 rounded-lg absolute rotate-6 w-48 h-56 sm:h-80 sm:w-full"></div>
                <img className="rounded-lg absolute w-48 h-56 sm:w-full sm:h-full" src="https://img.freepik.com/vector-gratis/ilustracion-plana-dia-amistad-amigas_23-2149443935.jpg?size=626&ext=jpg" alt="img2" />
                <p className="relative top-64 left-4 text-white">Dia de la amistad</p>
            </div>

            <div className="mr-6 relative w-11/12 sm:w-72 sm:h-auto sm:ml-8">
                <div className="bg-gray-400 rounded-lg absolute rotate-6 w-48 h-56 sm:h-80 sm:w-full"></div>
                <img className="rounded-lg absolute w-48 h-56 sm:w-full sm:h-full" src="https://img.freepik.com/fotos-premium/mosca-sobre-…mbuesa-oscuridad_900101-3878.jpg?size=626&ext=jpg" alt="img2" />
                <p className="relative top-64 left-4 text-white">Fotos de abuelo</p>
            </div>

            <div className="relative w-11/12 sm:w-72 sm:h-auto sm:ml-4 hidden sm:block">
                <div className="bg-gray-400 rounded-lg absolute rotate-6 w-48 h-56 sm:h-80 sm:w-full"></div>
                <img className="rounded-lg absolute w-48 h-56 sm:w-full sm:h-full" src="https://img.freepik.com/vector-gratis/ilustracion-plana-dia-amistad-amigas_23-2149443935.jpg?size=626&ext=jpg" alt="img2" />
                <p className="relative top-64 left-4 text-white">Dia de la amistad</p>
            </div>
        </div>
    </div>
    </>
  )
}