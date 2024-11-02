import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Welcome to <b>APPLAND</b> your One-Stop Gadget Shop!At APPLAND, we believe in embracing innovation and technology. Our shop offers a curated selection of the latest gadgets and electronic accessories designed to enhance your daily life. From smartphones and smartwatches to headphones and home automation devices, we have something for everyone.</p>
            <p>We are committed to excellent customer service, ensuring that every shopping experience is enjoyable and fulfilling. Our knowledgeable staff is passionate about technology and always ready to assist you in finding the right products. We believe that technology should be fun, functional, and help improve the way you live and work.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;