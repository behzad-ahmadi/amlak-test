import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import NextBreadcrumbs from '../../breadCrumb';
import { faTable, faThList } from '@fortawesome/free-solid-svg-icons';

const InfoHeader = ({ title }) => {
  return (
    <Row direction="horizontal">
      <Col>
        <NextBreadcrumbs />
        <h2 className="fs-4 fw-bold" style={{ color: '#484848' }}>
          {title}
        </h2>
      </Col>
      <Col className="text-end pt-3">
        <Button className="mx-1 btn-light border-secondary border-opacity-50 fs-5">
          <FontAwesomeIcon aria-hidden icon={faTable} />
        </Button>
        <Button className="mx-1 btn-light border-secondary border-opacity-50 fs-5">
          <FontAwesomeIcon aria-hidden icon={faThList} />
        </Button>
      </Col>
    </Row>
  );
};

export default InfoHeader;
