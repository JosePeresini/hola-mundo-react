import { Component } from "react";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/tomate.png" },
      { name: "Arbeja", price: 1500, img: "/arbeja.png" },
      { name: "Lechuga", price: 1500, img: "/lechuga.png" },
    ],
  };

  render() {
    return (
      <>
        <div>Hola Mundo</div>
      </>
    );
  }
}

export default App;
