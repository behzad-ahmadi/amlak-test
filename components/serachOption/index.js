import { Card, Col, Form, FormGroup, Row } from 'react-bootstrap';
import { colorsHash } from '../../config';

const SerachOption = () => {
  return (
    <Card>
      <Card.Body>
        <Form style={{ fontSize: '14px' }}>
          <Row>
            <Col lg={4} className="my-auto">
              {'9'} Search results
            </Col>
            <Col lg={8}>
              <FormGroup>
                <div className="d-flex flex-row">
                  <Form.Label
                    htmlFor="selectstatus"
                    className="my-auto fw-bold"
                  >
                    Status:
                  </Form.Label>
                  <Form.Select
                    id="selectstatus"
                    size="sm"
                    className="mx-2 border-0"
                  >
                    <option>All Status</option>
                    <option>Recent</option>
                    <option>Old Review</option>
                  </Form.Select>

                  <Row
                    className="mx-3"
                    style={{ width: '1px', backgroundColor: colorsHash.border }}
                  ></Row>

                  <Form.Label
                    htmlFor="selectsort"
                    className="my-auto fw-bold text-nowrap"
                  >
                    Sort by:
                  </Form.Label>
                  <Form.Select
                    id="selectsort"
                    size="sm"
                    className="mx-2 border-0"
                  >
                    <option>Featured First</option>
                    <option>Featured 2nd</option>
                    <option>Featured 3rd</option>
                  </Form.Select>
                </div>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SerachOption;
