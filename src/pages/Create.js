import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Create.css';

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [photo, setPhoto] = useState('');
  const [seats, setSeats] = useState('');
  const [drive, setDrive] = useState('');
  const [transmission, setTransmission] = useState('');
  const [newKeyword, setNewKeyword] = useState('');
  const [keywords, setKeywords] = useState([]);

  const keywordsInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data } = useFetch('http://localhost:3000/cars', 'POST');

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData({ title, photo , keywords, seats, drive, transmission, description, price});
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const kw = newKeyword.trim();

    if(kw && !keywords.includes(kw)) {
      setKeywords(prevKeywords=> [...prevKeywords, newKeyword]);
    }

    setNewKeyword('');
    keywordsInput.current.focus(); 
  };

 
  useEffect(() => {
    if(data) {
      navigate('/'); 
    }
  }, [data, navigate])

  return (
    <div className='create'>
        <h2 className='page-title'>Add new luxury car</h2>

        <form onSubmit={handleSubmit}>

          <label>
            <span>Car name and model:</span>
            <input 
              type="text"
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
              required
            />
          </label>
          <label>
            <span>Photo of vehicle:</span>
            <input 
              type='url'
              onChange={(e) => setPhoto(e.target.value)} 
              value={photo}
              required
            />
          </label>

          <label>
            <span>Short description:</span>
            <textarea 
              onChange={(e) => setDescription(e.target.value)} 
              value={description}
              required
            />
          </label>

          <label>
            <span>Keywords for search:</span>
            <div className='keywords'> 
              <input 
                type="text" 
                onChange={(e) => setNewKeyword(e.target.value)}
                value={newKeyword}
                ref={keywordsInput}
              />
              <button onClick={handleAdd} className='btn'>Add</button>
            </div>
          </label>
          <p>Current keywords: {keywords.map(kw => <em>{kw}, </em>)}</p>

          <label>
            <span>Number of seats</span>
            <input
              type="text"
              onChange={(e) => setSeats(e.target.value)}
              value={seats}
              required
            />
          </label>
          <label>
            <span>Drive</span>
            <input
              type="text"
              onChange={(e) => setDrive(e.target.value)}
              value={drive}
              required
            />
          </label>
          <label>
            <span>Transmission</span>
            <input
              type="text"
              onChange={(e) => setTransmission(e.target.value)}
              value={transmission}
              required
            />
          </label>
          <label>
            <span>($) Price </span>
            <input
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </label>

          <button className='btn'>Submit</button>

        </form>

    </div>
  )
}
