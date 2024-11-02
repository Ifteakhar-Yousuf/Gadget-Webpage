import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/team1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Md.Ifteakhar Yousuf',
    designation: 'Store Manager',
    description: 'He plays a crucial role in balancing the technical aspects of the products, managing a diverse team, and driving the businesss success.'
  },
  {
    id: 2,
    image: require('../assets/images/team2.jpg'),
    fbLink: 'https://www.facebook.com/aritra.devvv',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/aritra-dev-69245a231/',
    name: 'Aritra Dev',
    designation: 'Stock Clerks',
    description: 'He helps to maintain an organized store and ensure that popular products are always available for customers'
  },
  {
    id: 3,
    image: require('../assets/images/team3.jpg'),
    fbLink: 'https://www.facebook.com/profile.php?id=100093284907407',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/yamin401533/',
    name: 'Ashabul Yamin',
    designation: 'Sales Associates',
    description: 'He contributes to sales success by delivering excellent customer service and providing knowledgeable assistance.'
  },
  {
    id: 4,
    image: require('../assets/images/team4.jpg'),
    fbLink: 'https://www.facebook.com/profile.php?id=100017951310189',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Samir Bin Abdul Karim',
    designation: 'Chief technician ',
    description: 'He leads the technical team in troubleshooting complex issues, ensuring all devices meet high-quality standards.'
  },
  {
    id: 5,
    image: require('../assets/images/team5.jpg'),
    fbLink: 'https://www.facebook.com/jamil.siddique.shojib',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Jamil Siddique',
    designation: 'Technician',
    description: 'He stays updated on the latest technology, helping the company integrate new features into its devices.'
  },
  {
    id: 6,
    image: require('../assets/images/team6.jpg'),
    fbLink: 'https://www.facebook.com/efaz1401',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/jobayer-ahmmed-efaz-922835314/',
    name: 'Jobayer Efaz',
    designation: 'Technician',
    description: 'As part of APPLELAND,he addresses customer concerns, offering solutions and repairs to keep devices running smoothly.'
  },
  {
    id: 7,
    image: require('../assets/images/team7.jpg'),
    fbLink: 'https://www.facebook.com/saimonrh.rafi',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/saimon-rohman-rafi-98b4a1328/',
    name: 'Saimoon Rafi',
    designation: 'Cashiers',
    description: 'He manages transactions to ensure a smooth, efficient, and pleasant checkout experience for customers.'
  },
  {
    id: 8,
    image: require('../assets/images/team8.jpg'),
    fbLink: 'https://www.facebook.com/collest.prathy',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com/in/prottoy-dhar-966883285/',
    name: 'Prottoy Dhar',
    designation: 'Security Personnel',
    description: 'Security personnel in a gadget shop protect merchandise, ensure safety, and create a secure shopping environment.'
  }
]

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;