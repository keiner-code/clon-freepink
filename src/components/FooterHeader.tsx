import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type initialState = {
  content?: boolean;
  information?: boolean;
  legal?: boolean;
  soporte?: boolean;
};
export default function FooterHeader() {
  const [select, dispatch] = useState<initialState>({
    content: false,
    information: false,
    legal: false,
    soporte: false,
  });

  return (
    <>
      <div className="pt-8 pb-8">
        <ul className="sm:flex">

          <li
            className="flex justify-between px-10 sm:flex-col"
            onClick={() => dispatch({ content: !select.content })}
          >
            <span>CONTENIDO</span>
            {select.content ? (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronUp} />
            )}
          

          <div className="ml-10 hidden sm:block sm:ml-0 sm:w-44 ">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
              </ul>
            </div>
          </li>

          {select.content && (
            <div className="ml-10">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
              </ul>
            </div>
          )}

          <li
            className="flex justify-between px-10 mt-10 sm:mt-0 sm:flex-col"
            onClick={() => dispatch({ information: !select.information })}
          >
            <span>INFORMACION</span>
            {select.information ? (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronUp} />
            )}
            <div className="ml-10 hidden sm:block sm:ml-0 sm:w-44">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
              </ul>
            </div>
          </li>

          {select.information && (
            <div className="ml-10">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
              </ul>
            </div>
          )}

          <li
            className="flex justify-between px-10 mt-10 sm:mt-0 sm:flex-col"
            onClick={() => dispatch({ legal: !select.legal })}
          >
            <span>CONTENIDO</span>
            {select.legal ? (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronUp} />
            )}

            <div className="ml-10 hidden sm:block sm:ml-0 sm:w-44">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
              </ul>
            </div>
          </li>
          {select.legal && (
            <div className="ml-10">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
              </ul>
            </div>
          )}

          <li
            className="flex justify-between px-10 mt-10 sm:mt-0 sm:flex-col"
            onClick={() => dispatch({ soporte: !select.soporte })}
          >
            <span>SOPORTE</span>
            {select.soporte ? (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon className="mr-1 sm:hidden" icon={faChevronUp} />
            )}
            <div className="ml-10 hidden sm:block sm:ml-0 sm:w-44">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
              </ul>
            </div>
          </li>

          {select.soporte && (
            <div className="ml-10">
              <ul className="mt-3 text-sm text-neutral-400">
                <li className="mb-3">
                  <a href="http://">Imagenes nuevas</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Contenido Popular</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Tendencia de busqueda</a>
                </li>
                <li className="mb-3">
                  <a href="http://">Blog</a>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
