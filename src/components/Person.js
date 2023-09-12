import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Person({person}) {
  return (
    <Row className="justify-content-center mt-3">
    <Col sm="8" className="">
      <div className="rectangel p-3 ">

        {person.length ?(
            person.map((itme)=>{
              return(
                <div key={itme.id} className="d-flex border-bottom my-2">
                <img className="img-avatar" src={itme.img} alt="not fount" />
                <div className="px-3">
                  <p className="d-inline fs-4">{itme.name}</p>
                  <p className="fs-6">{itme.date}</p>
                </div>
              </div>
              )
            })

        ):<h1 className="justify-content-center text-center">لا يوجد مواعيد اليوم</h1>}
      
      </div>
    </Col>
  </Row>
  )
}

export default Person
