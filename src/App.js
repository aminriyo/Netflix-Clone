
import './App.css';
import Banner from './Banner';
import Nav from './Nav';
import requests from './requests';
import Row from './Row';

function App({title}) {
  return (
    <div className="App">
      <Nav />
      <Banner/>
      <Row title="NETFLIX ORIGINAL"
        islargerRow
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Tranding"
      fetchUrl={requests.fetchTrending}/>
      <Row title="Tor Rated"
      fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies"
      fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;
