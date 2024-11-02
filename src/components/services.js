import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Product Sales',
    description: 'At APPLELAND, we offer a wide selection of the latest gadgets and accessories from Apple. Whether you are looking for a new smartphone, a smartwatch, or smart home devices, we have 100% authentic products to meet your tech needs.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Warranty and Support',
    description: 'We believe in providing a hassle-free shopping experience. Our warranty and return policies ensure that you can shop with confidence, knowing that your satisfaction is our priority.'
  },
  {
    id: 3,
    icon: 'fas fa-screwdriver',
    title: 'Technical & Repair Services',
    description: 'We offer expert technical support & repair service for all the products we sell. Our skilled technicians team is here to assist you. You can rely on us for quick and effective solutions to any tech issues you may encounter.'
  },
  {
    id: 4,
    icon: 'fas fa-truck',
    title: 'Delivery and Shipping',
    description: 'Shop from the comfort of your home and choose between home delivery or in-store pickup. Your gadgets are just a click away! Order now to grab your tech with our fast delivery service.'
  },
  {
    id: 5,
    icon: 'fas fa-handshake',
    title: 'Trade-In Program',
    description: 'Looking to upgrade? Our trade-in program allows you to exchange your old gadgets for credit toward your next purchase. It’s an eco-friendly way to upgrade while saving money!'
  },
  {
    id: 6,
    icon: 'fas fa-gift',
    title: 'Gift Recommendations and Bundles',
    description: 'Looking for the perfect gift? We also offer curated gift bundles that combine popular items at a special price, making it easy to give the gift of technology.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;