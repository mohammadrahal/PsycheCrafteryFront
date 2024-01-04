import Header from '../component/Header'
import SubHeader from '../component/SubHeader'
import KindPsycho from '../component/KindPsycho'
import Faq from '../component/Faq'
import Help from '../component/Help'
import Footer from '../component/Footer'
import Therapy from '../component/Therapy'
import Chatbot from '../component/Chatbot'

const Home = () => {
  return (
    <div>
      <Header/>
      <SubHeader/>
      <KindPsycho/>
      <Chatbot/>
      <Help/>
      <Therapy/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home