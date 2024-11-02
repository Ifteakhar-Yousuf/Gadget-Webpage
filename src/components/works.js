import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.apple.com/iphone/',
    image: require('../assets/images/img2.jpg'),
    title: 'Iphone Series',
    subtitle: 'Iphone 16'
  },
  {
    id: 2,
    link: 'https://www.apple.com/watch/',
    image: require('../assets/images/img3.jpg'),
    title: 'iwatch series',
    subtitle: 'Thinstant classic'
  },
  {
    id: 3,
    link: 'https://www.apple.com/mac/',
    image: require('../assets/images/img4.jpg'),
    title: 'MacBook',
    subtitle: 'upcoming M2 Pro and M2 Max'
  },
  {
    id: 4,
    link: 'https://www.apple.com/airpods/',
    image: require('../assets/images/img5.jpg'),
    title: 'Apple AirPods',
    subtitle: 'AirPods Pro (2nd generation)'
  },
  {
    id: 5,
    link: 'https://www.apple.com/homepod/',
    image: require('../assets/images/img6.jpg'),
    title: 'Apple HomePod',
    subtitle: 'Apple HomePod mini'
  },
  {
    id: 6,
    link: 'https://www.apple.com/displays/',
    image: require('../assets/images/img7.jpg'),
    title: 'Apple Monitor',
    subtitle: 'Pro Curve Display XDR'
  },
  {
    id: 7,
    link: 'https://www.apple.com/apple-vision-pro/',
    image: require('../assets/images/img8.jpg'),
    title: 'Apple VR',
    subtitle: 'Vision pro'
  },
  {
    id: 8,
    link: 'https://www.apple.com/shop/accessories/all',
    image: require('../assets/images/img9.jpg'),
    title: 'Apple Accessories',
    subtitle: 'Mix,Match,MagSafe etc'
  },
  {
    id: 9,
    link: 'https://www.apple.com/ipad-pro/',
    image: require('../assets/images/img20.jpg'),
    title: 'iPad',
    subtitle: 'iPad Pro'
  },
]

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Products</h2>
          <div className="subtitle">our awesome products</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;