import { useEffect, useState } from 'react'
import Paragraph from './components/Paragraph'
import Image from './components/Image'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Detalhes from './routes/Detalhes';

function App() {
  const [imageList, setImageList] = useState([])

  function getData() {
    axios
      .get('https://picsum.photos/v2/list?limit=10')
      .then((response) => {
        console.log(response.data);
        setImageList(response.data);
      })
  }

  useEffect(getData, [])

  if (!imageList) return <p>Carregando...</p>

  return (
    <Router>
      <Routes>
        <Route
          path='/detalhes/:id'
          element={<Detalhes />}
        />
        <Route path='/users' element={<div>Página de usuários</div>}></Route>
        <Route path='/' element={<ImageList imageList={imageList} />}></Route>
      </Routes>
    </Router>
  );

function ImageList(props) {
    return (
      <div style={{display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column'}}>
        {props.imageList.map((image) => {
        return (
          <div key={image.id}>
            <Paragraph tamanho='30px'>Name: {image.author}</Paragraph>
            <Link to={`/detalhes/${image.id}`}>
              <Image width='300px' height='300px' url={image.download_url} />
            </Link>
          </div>
        );
        })}
      </div>
    );
}

export default App
