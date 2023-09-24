import Header from '@/containers/Header'
import Content from '@/containers/Content'
import Footer from '@/containers/Footer'

export default function Home(){
  return (
    <>
    <Header bg="bg-blue-600" color="text-white" bg_nav='transparent'/>
    <Content />
    <Footer />
    </>
  )
}