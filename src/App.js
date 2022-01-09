import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import Homepage from './pages/Homepage';
import {makeStyles} from '@material-ui/core';
import 'react-alice-carousel/lib/alice-carousel.css';

function App() {

  const useStyles = makeStyles(() =>({
    App: {
      backgroundColor:'#14161a',
      color:"white",
      minHeight:"100vh",
    }
  }))

  const classes = useStyles()
  return ( 
    <BrowserRouter>
      <div className={classes.App}>
          <Header/>
          <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/coins/:id' element={<CoinPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
