import { Button, Card, Col, Row } from 'react-bootstrap';
import CarouselFile from '../carouselFiles';
import { numberWithCommas } from '../../config';
import Image from 'next/image';

const CardFiles = props => {
  const { detail } = props;
  console.log(detail.avatar);
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
          top: '180px',
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
          <Button className="bg-dark border-0 bg-opacity-50 p-1">
            <img
              width={'25px'}
              height={'25px'}
              src={
                detail.transfer ? '/icon/transfer.png' : '/icon/transfer.png'
              }
            ></img>
          </Button>
          <Button className="bg-dark border-0 bg-opacity-50 p-1">
            <img
              width={'25px'}
              height={'25px'}
              src={
                detail.favorite ? '/icon/favorite1.png' : '/icon/favorite0.png'
              }
            ></img>
          </Button>
        </Col>
      </Row>

      {/* Images */}
      <div className="m-0">{<CarouselFile images={detail.images} />}</div>

      <Card.Body>
        <label className="text-danger mt-4">{detail.fileType}</label>

        <Card.Title className="fw-bold mt-3">{detail.title}</Card.Title>
        <div className="d-flex flex-row gap-2 align-items-start ">
          <div style={{ marginTop: '-2px' }}>
            <img src="/icon/location.png"></img>
          </div>
          <address className="text-secondary" style={{ fontSize: '14px' }}>
            {detail.address}
          </address>
        </div>

        <div
          className="d-flex flex-row gap-5 text-secondary"
          style={{ fontSize: '15px' }}
        >
          <label>Bed: {detail.beds}</label>
          <label>Baths: {detail.baths}</label>
          <label>Sq Ft: {detail.sqft}</label>
        </div>
      </Card.Body>

      <Card.Footer className="bg-transparent d-flex flex-row justify-content-between align-items-center">
        {/* Avatar */}
        <div
          style={{
            width: '45px',
            height: '45px',
            position: 'relative',
            objectFit: 'cover',
          }}
        >
          <Image
            src={detail.avatar ? detail.avatar : '/avatar/avatar2.jpg'}
            className="rounded-circle"
            width={45}
            height={45}
            alt="Avatar"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>

        <label
          style={{ fontSize: '15px' }}
          className="text-secondary fw-lighter"
        >
          {detail.createTime}
        </label>
      </Card.Footer>
    </Card>
  );
};

export default CardFiles;
