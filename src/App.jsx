import { useEffect, useState } from 'react'
import Paragraph from './components/Paragraph'
import Image from './components/Image'
import axios from 'axios';

function App() {
  const [imageList, setImageList] = useState([])

  useEffect(() => {
  }, [])

  function getData() {
    axios
      .get('https://picsum.photos/v2/list?limit=4')
      .then((response) => {
        console.log(response.data);
        setImageList(response.data);
      })
  }

  useEffect(getData, [])

  if (!imageList) return <p>Carregando...</p>

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column'}}>
      {imageList.map((image) => {
      return (
        <div key={image.id}>
          <Paragraph tamanho='30px'>Name: {image.author}</Paragraph>
          <Image width='200px' height='200px' url={image.download_url} />
        </div>
      );
      })}
    </div>
  );
}

export default App
