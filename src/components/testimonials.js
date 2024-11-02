import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    name: 'Saydur Rahman',
    description: 'This shop has an impressive selection of the latest gadgets at competitive prices. I had a fantastic experience at this gadget shop! I appreciate the friendly atmosphere and the personalized service.',
    designation: 'Student'
  },
  {
    id: 2,
    name: 'Leanur Rahaman',
    description: 'I was blown away by how quickly they helped me troubleshoot an issue with my device. Their customer service is top-notch! They truly care about their customers.',
    designation: 'Businessman'
  },
  {
    id: 3,
    name: 'Md Tasin Taher',
    description: 'This gadget shop is my go-to for all my tech needs. They always have the latest releases and great deals. I have recommended this shop to all my friends! The combination of quality products and excellent service is unbeatable.',
    designation: 'Corporate Job holder'
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;