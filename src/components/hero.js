import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
      id: 1,
      image: require('../assets/images/img-hero1.jpg'),
      title: 'The perfect innovation for your lifestyle',
      description: 'Innovation meets affordability at APPLELAND! Find the best tech deals on everything from the latest smartphones to smart home devices. Our knowledgeable staff is here to help you choose the perfect gadget for your needs. Shop now and take advantage of our exclusive offers!',
      link: 'https://www.apple.com/'
    },
    {
      id: 2,
      image: require('../assets/images/img-hero2.jpg'),
      title: 'A Touch of Class, a World of Difference',
      description: 'Upgrade your gadget game with the newest devices and must-have accessories, all in one place! With exclusive discounts, a wide variety of products, and expert guidance, APPLELAND is your go-to destination for all things tech. Shop now and discover the future of technology!',
      link: 'https://www.facebook.com/apple'
    },
    {
      id: 3,
      image: require('../assets/images/img-hero3.jpg'),
      title: 'Discover Smart Solutions for Everyday Life – Shop the Latest Tech Now!',
      description: 'Explore the future of tech with our exclusive selection of the latest gadgets! Whether you are looking to enhance your entertainment setup or optimize your work-from-home experience, we offer gadgets that deliver performance, style, and value. Visit us today for the best deals and personalized recommendations!',
      link: 'https://www.youtube.com/watch?v=uarNiSl_uh4&ab_channel=Apple'
    }
  ]

export default function AppHero(){
    return (
        <section id="home" className='hero-block'>
             <Carousel>
                {
                    heroData.map(hero =>{
                        return (
                            <Carousel.Item key={hero.id}>
                            <img
                              className="d-block w-100"
                              src={hero.image}
                              alt={"slide " + hero.id}
                            />
                            <Carousel.Caption>
                              <h2>{hero.title}</h2>
                              <p>{hero.description}</p>
                              <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                            </Carousel.Caption>             
                          </Carousel.Item>
                        )
                    }

                    )
                }
                
            </Carousel>
        </section>
    )
}