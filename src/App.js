import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const API_KEY ="5506d07135ff436fb1c55b8e54eb924c";
  const [search, setSearch] = useState('');
  const [img, setImg] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const URL = `https://api.apiflash.com/v1/urltoimage?access_key=${API_KEY}&url=${search}&full_page="true"&fresh="true"`


  const getScreenshots = async () => {
    setSearch('')
    setError(false)
    setLoading(false)
    const response = await fetch(URL);
    if (response.ok) {
      setImg(response);
      setLoading(false)
    } else {
      setError(true)
    }
  }

  const searchScreenshots = (e) => {
    e.preventDefault();
    getScreenshots()
  }

  useEffect(() => {
    setSearch("")
    getScreenshots()
  }, [])

  return (
    <div className="App">
      <nav>
        <div className="container">
          <form onSubmit={searchScreenshots}>
            <input 
              type='text' 
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}  
                 />
            <button type="submit">Take screenshot</button>
          </form>
        </div>
      </nav>   

       <div className="hero">
        {!loading && !error ? (
          <div className="container">
            {img && (
              <a href={img.url} target='_blank' rel='noreferrer'>
                <img src={img.url} alt="background"/>
              </a>
            )}
          </div>
        ): !error && loading? (
          <div className='loading'></div>
        ) :error ? (
          <div className='container'>
            <h2>Please enter a valid url</h2>
          </div>
        ) : (
          ''
        )
        }
       </div>
    </div>
  );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}

export default App;
