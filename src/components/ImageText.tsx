import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight, faCheck, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import MenuAside from "./MenuAside";


export default function ImageText(){
  const [option,setOption] = useState<boolean>(false);
  const [optionValue, setOptionValue] = useState<string>('Populares');
  const state = useSelector((state: RootState) => state.menu.menuAside);


  const handlerOption = (value: string) => {
    setOptionValue(value);
    setOption(false);
  }
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-medium mb-10">Descubre los vectores gratuitos más descargado</h1>
      
      <div className="hidden sm:flex sm:justify-end sm:w-full sm:mr-14">
        <div className="sm:flex sm:flex-col relative">
          <p className="text-gray-500">Ordenar por: <strong className="ml-2 sm:cursor-pointer" onClick={()=> setOption(!option)}>{optionValue} <FontAwesomeIcon className="ml-1 text-sm" icon={faArrowDown} /></strong></p>

          {option && <div className="ml-6 rounded-lg shadow-2xl bg-gray-100 absolute top-7">
            <p className="sm:px-5 sm:my-1 cursor-pointer hover:bg-gray-300" onClick={() => handlerOption('Populares')}><FontAwesomeIcon icon={faCheck} className="mr-3"/>Populares</p>
            <p className="sm:px-5 sm:my-1 cursor-pointer hover:bg-gray-300" onClick={() => handlerOption('Reciente')}><FontAwesomeIcon icon={faCheck} className="mr-3"/>Reciente</p>
          </div>}
        </div>
      </div>
      <div className="flex justify-center items-center flex-col sm:w-full sm:flex-row sm:items-start">
        { state && <div className="sm:w-2/6 hidden sm:block"> <MenuAside /></div>}
        <div className="sm:w-2/6">
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/vector-iconos-redes-sociales-logotipos-facebook-instagram-twitter-tiktok-youtube_53876-126273.jpg?size=338&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img1"/>
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/forma-puntos-blancos-negros-abstractos-fondo-semitono_314614-1558.jpg?size=338&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img3"/>
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/vector-iconos-redes-sociales-logotipos-facebook-instagram-twitter-tiktok-youtube_53876-126271.jpg?size=338&ext=jpg&ga=GA1.1.204621171.1689452681" alt="img7" />
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/ilustracion-libro-colorear-kawaii-dibujado-mano_23-2149726544.jpg?size=338&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img10" />
        </div>
        <div className="sm:w-2/6">
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-premium/plantilla-diseno-vectores-iconos-corazon-amor_471203-1176.jpg?size=338&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img2"/>
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/conjunto-diferentes-formas-corazon_1308-63125.jpg?size=626&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img9" />
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-premium/conjunto-plano-silueta-sello-varias-formas-corazon-rojo-amor-san-valentin-relacion-romantica-boda-senal_596736-60.jpg?size=626&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img8" />
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/conjunto-diferentes-formas-corazon_1308-63125.jpg?size=626&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img9" />
        </div>
        <div className="sm:w-2/6">
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/diseno-plano-flores-hojas-lineales_23-2149074732.jpg?size=338&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img5" />
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/ubicacion-multiples-colores_78370-2030.jpg?size=338&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img4"/>
        <img className="mb-3 sm:w-full" src="https://img.freepik.com/vector-gratis/logotipo-caridad-manos-apoyando-ilustracion-vector-diseno-plano-icono-corazon_53876-136266.jpg?size=338&ext=jpg&ga=GA1.2.204621171.1689452681" alt="img6" />
        </div>

      </div>
      <button className="sm:hidden py-3 px-4 rounded-lg bg-blue-600"><FontAwesomeIcon className="text-white" icon={faArrowRight} /></button>
      <button className="hidden sm:block py-3 px-4 rounded-lg bg-blue-600 text-white">Página suiguiente <FontAwesomeIcon className="text-white ml-1" icon={faArrowRight} /></button>
    </div>
  )
}