import {  Container } from "react-bootstrap";
import React,{useState} from 'react';
import { person } from "./Data";
import DateCount from "./components/DateCount";
import Person from "./components/Person";
import Buttons from "./components/Buttons";
function App() {

const [presonData, setPresonData] = useState(person);
const onDelet=()=>{
  setPresonData([])
}
const onShow=()=>{
  setPresonData(person)
}

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DateCount person={presonData} />
        <Person person={presonData} />
        <Buttons showData={onShow} deletData={onDelet} />
      </Container>
    </div>
  );
}

export default App;
