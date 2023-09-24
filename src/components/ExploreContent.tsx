export default function ExploreContent(){
  return(
    <>
    <div className="w-full h-64 sm:h-96 bg-gray-200 flex flex-col justify-center items-center mb-12 sm:flex-row sm:justify-between">
      <div className="sm:mx-20 sm:w-96 text-center">
        <p className="text-lg mb-2 text-center">Materializa tus ideas</p>
        <h6 className="w-full text-center font-medium text-xl mb-6 sm:text-2xl">Crea imágenes únicas con el generador basado en IA</h6>
        <button className="bg-blue-600 px-6 py-2 rounded-lg text-white sm:text-center sm:ml-8">Empezar ahora</button>
      </div>
      <img className="sm:w-1/3 sm:mt-10 hidden sm:inline-block" src="https://static-gcp.freepikcompany.com/freepik/svg-image-2023/gam/right.webp" alt="" />
    </div>

    <div className="sm:flex sm:justify-center sm:h-96">
    <div className="w-full sm:h-96 h-64 bg-green-100 flex flex-col justify-center items-start mb-4 pl-6 sm:pl-20">
        <p className="text-xl mb-2 w-9/12 font-semibold sm:text-2xl">Únete a la <span className="text-blue-500">comunidad de artistas</span> de Freepik</p>
        <p className="w-10/12 text-gray-700 mb-6 sm:text-xl">Detrás de cada imagen hay una mente creativa. Tú también puedes diseñar recursos y venderlos en Freepik.</p>
        <button className="bg-blue-600 px-6 py-2 rounded-sm text-white">Vender Contenido</button>
    </div>
    <img className="hidden sm:inline-block sm:w-1/3 bg-green-100" src="https://freepik.cdnpk.net/img/home/community.webp" alt=""/>
    </div>
    </>
  )
}