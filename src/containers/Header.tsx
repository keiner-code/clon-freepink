import CarrouselHeader from "@/components/CarrouselHeader"
import Nav from "@/components/Nav"
import TextHeader from "@/components/TextHeader"

type Props = {
    bg: string,
    color: string
    bg_nav: string
}

export default function Header({bg, color, bg_nav}: Props){
  
  return(
    <div className={bg}>
      <Nav bg={bg_nav} color={color}/>
      <TextHeader />
      <CarrouselHeader />
    </div>
  )
}
