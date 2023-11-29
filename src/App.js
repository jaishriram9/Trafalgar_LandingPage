import CustomerSection from './Components/CustomerSection';
import DownloadSection from './Components/DownloadSection';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LatestArticle from './Components/LatestArticle';
import MainSection from './Components/MainSection';
import Services from './Components/Services';
import ToDo from './Components/ToDo';

function App() {
  return (
    <>
    <Header />
    <MainSection />
    <Services/>
    <DownloadSection/>
    <CustomerSection/>
    <LatestArticle/>
    <Footer/>

    {/* <ToDo/> */}
    </>
  );
}

export default App;
