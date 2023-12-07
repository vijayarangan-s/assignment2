import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';


import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

function App() {

  return (
    <main>
      <Header/>
      <Body/>
      <Footer />
    </main>
  )
}

export default App
