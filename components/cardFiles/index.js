import { Button, Card, Col, Row } from 'react-bootstrap';
import CarouselFile from '../carouselFiles';
import { numberWithCommas } from '../../config';

const CardFiles = props => {
  const { detail } = props;

  if (!detail) return;

  return (
    <Card className="border-0 shadow p-2">
      {/* Badges */}
      <Row
        xs="auto"
        className="m-0 pt-3"
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: '10',
        }}
      >
        {detail.forRent && (
          <Col>
            <Button size="sm" className="bg-secondary border-0 ">
              For Rent
            </Button>
          </Col>
        )}

        {detail.featured && (
          <Col>
            <Button size="sm" className="bg-danger border-0 ">
              Featured
            </Button>
          </Col>
        )}
      </Row>

      {/* Price And favorite*/}
      <Row
        className="m-0 pb-3 ps-3 d-flex flex-row flex-nowrap"
        style={{
          position: 'absolute',
          bottom: '40px',
          width: '100%',
          zIndex: '10',
        }}
      >
        <Col>
          <label className="fs-5 fw-bold text-white">
            ${numberWithCommas(detail.price)}
          </label>
          <label className="fs-6  text-white">/mo</label>
        </Col>

        {/* Favorite */}
        <Col className="d-flex flex-row gap-3 justify-content-end me-4">
          <Button className="bg-secondary border-0 bg-opacity-75 p-1">
            <img
              width={'29px'}
              src={
                detail.transfer ? '/icon/transfer.png' : '/icon/transfer.png'
              }
            ></img>
          </Button>
          <Button className="bg-secondary border-0 bg-opacity-75 p-1">
            <img
              width={'29px'}
              src={
                detail.favorite ? '/icon/favorite1.png' : '/icon/favorite0.png'
              }
            ></img>
          </Button>
        </Col>
      </Row>

      {/* Images */}
      <div className="m-0">{<CarouselFile images={detail.images} />}</div>

      <Card.Body></Card.Body>
    </Card>
  );
};

export default CardFiles;
