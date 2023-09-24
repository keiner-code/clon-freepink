import {
  faArrowDown,
  faArrowUp,
  faSatelliteDish,
  faCrown,
  faPalette,
  faFileZipper,
  faGripHorizontal,
  faGripVertical,
  faBorderNone
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type initialState = {
  type?: boolean;
  crown?: boolean;
  color?: boolean;
  file?: boolean;
  orientation?:boolean;
};

export default function MenuAside() {
  const [state, dispatch] = useState<initialState>({
    type: false,
    crown: false,
    color: false,
    file: false,
    orientation: false
  });
  return (
    <div className="">
      <div className="mb-6">
        <div
          className="sm:cursor-pointer sm:flex sm:w-full sm: justify-between items-center px-6"
          onClick={() => dispatch({ type: !state.type })}
        >
          <div className="sm:flex ">
            <FontAwesomeIcon
              icon={faSatelliteDish}
              className="mr-3 text-xs mt-1.5"
            />
            <p>Tipo</p>
          </div>
          {state.type ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </div>

        {state.type && (
          <div className="sm:mt-2 px-6 sm:font-sans">
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">
              Vectores
            </button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">
              Fotos
            </button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">
              Iconos <span className="text-green-600">Nuevo</span>
            </button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">
              Videos <span className="text-green-600">Nuevo</span>
            </button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">
              PSD
            </button>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div
          className="sm:cursor-pointer sm:flex sm:w-full sm: justify-between items-center px-6"
          onClick={() => dispatch({ crown: !state.crown })}
        >
          <div className="sm:flex ">
            <FontAwesomeIcon icon={faCrown} className="mr-3 text-xs mt-1.5" />
            <p>Licencia</p>
          </div>
          {state.crown ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </div>

        {state.crown && (
          <div className="sm:mt-2 px-6 sm:font-sans">
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">
              Gratuito
            </button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">
              <FontAwesomeIcon icon={faCrown} /> Premiun{" "}
            </button>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div
          className="sm:cursor-pointer sm:flex sm:w-full sm: justify-between items-center px-6"
          onClick={() => dispatch({ color: !state.color })}
        >
          <div className="sm:flex ">
            <FontAwesomeIcon icon={faPalette} className="mr-3 text-xs mt-1.5" />
            <p>Color</p>
          </div>
          {state.color ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </div>

        {state.color && (
          <div className="sm:mt-2 px-6 sm:font-sans pt-3">
            <div className="border text-sm text-center text-gray-400 pb-3 w-5 h-5 rounded-full float-left ml-2 mt-3">X</div>
            <div className="bg-red-400 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-red-700 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-yellow-700 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-pink-500 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-orange-400 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-green-500 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-blue-500 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-blue-700 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-violet-600 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-black w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-gray-500 w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
            <div className="bg-white border w-5 h-5 rounded-full float-left ml-2 mt-3"></div>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div
          className="sm:cursor-pointer sm:flex sm:w-full sm: justify-between items-center px-6"
          onClick={() => dispatch({ file: !state.file })}
        >
          <div className="sm:flex ">
            <FontAwesomeIcon icon={faFileZipper} className="mr-3 text-xs mt-1.5" />
            <p>Tipo de archivo</p>
          </div>
          {state.file ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </div>

        {state.file && (
          <div className="sm:mt-2 px-6 sm:font-sans">
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">JPG</button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">AI</button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">EPS</button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 ">SVG <span className="text-green-600">Nuevo</span></button>
          </div>
        )}
      </div>

      <div className="mb-6">
        <div
          className="sm:cursor-pointer sm:flex sm:w-full sm: justify-between items-center px-6"
          onClick={() => dispatch({ orientation: !state.orientation })}
        >
          <div className="sm:flex ">
            <FontAwesomeIcon icon={faFileZipper} className="mr-3 text-xs mt-1.5" />
            <p>Orientación</p>
          </div>
          {state.orientation ? (
            <FontAwesomeIcon icon={faArrowUp} />
          ) : (
            <FontAwesomeIcon icon={faArrowDown} />
          )}
        </div>

        {state.orientation && (
          <div className="sm:mt-2 px-6 sm:font-sans">
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 "> <FontAwesomeIcon icon={faGripHorizontal} className="mr-3 text-xs mt-1.5" /> Orizontal</button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 "><FontAwesomeIcon icon={faGripVertical} className="mr-3 text-xs mt-1.5" />Vertical</button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 "><FontAwesomeIcon icon={faBorderNone} className="mr-3 text-xs mt-1.5" />Cuadrada</button>
            <button className="border border-gray-300 rounded-lg px-2 py-1 mt-3 mr-2 "><FontAwesomeIcon icon={faGripHorizontal} className="mr-3 text-xs mt-1.5" />Panoramica</button>
          </div>
        )}
      </div>
    </div>
  );
}
