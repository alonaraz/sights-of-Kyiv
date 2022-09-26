import { useState} from 'react';
import { data } from './data';
import './App.css';

function App() {


  const[place, setPlace] = useState(0);
  const[showMore, setShowMore] = useState(false);
  const {id, name, description, image, source} = data[place];


  const[placeTwo, setPlaceTwo] = useState(data);

  
  const prevPlace = () => {
    setPlace((place => {
      place --;
      if(place < 0) {
        return data.length-1;
      }
      return place;
    }))
  }

  const nextPlace = () => {
    setPlace((place => {
      place ++;
      if(place > data.length-1) {
        place = 0;
      }
      return place;
    }))
  }

  return(
    <div>
      <div className='container'>
        <h1 className='centerName'>{placeTwo.length} из множества других достопримечательностей Киева</h1>
      </div>
      <div className='container'>
       <h1>{id}. {name}</h1>
      </div>
      <div className='container'>
        <img src={image} width="1000px" height="600px" alt="person"/>
      </div>
      <div className='container'>
        <button onClick={prevPlace}>Пред.</button>
        <button onClick={nextPlace}>След.</button>
      </div>

      <div className='container'>
        <h2>{showMore ? description : description.substring(0,110) + "..."}
        <button className = "btn" onClick={() => setShowMore(!showMore)}>{showMore ? "Читать меньше" : "Читать больше"}</button>
        </h2>
      </div>
      <div className='container'>
        <p>источник: {source}</p>
      </div>
      
      <div className='container'>
        <button onClick={() => setPlace([])}>Удалить всё</button>
      </div>



    </div>
  )

}

export default App;







