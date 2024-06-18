import React from "react";
import "../App.css";
import cohete from "../img/cohete.svg";

const Main = () => {
  return (
    <main>
      <section className="banner">
        <p style={{ color: "white" }}>TEXTO PREVIO AL TÍTULO</p>
        <h1 className="title">
          Título banner <br /> principal
        </h1>
        <button className="button">Enviar</button>
        <div className="boxCircle">
          <div className="circle"></div>
        </div>
      </section>
      <section className="boxSection">
        <div className="box">
          <img src={cohete} alt="Cohete" />
          <h1 className="items">Item 1</h1>
          <p className="text">
            Aún nuestro sitio está en construcción (somos muy perfeccionistas
            jeje). Mientras puedes navegar en nuestro sitio antiguo.{" "}
          </p>
        </div>
        <div className="box">
          <img src={cohete} alt="Cohete" />
          <h1 className="items">Item 1</h1>
          <p className="text">
            Aún nuestro sitio está en construcción (somos muy perfeccionistas
            jeje). Mientras puedes navegar en nuestro sitio antiguo.{" "}
          </p>
        </div>
        <div className="box">
          <img src={cohete} alt="Cohete" />
          <h1 className="items">Item 1</h1>
          <p className="text">
            Aún nuestro sitio está en construcción (somos muy perfeccionistas
            jeje). Mientras puedes navegar en nuestro sitio antiguo.{" "}
          </p>
        </div>
      </section>
      <div className="boxCircle2">
          <div className="circle2"></div>
        </div>
    </main>
  );
};

export default Main;
