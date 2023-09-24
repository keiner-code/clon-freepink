import Nav from "@/components/Nav";
import Footer from "@/containers/Footer";
import Content_Vector from "@/containers/Content_Vector";

export default function Vectores() {
  /*background-image:url("https://fps.cdnpk.net/photos/home/cover.webp");background-position:center;background-size:cover;transition-delay:0.1s */
  return (
    <>
      <Nav bg="bg-gray-800 h-10" color="sm:text-gray-400" />
      <Content_Vector />
      <Footer />
    </>
  );
}
