import React from 'react';
import { Link } from 'react-router-dom';
import './EnvironmentalDegradation.css';

function CoralReefs() {
  const reefs = [
    {
      name: "Grande Barreira de Corais (Austrália)",
      description: "O maior sistema de recifes de corais do mundo, com mais de 2.300 quilômetros de extensão. Hospeda uma vasta gama de vida marinha, incluindo mais de 1.500 espécies de peixes e 400 tipos de corais. O recife é conhecido por suas deslumbrantes vistas submarinas e formações de corais vibrantes.",
      image: "https://dsvsbigncb06y.cloudfront.net/site/top-liveaboard-destinations-v3/great-barrier-reef-xl.jpg"
    },
    {
      name: "Recifes das Ilhas Raja Ampat (Indonésia)",
      description: "Localizados no Triângulo de Corais, Raja Ampat possui a maior biodiversidade marinha do planeta. É o lar de 533 espécies de corais e mais de 1.600 tipos de peixes. A área é um santuário para raias e tubarões e é conhecida por suas impressionantes paisagens submarinas.",
      image: "https://marsemfim.com.br/wp-content/uploads/2016/03/ilhas-goindonesia-tours-com.jpg"
    },
    {
      name: "Parque Natural dos Recifes de Tubbataha (Filipinas)",
      description: "Um Patrimônio Mundial da UNESCO, Tubbataha é conhecido por seus recifes de corais imaculados, extensas lagoas e duas ilhas de corais. O parque possui mais de 600 espécies de peixes e 360 espécies de corais, tornando-se um destino de topo para mergulhadores.",
      image: "https://captaindive.com.br/wp-content/uploads/2019/10/Mergulho-Filipinas-Captain-Dive1.jpg"
    },
    {
      name: "Recifes das Maldivas (Maldivas)",
      description: "Esses recifes estão espalhados por 26 atóis e são o lar de mais de 2.000 espécies de corais. As Maldivas são um destino popular para mergulho, oferecendo avistamentos de raias manta, tubarões-baleia e vários tipos de peixes perto da costa.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40GVo27jXXIKPsIg4afitdoXd2P-G2k3RHg&s"
    },
    {
      name: "Recife de Coral do Mar Vermelho (Mar Vermelho)",
      description: "Com 1.200 milhas de extensão, este sistema de recifes é incrivelmente resiliente, prosperando em uma das regiões mais quentes e áridas da Terra. Ele suporta cerca de 300 espécies de corais duros e cerca de 1.200 espécies de peixes.",
      image: "https://thumbs.dreamstime.com/b/consoles-no-mar-vermelho-697697.jpg"
    },
    {
      name: "Recife de Coral da Ilha do Coco (Costa Rica)",
      description: "Conhecido por sua rica biodiversidade, este sistema de recifes apresenta mais de 100 tipos de corais e é um refúgio para várias espécies marinhas, incluindo tartarugas e golfinhos. O recife é bem preservado e resistente à degradação induzida pelo homem.",
      image: "https://images.unsplash.com/photo-1643400812282-4ef456a7b352?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEdlb2dyYWZpYSUyMENvc3RhJTIwUmljYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Recife da Barreira Mesoamericana (Mar do Caribe)",
      description: "O maior recife de barreira do hemisfério ocidental, estende-se por mais de 700 milhas e toca as costas do México, Belize, Honduras e Guatemala. É o lar de 600 espécies de peixes e enfrenta ameaças de poluição da água e outras causas antropogênicas.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWP6CluNsr6QRlQJ_HdpE41qD8W70p3FfYKQ&s"
    },
    {
      name: "Recifes das Ilhas Salomão (Ilhas Salomão)",
      description: "Esses recifes cobrem 1.386 milhas quadradas e suportam 494 espécies de corais e 1.371 espécies de peixes. Eles são notáveis por seus jardins de corais e naufrágios da Segunda Guerra Mundial.",
      image: "https://static.dw.com/image/19241252_605.jpg"
    },
    {
      name: "Recife de Palancar (Cozumel, México)",
      description: "Parte do sistema de recife mesoamericano, Palancar é famoso por sua flora e fauna marinhas vibrantes. É um local popular para mergulhadores devido à sua vida marinha diversificada, incluindo cavalos-marinhos, peixes-borboleta e gorgônias.",
      image: "https://cdn.getyourguide.com/img/tour/6172d7229edaf.jpeg/99.jpg"
    },
    {
      name: "Grande Arquipélago de Chagos (Oceano Índico)",
      description: "Um dos maiores atóis de corais do Oceano Índico, é o lar de uma variedade de vida marinha, incluindo metade dos corais do mundo. O arquipélago é notável por suas condições imaculadas e poluição mínima.",
      image: "https://ogimg.infoglobo.com.br/mundo/23092729-e1d-cef/FT1086A/chago-islands.jpg"
    }
  ];

  return (
    <div className="coral-reefs">
      <Link to="/" className="back-button">
        <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024"><path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path></svg>
        <span>Voltar</span>
      </Link>
      <h1 className="title">Variedade de Recifes de Corais</h1>
      <p className="description">Explore nossa variedade de recifes de corais famosos ao redor do mundo. Cada recife possui uma biodiversidade única e uma beleza natural incomparável.</p>
      <div className="reef-list">
        {reefs.map((reef, index) => (
          <div key={index} className="reef-card">
            <img src={reef.image} alt={reef.name} className="reef-image" />
            <h2 className="reef-name">{reef.name}</h2>
            <p className="reef-description">{reef.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoralReefs;