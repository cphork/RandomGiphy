import { useEffect, useState } from 'react'
import Form from './components/Form'
import GiphyDisplay from './components/GiphyDisplay'
import './App.css';




function App() {

  const apiKey = 'f3ID9KvCWAAHMFS7UggaldoRCenoPiZN'

  const [giphys, setGiphys] = useState(null)

  const getGiphys = async (searchTerm) => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&rating=g`)

    const data = await response.json()

    setGiphys(data)


  };


  useEffect(() => {

    const gifs = ['duck', 'mustang', 'dog', 'cat']

    const index = Math.floor(Math.random() * gifs.length)

    getGiphys(gifs[index])
  }, [])



  return (
    <div className="App">

      <Form giphysearch={getGiphys} />
      <GiphyDisplay giphys={giphys} />

    </div>
  );
}

export default App;
