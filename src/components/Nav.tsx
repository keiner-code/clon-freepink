import NavMovil from "@/components/NavMovil"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {useSelector, useDispatch} from 'react-redux'
import {changeShowMenuDevice} from '@/features/showMenuSlice'
import type { RootState } from "@/app/store";

type Props = {
  bg: string,
  color: string
}

export default function Nav({bg,color}: Props){
  
  const state = useSelector((state: RootState) => state.menu.menuMovil)
  const dispatch = useDispatch()

  return (
    <div className={bg}>
      <nav className="sm:h-12 sm:pt-1">
        <div className="w-full flex justify-between items-center">
          <FontAwesomeIcon 
            className="ml-4 mt-2 text-2xl text-white sm:hidden" 
            icon={faBars} 
            onClick={() => dispatch(changeShowMenuDevice())}
          />
          <div className="mr-4 text-white font-semibold mt-2 text-sm sm:ml-4 hidden sm:block">
            <Link className={`mr-2 sm:mr-5 hidden sm:inline-block ${color}`} href="/Vectores">Vectores</Link>
            <Link className="mr-2 sm:mr-5 hidden sm:inline-block" href="/Fotos">Fotos</Link>
            {/* 
            <a className="mr-2 sm:mr-5 hidden sm:inline-block" href="http://">Videos</a>
            <a className="mr-2 sm:mr-5 hidden sm:inline-block" href="http://">PSD</a>
            <a className="mr-2 sm:mr-5 hidden sm:inline-block" href="http://">Categorias <FontAwesomeIcon icon={faChevronDown}/></a>
            <a className="mr-2 sm:mr-5 hidden sm:inline-block" href="http://">Mas <FontAwesomeIcon icon={faChevronDown}/></a> */}
          </div>

          <div className="mr-4 text-white font-semibold mt-2 text-sm">
            <a className={`mr-2 sm:mr-5 hidden sm:inline-block ${color}`} href="http://">Vender contenido</a>
            <a className="mr-2 sm:mr-5 hidden sm:inline-block sm:text-yellow-500" href="http://">Precios</a>
            <a className={`mr-2 sm:mr-5 ${color}`} href="http://">Iniciar sessión</a>
            <a className={`border px-2 py-0.5 rounded-sm ${color}`} href="http://">Registrarse</a>
          </div>
        </div>
      </nav>
      <div className="fixed top-0 w-full">
      {state && <NavMovil />}
      </div>
    </div>
  )
}