import icon from "@/assets/icon.png";
import Search from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
export default function TextHeader() {
  return (
    <div className="text-white pt-5 pb-10">
      <div className="flex justify-center sm:mt-10">
        <Link href="/" className="flex">
          <Image src={icon} alt="icono"  />
          <p className="text-3xl font-semibold">freepik</p>
        </Link>
      </div>
      <h1 className="text-center text-2xl font-semibold mb-4 mt-4 pl-4 sm:text-4xl sm:font-semibold">
        Todas las imágenes que necesitas en un solo lugar
      </h1>
      <p className="text-center text-sm pl-2 ml-8 mr-8 sm:text-xl sm:font-medium">
        Encuentra y descarga fotos, vectores, videos y mockups de la mejor
        calidad
      </p>
      <Search
        styles={{
          width: "sm:w-4/6",
          bg: "sm:bg-white",
          hidden: "",
          mt: "mt-6",
          sm_mt: "sm:mt-8",
          sm_h: "sm:h-14",
          w_input: "w-3/4",
          m_img: "ml-3",
          s_opt: "text-white bg-slate-300",
          s_opt_v: ""
        }}
        props={{ searchTitle: "Buscar en todos los recursos" }}
      />
    </div>
  );
}
