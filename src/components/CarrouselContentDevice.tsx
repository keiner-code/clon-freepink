export default function CarrouselContentDevice(){
  return (
    <div className=" gap-4 h-44 p-3 overflow-x-auto ">
        <div className="flex w-[200%]">
            <div className="ml-4 mr-2 relative w-11/12">
                <img className="rounded-lg absolute" src="https://img.freepik.com/foto-gratis/close-up-happy-family-at-home_23-2148962405.jpg?size=626&ext=jpg" alt="img1" />
                <p className="relative top-24 left-4 text-white">Videos de estudiantes</p>
            </div>
            <div className="ml-4 mr-2 relative w-11/12">
                <img className="rounded-lg absolute" src="https://img.freepik.com/foto-gratis/beautiful-afro-culture-women_52683-107119.jpg?t=st=1689621617~exp=1689622217~hmac=d8b732ea7ef6b4058123165dbd825b6eb7f0dc190e85f1f4c52ed3269d8f8416" alt="img2" />
                <p className="relative top-24 left-4 text-white">Dia de la amistad</p>
            </div>
            <div className="ml-4 mr-2 relative w-11/12">
                <img className="rounded-lg absolute" src="https://img.freepik.com/foto-gratis/close-up-happy-family-at-home_23-2148962405.jpg?size=626&ext=jpg" alt="img2" />
                <p className="relative top-24 left-4 text-white">Fotos de abuelo</p>
            </div>
        </div>
    </div>
  )
}