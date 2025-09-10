import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/paginas/Home'
import Contact from './components/paginas/Contact'
import Company from './components/paginas/Company'
import NewProject from './components/paginas/NewProject'

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contatos</Link>
        <Link to="/company">SobreNos</Link>
        <Link to="/newproject">Cardapio</Link>
      </div>
      <Routes>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/newproject">
          <NewProject />
        </Route>
      </Routes>
      <p>Gourmet Delight</p>
      <p>Explore Nossas Delícias</p>
    </Router>
  );
}

export default App;

