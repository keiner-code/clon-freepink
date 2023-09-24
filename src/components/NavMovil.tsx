const styles = {fontSize: '.7rem',paddingBlockEnd: '.1rem', paddingInlineStart: '.3rem', paddingInlineEnd: '.3rem'};
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import { useDispatch} from 'react-redux'
import {changeShowMenuDevice} from '@/features/showMenuSlice'
import Link from 'next/link';

type Select = {
  diseño?: boolean,
  fotos?: boolean,
  videos?: boolean,
  mas?: boolean
}

export default function NavMovil(){
  const dispatch = useDispatch();
  const [select, setSelect] = useState<Select>({
    diseño: false,
    fotos: false,
    videos: false,
    mas: false
  });

  return(
    <div className="bg-neutral-950 bg-opacity-95 scroll-auto h-screen">
      <div>
        <div 
          className="text-gray-200 text-lg ml-6 pt-2"
          onClick={() => dispatch(changeShowMenuDevice())}
        >X</div>
        <nav className="ml-6 text-gray-400">
          <ul>
            <li className="mt-5 font-semibold"> <Link href="Vectores">Vectores</Link></li>
            <li className="mt-5 font-semibold"> <a href="http://">Fotos</a></li>
            <li className="mt-5 font-semibold"> <a href="http://">Videos </a>
            <span style={styles} className="text-xs text-black ml-2 bg-blue-200 rounded-sm font-semibold">nuevo</span></li>
            <li className="mt-5 font-semibold"> <a href="http://">PSD</a></li>
            <li className="mt-5 font-semibold text-gray-600">CATEGORIAS</li>

            <li onClick={()=> setSelect({diseño: !select.diseño})} className="mt-5 flex justify-between">
            <div >Diseños</div>
              {select.diseño ? <FontAwesomeIcon className='mr-4' icon={faCaretUp} /> : <FontAwesomeIcon className='mr-4' icon={faCaretDown} />}
            </li>

            {
              select.diseño && 
              <div style={{marginInlineStart: '-1.5rem'}} className='bg-gray-800'>
                <ul className="ml-10">
                  <li className='mt-5'>Fondos</li>
                  <li className='mt-5 pb-2' >Texturas</li>
                </ul>
              </div>
              
            }

            <li onClick={()=> setSelect({fotos: !select.fotos})} className="mt-5 flex justify-between">
             <div>Fotos</div>
             {select.fotos ? <FontAwesomeIcon className='mr-4' icon={faCaretUp} /> : <FontAwesomeIcon className='mr-4' icon={faCaretDown} />}
              </li>

              {
              select.fotos && 
              <div style={{marginInlineStart: '-1.5rem'}} className='bg-gray-800'>
                <ul className="ml-10">
                  <li className='mt-5'>Marketing y empresa</li>
                  <li className='mt-5 pb-2' >Vida, salus y bienestar</li>
                </ul>
              </div>
              
            }

            <li onClick={()=> setSelect({videos: !select.videos})} className="mt-5 flex justify-between">
             <div>Videos</div>
             {select.videos ? <FontAwesomeIcon className='mr-4' icon={faCaretUp} /> : <FontAwesomeIcon className='mr-4' icon={faCaretDown} />}
              </li>

              {
              select.videos && 
              <div style={{marginInlineStart: '-1.5rem'}} className='bg-gray-800'>
                <ul className="ml-10">
                  <li className='mt-5'>Fondos y otros</li>
                  <li className='mt-5 pb-2' >Naturaleza</li>
                </ul>
              </div>
              
            }

            <li onClick={()=> setSelect({mas: !select.mas})} className="mt-5 flex justify-between">
             <div>Más</div>
             {select.mas ? <FontAwesomeIcon className='mr-4' icon={faCaretUp} /> : <FontAwesomeIcon className='mr-4' icon={faCaretDown} />}
              </li>

              {
              select.mas && 
              <div style={{marginInlineStart: '-1.5rem'}} className='bg-gray-800'>
                <ul className="ml-10">
                <li className='mt-5 text-gray-600'>PROYECTOS</li>
                  <li className='mt-5'>Flaticon</li>
                  <li className='mt-5 pb-2' >Slidesgo</li>
                  <li className='mt-5 pb-2' >Storyset</li>
                </ul>
                <ul>
                  <li className='mt-5 ml-10 text-gray-600'>HERRAMIENTAS</li>
                  <li className='mt-5 ml-10'>Colecciones</li></ul>
              </div>
              
            }

            <li className="mt-5 font-semibold">Vender contenido</li>
            <li className="mt-5 font-semibold mb-5">Precios</li>

         </ul>
        </nav>
      </div>
    </div>
  )
}