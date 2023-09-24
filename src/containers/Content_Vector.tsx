import Search from "@/components/Search";
import logo from "@/assets/logo.png";
import icon from "@/assets/icon.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ImageText from "@/components/ImageText";
import CarrouselFooter from "@/components/CarrouselFooter"; 

export default function Content_Vector(){
  return (
    <>
      <div className="flex sm:items-center mt-3">
        <div className="hidden sm:block">
          <Link href="/">
            <Image className="sm:w-30 sm:h-14 sm:t-2" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center sm:hidden">
          <Link href="/">
            <Image
              className="sm:w-30 sm:h-14 sm:pt-2 ml-3"
              src={icon}
              alt="logo"
            />
          </Link>
        </div>
        <div className="sm:w-11/12 sm:px-4 ml-4 flex">
          <Search
            styles={{
              width: "sm:w-full ",
              bg: "bg-slate-200",
              hidden: "absolute left-0",
              mt: "mt-0",
              sm_mt:
                "sm:mt-2 border border-gray-300 w-12/12 bg-slate-200 sm:w-full",
              sm_h: "sm:h-11 h-12 ",
              w_input: "w-9/12",
              m_img: "ml-1.5",
              s_opt:
                "text-black border border-gray-300 rounded-md flex items-center h-12",
              s_opt_v:
                "hidden sm:flex sm:w-28 sm:pl-6 sm:border-none sm:bg-blue-200 sm:opacity-50 sm:cursor-pointer",
            }}
            props={{ searchTitle: "Buscar vectores" }}
          />
          <button className="sm:hidden border-2 border-slate-200 ml-2 px-3">
            <FontAwesomeIcon icon={faArrowDownWideShort} />
          </button>
        </div>
      </div>
      <div className="mt-28">
        <ImageText />
      </div>
      <div className="hidden mx-3 mt-10">
        <CarrouselFooter />
      </div>
    </>
  )
}