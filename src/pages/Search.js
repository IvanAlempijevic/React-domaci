import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Cars from '../components/Cars';

export default function Search() {
  const queryString = useLocation().search; 
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  const url = 'http://localhost:3000/cars?q=' + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <h2 className='page-title'>Cars with "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <Cars cars={data}/>}
    </div>
  )
}