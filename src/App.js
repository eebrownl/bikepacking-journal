import './App.css';
import data from './data';
import Header from "./components/Header";
import Trip from "./components/Trip"

function App() {
  const tripData = data.map(item => {
    return <Trip
    key={item.startDate}
    {...item}
    />
  })
  
  return (
    <div className="App">
      <Header />
      <div className='card-holder'>
        {tripData}
      </div>
    </div>
  );
}

export default App;
