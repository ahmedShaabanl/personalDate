import React from "react";
import { Col, Row } from "react-bootstrap";

function Buttons({deletData,showData}) {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={deletData} className="btn-style p-2">مسح الكل</button>
        <button onClick={showData} className="btn-style p-2">عرض الكل</button>
      </Col>
    </Row>
  );
}

export default Buttons;
