import {
  faMagnifyingGlass,
  faImages,
  faChevronDown,
  faImage,
  faTruckMoving,
  faRadiation,
} from "@fortawesome/free-solid-svg-icons";
import { faSortNumericUp,faArrowDownWideShort} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { changeShowMenuAside } from "@/features/showMenuSlice";
type Props = {
  styles: {
    width: string;
    bg: string;
    hidden: string;
    mt: string;
    sm_mt: string;
    sm_h: string;
    w_input: string;
    m_img: string;
    s_opt: string;
    s_opt_v: string
  };
  props: {
    searchTitle: string;
  };
};
export default function Search({
  styles: { width, bg, hidden, mt, sm_mt, sm_h, w_input, m_img, s_opt, s_opt_v },
  props: { searchTitle },
}: Props) {
  const dispatch = useDispatch();
  return (
    <div className={`${sm_mt}`}>
      <div
        className={`${mt} h-10 ${sm_h} rounded-sm bg-white sm:bg-transparent sm:text-black w-11/12 m-auto ${width} sm:flex sm:shadow-sm sm:items-center ${bg}`}
      >
        <div
          className={`hidden sm:rounded-s-sm sm:flex sm:justify-between sm:items-center sm:px-2 sm:border-r-2 sm:border-gray-300 sm:w-1/5 ${sm_h} sm:h-9`}
        >
          <FontAwesomeIcon icon={faSortNumericUp} /> <span>Recursos</span>{" "}
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
        <input
          className={`h-10 ${w_input} pl-4 text-gray-600 ${sm_h} ${bg}`}
          type="text"
          placeholder={searchTitle}
          id=""
        />
        <button
          className={`border-gray-300 sm:border-gray-300 border-e-2  ${sm_h} sm:rounded-e-sm ${bg} sm:h-9`}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-600 mr-3 sm:ml-6"
          />
        </button>
        <button
          className={`sm:border sm:ml-2 ${sm_h} sm:w-1/4 sm:px-1 sm:text-sm sm:rounded-sm ${bg}`}
        >
          <FontAwesomeIcon
            className={`text-gray-600 ${m_img} text-xl`}
            icon={faImages}
          />{" "}
          <span className="hidden sm:inline-block">Buscar por imagen</span>
        </button>
      </div>
      <div className={`flex mt-5 ml-4 sm:justify-center ${hidden}`}>

      <p onClick={() => dispatch(changeShowMenuAside())}
          className={`${s_opt} font-semibold text-sm pl-1 pt-0.5 rounded-sm bg-opacity-40 mr-2 ${s_opt_v}`}
        >
          <FontAwesomeIcon className="text-xs pr-1 p-0.5" icon={faArrowDownWideShort} />
          Filtros
        </p>

        <p
          className={`${s_opt} font-semibold text-sm pl-1 pr-1 pt-0.5 rounded-sm bg-opacity-40 mr-2`}
        >
          <FontAwesomeIcon className="text-xs pr-1 p-0.5" icon={faImage} />
          Dibujos para colorear
        </p>
        <p
          className={`${s_opt} font-semibold text-sm pl-1 pr-1 pt-0.5 rounded-sm bg-opacity-40 mr-2`}
        >
          <FontAwesomeIcon className="text-xs pr-1" icon={faTruckMoving} />
          Graduacion
        </p>
        <p
          className={`${s_opt} font-semibold text-sm pl-1 pr-1 pt-0.5 rounded-sm bg-opacity-40 mr-2`}
        >
          <FontAwesomeIcon icon={faRadiation} className="text-xs pr-1" />
          Barbie
        </p>
      </div>
    </div>
  );
}
