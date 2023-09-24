import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function OptionContent() {
  return (
    <>
      <div className="pt-10 text-center flex flex-col items-center pb-5">
        <p className="text-xl font-medium w-10/12 text-gray-600 sm:text-3xl">
          La mejor opción para{" "}
          <strong className="text-blue-500">gente creativa como tú</strong>
        </p>
        <p className="text-sm w-10/12 text-gray-600 pt-2 sm:text-xl">
          ¿Buscas fotografías o diseños? No importa, en Freepik tenemos de todo.{" "}
        </p>
      </div>

      <div className="pb-6 sm:flex sm:items-center sm:ml-10">
        <div className="sm:block">
        <div className="flex ml-4 mb-6">
          <FontAwesomeIcon
            className="bg-blue-400 bg-opacity-30 mr-4  rounded-lg text-lg text-center p-3 text-blue-500"
            icon={faStar}
          />
          <div>
            <p className="font-medium w-3/4 text-gray-800">
              Contenido de stock de gran calidad
            </p>
            <p className="text-sm w-10/12 mt-2 text-gray-500">
              Descarga imágenes de gran calidad que llamarán la atención de
              todos y le darán un toque profesional a tus proyectos.
            </p>
          </div>
        </div>

        <div className="flex ml-4 mb-6">
          <FontAwesomeIcon
            className="bg-blue-400 bg-opacity-30 mr-4 p-3.5 rounded-lg text-lg text-center pt-2 text-blue-500"
            icon={faThumbsUp}
          />
          <div>
            <p className="font-medium w-3/4 text-gray-800">
              Imágenes listas para ser utilizadas
            </p>
            <p className="text-sm w-10/12 mt-2 text-gray-500">
              Accede a miles de imágenes y diseños que podrás usar directamente
              para acabar tus proyectos más rápido.
            </p>
          </div>
        </div>

        <div className="flex ml-4 mb-6">
          <FontAwesomeIcon
            className="bg-blue-400 bg-opacity-30 mr-4 p-3.5 rounded-lg text-lg text-center pt-2 text-blue-500"
            icon={faMagnifyingGlass}
          />
          <div>
            <p className="font-medium w-3/4 text-gray-800">
              Resultados de búsqueda garantizados
            </p>
            <p className="text-sm w-10/12 mt-2 text-gray-500">
              Encuentra la imagen que mejor encaje con tu proyecto, sea cual sea
              el estilo que estés buscando.
            </p>
          </div>
        </div>

        <div className="flex ml-4 mb-6">
          <FontAwesomeIcon
            className="bg-blue-400 bg-opacity-30 mr-4 p-3.5 rounded-lg text-lg text-center pt-2 text-blue-500"
            icon={faThumbsUp}
          />
          <div>
            <p className="font-medium w-3/4 text-gray-800">
              Imágenes listas para ser utilizadas
            </p>
            <p className="text-sm w-10/12 mt-2 text-gray-500">
              Accede a miles de imágenes y diseños que podrás usar directamente
              para acabar tus proyectos más rápido.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden sm:block sm:w-3/6">
        <img src="https://freepik.cdnpk.net/img/home/resources.webp" alt=""/>
      </div>

      </div>
    </>
  );
}
