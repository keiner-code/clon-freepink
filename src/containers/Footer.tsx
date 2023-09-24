import FooterAbout from "@/components/FooterAbout";
import FooterHeader from "@/components/FooterHeader";
import FooterSocial from "@/components/FooterSocial";

export default function Footer(){
  return (
    <div className="bg-gray-900 mt-12 text-white w-full">
      <div className="sm:flex">
      <FooterHeader />
      <FooterSocial />
      </div>
      <FooterAbout />
    </div>
  )
}