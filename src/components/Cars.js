import { Link } from 'react-router-dom';
import './Cars.css';
function Cars({ cars }) {
  

  if(cars.length === 0) {
    return <div className='error'>No cars to load...</div>
  }

  return ( 
    <div className='car-list'>
        {cars.map(car => (
            <div key={car.id} className='card'>
                <h3>{car.title}</h3>
                <div className='card-img-center'>
                <img
                className="card-img"
                src={car.photo}
                alt="Neka slika"
                />
                </div>
                <p> Number of seats:{car.seats}<br></br>
                    Transmission: {car.transmission}<br></br>
                    Price: ${car.price}
                </p>
                <div>{car.description.substring(0, 25)}...</div>
                <Link to={`/cars/${car.id}`}>Details</Link>
            </div>
        ))}
    </div>
  )
}
export default Cars;
