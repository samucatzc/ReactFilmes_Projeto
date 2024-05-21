import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Paragraph from '../components/Paragraph';

const Detalhes = () => {
    const params = useParams();
    console.log({params})
    const [image, setImage] = useState({})

      useEffect(() => {
        function getData() {
            axios
              .get(`https://picsum.photos/id/${params.id}/info`)
              .then((response) => {
                console.log({ response })
                console.log(response.data);
                setImage(response.data);
              })
          }

        getData();
      }, [])

    return (
    <div>
      <Paragraph tamanho='20px'>Página Sobre</Paragraph>
      <img src={image.download_url} width={500} height={500}></img>
      <Paragraph tamanho='30px'>Author: {image.author}</Paragraph>
      <Link to='/'>Voltar à Página Inicial</Link>
    </div>
  );
};

export default Detalhes