import { Col, Container, Row, Stack } from 'react-bootstrap';
import InfoHeader from '../components/layout/infoHeader';
import SerachOption from '../components/serachOption';
import CardFiles from '../components/cardFiles';
import { files as dummyFiles } from '../config';
import { useEffect, useState } from 'react';

function Home() {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    setFiles(dummyFiles);
  }, []);

  return (
    <Container>
      {/* Breadcrub */}
      <Row>
        <InfoHeader title={'Simple Listing - Gridview 5'} />
      </Row>
      <Row>
        {/* Main Container - Left Col */}

        <Col lg={8}>
          {/* Main */}
          <Row>
            <SerachOption />
            <Col className="mt-3 p-0">
              <Row xs={1} md={2} className="g-4">
                {files?.map(file => {
                  return (
                    <Col key={file.detail.id}>
                      <CardFiles detail={file.detail} />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Col>

        {/* Right Serach Panel -  Right Col*/}
        <Col lg={4} className="d-none d-lg-block">
          2
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
