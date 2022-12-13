import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <Container fluid className="bg-light">
      <Row style={{ marginBottom: '6rem' }}>
        <Header />
      </Row>
      <Container>
        <Row className="py-5">{children}</Row>
      </Container>
    </Container>
  );
};

export default Layout;
