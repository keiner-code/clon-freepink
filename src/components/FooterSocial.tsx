export default function FooterSocial() {
  return (
    <>
      <div className="w-full text-center sm:mt-8">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <p className="text-center font-semibold text-sm mb-2">REDES SOCIALES</p>
        <div className="text-center">
          <i className=" bg-blue-700 p-2.5 rounded-sm ml-1 fa-brands fa-facebook"></i>
          <i className=" bg-blue-400 p-2.5 rounded-sm ml-1 fa-brands fa-twitter"></i>
          <i className=" bg-red-700 p-2.5 rounded-sm ml-1 fa-brands fa-pinterest"></i>
          <i className=" bg-red-500 p-2.5 rounded-sm ml-1 fa-brands fa-instagram"></i>
          <i className=" bg-red-700 p-2.5 rounded-sm ml-1 fa-brands fa-youtube"></i>
        </div>
        <p className="text-sm text-center mt-7 text-gray-400">
          Recibe recursos disponible en tu correo
        </p>
        <button className="mt-6 bg-blue-600 rounded-sm px-6 py-2">
          Registrarse
        </button>
        <hr className="border-gray-600 border-b-0 mx-4 text-center mt-8 sm:hidden" />
      </div>
    </>
  );
}
