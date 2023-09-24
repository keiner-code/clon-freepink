import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CarrouselFooter() {
  return (
    <div className="bg-gray-200 p-5 rounded-lg">
      <div className="flex h-28 gap-2">
        <img
          className="w-64"
          src="https://t3.ftcdn.net/jpg/06/24/69/44/240_F_624694458_9bD95Bt747TO9qHkp5WtMIQ4KNXYR3zA.jpg"
          alt=""
        />
        <img
          className=""
          src="https://t4.ftcdn.net/jpg/06/25/96/67/240_F_625966785_2ADaI5MgHa3uukcELijwkS5UJQDMe4iE.jpg"
          alt=""
        />
        <img
          className=""
          src="https://t4.ftcdn.net/jpg/06/25/96/67/240_F_625966785_2ADaI5MgHa3uukcELijwkS5UJQDMe4iE.jpg"
          alt=""
        />
        <img
          className=""
          src="https://t4.ftcdn.net/jpg/05/98/92/47/240_F_598924768_IAgE8QcqPGOiPz2n2rCo3aetsQcjqpIA.jpg"
          alt=""
        />
        <img
          className=""
          src="https://t4.ftcdn.net/jpg/05/98/92/47/240_F_598924771_u3kz9aKzvlJek7dh39CrXVhfF8PO8Lrt.jpg"
          alt=""
        />
        <img
          className=""
          src="https://t4.ftcdn.net/jpg/05/98/92/47/240_F_598924772_uOFaIRJ1qwviHyWna3rhKnOcgxmSlQr1.jpg"
          alt=""
        />
        <img
          className=""
          src="https://t4.ftcdn.net/jpg/05/98/92/47/240_F_598924762_TbZCE8UJrJYPJAVzray6bcr14k3krAsT.jpg"
          alt=""
        />
        <img
          src="https://t3.ftcdn.net/jpg/05/98/90/54/240_F_598905497_GkrKt6phA5Wh5PZmiy3vjeQQrcMjoLzI.jpg"
          alt=""
        />
      </div>
      <div className="flex justify-between">
        <div className="mt-4 ml-3">
          <p className="font-medium text-sm">
            Resultados patrocinados por <span className="bg-black text-white px-1 rounded-md mr-2">St</span>
            <strong>Adobe Stock</strong>
            <a className="ml-5 text-blue-700" href="http://">Consigue 10 vectores gratis</a>
          </p>
        </div>
        <div className="mt-3">
          <a className="mr-5 text-blue-700" href="">
            Mostrar más <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
}
