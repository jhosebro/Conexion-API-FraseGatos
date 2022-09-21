import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const GIPHY_API_KEY = 'wrb2vLSM6Hwl7A063rw7rkU1AhzyVXsp';

  const [catFact, setCatFact] = useState("");
  const [catGift, setCatGift] = useState("");
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callGiphyAPI = (string) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`)
    .then(response => response.json())
    .then(data => setCatGift(data.data[0].images.original.url))
    console.log(catGift); 
  }

  const callAPI = () => {
    fetch('https://catfact.ninja/fact')
    .then((res) => res.json())
    .then((data) => { 
      setCatFact(data.fact || 'Hola jhosebro');
      callGiphyAPI(data?.fact?.split(" ",3).join(" "));
      console.log(data.fact);
   });

  };


  useEffect(callAPI,[]);
    



    return (
    <div style={{display: 'flex',justifyContent: 'center', gap:'50px', alignItems: 'center'}}>
    <img src={catGift} style={{objectFit: 'cover' ,width: '200px', height: '200px'}} alt=''/>
    <h1>{catFact}</h1>
    </div>
    );
}

export default App;
