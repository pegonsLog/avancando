import { useState } from "react";
import "./App.css";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import Fragment from "./components/Fragment";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {
  // const userName = "Pedro";
  // const userNameState = useState("Maria");

  // const cars = [
  //   { brand: "VW", km: 12025, color: "Azul",  newCar: false},
  //   { brand: "Ford", km: 0, color: "Preta", newCar: true},
  //   { brand: "Fiar", km: 125000, color: "Branca", newCar: false},
  // ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <div>
      <h1>Avançando em React</h1>
      {/*
      <div>
        <img src="/img1.jpg" alt="img1" className="size" />
      </div>
      <div>
        <img src={Img2} alt="img2" className="size" />
      </div>*/}
      {/* 
      <ManageData />
      <ListRender />
      <ConditionalRender /> */}
      {/* <ShowUserName userName={userNameState} /> */}
      {/* <CarDetails brand="VW" km={12025} color="Azul"/> */}
      {/* {cars.map((car) => (
        <div>
          <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} newCar={car.newCar} />
        </div>
      ))} */}
      {/* <Fragment />
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container> */}
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
