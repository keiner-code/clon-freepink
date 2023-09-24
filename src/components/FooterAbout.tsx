export default function FooterAbout(){
  return (
    <>
    <hr className="border-gray-600 border-b-0 mx-4 text-center mt-8 hidden sm:block" />

    <div className="flex flex-col items-center text-neutral-400">
        <button className="border-2 px-6 py-2 mt-8">
          Español <i className="ml-4 fa-solid fa-chevron-down mr-1"></i>
        </button>
        <img
          className="h-7 mt-4"
          src="https://freepik.cdnpk.net/img/logos/freepikcompany-footer.svg"
          alt=""
        />
        <p className="mt-5">2010-2023 Freepik Company S.L.</p>
        <p className="mb-8">Todos los derechos reservados.</p>
      </div>
    
    <div className="bg-gray-700 sm:flex sm:justify-between sm:px-4">
        <p className="text-center pt-4 sm:pt-3 text-gray-900 font-medium text-sm">Proyectos de Freepik Company</p>
        <ul className="flex justify-between mx-6 mt-2 pb-4 text-sm text-gray-400">
            <li className="sm:ml-3" ><a href="http://">Freepik</a></li>
            <li className="sm:ml-3" ><a href="http://">FLaticon</a></li>
            <li className="sm:ml-3" ><a href="http://">Slidego</a></li>
            <li className="sm:ml-3" ><a href="http://">Wepik</a></li>
            <li className="sm:ml-3" ><a href="http://">Videvo</a></li>
        </ul>
    </div>
    </>
  )
}