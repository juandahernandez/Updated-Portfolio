import React from "react";
import { Carousel } from "react-bootstrap";
import "./SliderWithReactBoostrap.css";
import Modal from "../modal/Modal";
import { useModal } from "../../hooks/useModal";
const SliderWithReactBoostrap = () => {
  const [isOpenPokemon, openPokemon, closePokemon] = useModal(false);
  const [isOpenEcommerce, openEcommerce, closeEcommerce] = useModal(false);
  const [isOpenRepairs, openRepairs, closeRepairs] = useModal(false);
  const [isOpenMeals, openMeals, closeMeals] = useModal(false);
  const [isOpenWeather, openWeather, closeWeather] = useModal(false);
  const [isOpenUsers, openUsers, closeUsers] = useModal(false);
  const [isOpenGitHub, openGitHub, closeGitHub] = useModal(false);

  return (
    <>
      <a name="Proyectos" id="Proyectos" href="/#">
        {" "}
      </a>
      <div className="container-react">
        <h3>Proyectos</h3>
        <Carousel className="container">
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://freegametips.com/wp-content/uploads/2020/02/1582901304_376_Pokemon-on-Netflix-All-movies-and-series-available-in-Spain.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <button onClick={openPokemon}>pokedex</button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <button onClick={openEcommerce}>E-commerce</button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/b/concepto-isom%C3%A9trico-del-vector-app-de-los-servicios-m%C3%B3viles-electricista-ejemplo-la-reparaci%C3%B3n-equipo-y-trabajador-el%C3%A9ctrica-152014596.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <button onClick={openRepairs}>Repairs App</button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://cdn.dribbble.com/users/1615584/screenshots/15710288/media/e35687bef5076a9f0a5d85a80a4688f2.jpg?compress=1&resize=400x300&vertical=top"
              alt="Third slide"
            />
            <Carousel.Caption>
              <button onClick={openMeals}>Meals App</button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://s3.amazonaws.com/blog.invisionapp.com/uploads/2018/05/weather-app-4.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <button onClick={openWeather}>Weather App</button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://ifixar.com.br/wp-content/uploads/2019/03/registropessoafisica.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <button onClick={openUsers}>Users App</button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://blogthinkbig.com/wp-content/uploads/sites/4/2020/06/GitHub-Desktop-Logo.jpg?fit=1500%2C1000"
              alt="Third slide"
            />
            <Carousel.Caption>
              <button onClick={openGitHub}>Git hub</button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="div-modals">
        <Modal isOpen={isOpenPokemon} closeModal={closePokemon}>
          <h3>Pokedex</h3>
          <img
            src="https://freegametips.com/wp-content/uploads/2020/02/1582901304_376_Pokemon-on-Netflix-All-movies-and-series-available-in-Spain.jpg"
            alt="Pokemon img"
          />
          <p>Consumo la api de pokemon, con react, redux y react router</p>
          <a href="https://5856j.csb.app/" target="_blank" rel="noreferrer">
            <button>
              <i class="fa-brands fa-chrome"></i>{" "}
            </button>
          </a>
        </Modal>

        <Modal isOpen={isOpenEcommerce} closeModal={closeEcommerce}>
          <h3>E commerce</h3>
          <img
            className="d-block w-100"
            src="https://s3.amazonaws.com/cdn.wp.m4ecmx/wp-content/uploads/2015/05/31143018/Qu%C3%A9-es-el-eCommerce-compressor.jpg"
            alt="E-commerce img"
          />
          <p>
            E commerce en el front hecha con react donde puedes agregar
            productos al carrito y simular la compra, sin pasarela de pagos
            real, en el backend hecha con node.js donde puedes crear una cuenta,
            vender tus productos y comprar los de otros usuarios, con niveles de
            acceso, jwt, firebase y envio de correos al registrarte.
          </p>
          <div>
            <a
              href="https://e-commerce-mu-henna.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <i class="fa-brands fa-chrome"></i>
              </button>
            </a>
            <a
              href="https://github.com/juandahernandez/e-commerce-app"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <i class="fa-brands fa-github"></i>
              </button>
            </a>
          </div>
        </Modal>

        <Modal isOpen={isOpenRepairs} closeModal={closeRepairs}>
          <h3>Repairs App</h3>
          <img
            className="d-block w-100"
            src="https://etic-solutions.net/etic/wp-content/uploads/2018/11/reparacion-y-mantenimiento-de-equipos.png"
            alt="Third slide"
          />
          <p>
            Codigo de backend para app de reparacion de esquipos, hecho con
            node.js , aplicando niveles de acceso, jwt, firebase. Puedes agendar
            tu cita para la reparacion, subir una foto de tu equipo a reparar y
            enviar comentarios.
          </p>
          <a
            href="https://github.com/juandahernandez/project-repairs-node-js"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <i class="fa-brands fa-github"></i>
            </button>
          </a>
        </Modal>

        <Modal isOpen={isOpenMeals} closeModal={closeMeals}>
          <h3>Meals App</h3>
          <img
            className="d-block w-100"
            src="https://cdn.dribbble.com/users/1615584/screenshots/15710288/media/e35687bef5076a9f0a5d85a80a4688f2.jpg?compress=1&resize=400x300&vertical=top"
            alt="Meals App img"
          />
          <p>
            App de backend hehcha con node.js, niveles de acceso, jwt donde
            podras crear usuario, ingresar tu restaurante, comercializar tus
            productos y simular compra de comidas
          </p>
          <a
            href="https://github.com/juandahernandez/MealsApp"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <i class="fa-brands fa-github"></i>
            </button>
          </a>
        </Modal>

        <Modal isOpen={isOpenWeather} closeModal={closeWeather}>
          <h3>Weather App</h3>
          <img
            className="d-block w-100"
            src="https://t4.ftcdn.net/jpg/03/85/33/67/360_F_385336798_Pqhcex5Y1FYWAVKnypzaeKeJHhO9saC8.jpg"
            alt="Wheather App"
          />
          <p>
            Consumiento api del clima con react, una para buscar por ciudad y la
            otra para optener datos del clima del lugar donde te
            encuentras(debes permitit el acceso a tu ubicacion)
          </p>
          <a href="https://3hzxl.csb.app/" target="_blank" rel="noreferrer">
            <button>
              <i class="fa-brands fa-chrome"></i>
            </button>
          </a>
          <a
            href="https://api-clima-react-sigma.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <i class="fa-brands fa-chrome"></i>
            </button>
          </a>
        </Modal>

        <Modal isOpen={isOpenUsers} closeModal={closeUsers}>
          <h3>Users App</h3>
          <img
            className="d-block w-100"
            src="https://ifixar.com.br/wp-content/uploads/2019/03/registropessoafisica.png"
            alt="Users App img"
          />
          <p>
            Simulando un registro de usuarios, listando los usuarios recien
            creados
          </p>
          <a
            href="https://codesandbox.io/s/api-users-8dyi8"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              {" "}
              <i class="fa-brands fa-chrome"></i>
            </button>
          </a>
        </Modal>

        <Modal isOpen={isOpenGitHub} closeModal={closeGitHub}>
          <h3>Git hub</h3>
          <img
            className="d-block w-100"
            src="https://blogthinkbig.com/wp-content/uploads/sites/4/2020/06/GitHub-Desktop-Logo.jpg?fit=1500%2C1000"
            alt="Git hub img"
          />
          <p>
            Consumiendo la api de github con react, donde podras buscar un
            susuario, ver sus reposotorios, sus seguidores, sus seguidos y sus
            repositorios.
          </p>
          <a
            href="https://github-api-omega-gold.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button>
              <i class="fa-brands fa-chrome"></i>
            </button>
          </a>
        </Modal>
      </div>
    </>
  );
};

export default SliderWithReactBoostrap;
