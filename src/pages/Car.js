import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Car.css';

function Car() {
  const { id } = useParams();
  const url = 'http://localhost:3000/cars/' + id;
  const { error, isPending, data: car } = useFetch(url);
  

  return (
    <div className='car'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {car && (
        <div>
          <h2 className='page-title'>{car.title}</h2>
           <ul>
            {car.keywords.map(keyword => <li key={keyword}> {keyword} </li>)}
          </ul>
          <div className='card-img-center'>
                <img
                className="card-img"
                src={car.photo}
                alt="Neka slika"
                />
          </div>
                <p> <b>Number of seats:</b> {car.seats}<br></br>
                    <b>Transmission:</b> {car.transmission}<br></br>
                    <b>Price:</b> ${car.price}
                </p>
          <br></br>
          <p className='description'>{car.description}</p>
        </div>
      )}
    </div>
  )
}

export default Car;