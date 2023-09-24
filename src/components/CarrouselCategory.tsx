import CarrouselContentDevice from "./CarrouselContentDevice";
import PhotoContent from "./PhotoContent";

export default function CarrouselCategory(){
  return (
    <>
    <div className="flex flex-col items-center pt-8 w-full pb-6 sm:pt-12">
        <p className="w-10/12 text-center text-xl text-gray-800 font-medium pb-3 sm:text-3xl sm:font-semibold"><strong className="text-blue-500">Explora</strong> las categorias más populares en Frepik</p>
        <p className="w-11/12 text-sm text-center text-gray-600 sm:text-lg">dale un toque profesional y actual a tus proyectos con el contenido que es tendencia en Freepik</p>
    </div>
    <div className="sm:hidden"><CarrouselContentDevice /></div>
    <div className="hidden sm:block "><PhotoContent /></div>
    </>
  )
}