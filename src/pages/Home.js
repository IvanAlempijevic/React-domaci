import { useFetch } from '../hooks/useFetch';
import './Home.css';
import Cars from '../components/Cars';

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/cars');

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <Cars cars={data} />}
    </div>
  )
}
