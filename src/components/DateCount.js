import React from 'react'
import { Col, Row } from 'react-bootstrap'

function DateCount({person}) {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
          لديك  {person.length} مواعيد
          </Col>
        </Row>
  )
}

export default DateCount
