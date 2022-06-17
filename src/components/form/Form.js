import React from "react";
import emailjs from "emailjs-com";
import "./Form.css";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7vjy821",
        "template_19skj2l",
        e.target,
        "5oAtdR_LzNak9PFOr"
      )
      .then((res) => {
        alert("enviado correctamente");
        console.log(res);
      })
      .catch((error) => console.log(error));

    e.target.reset();
  };

  return (
    <>
      <a name="Form" id="Form" href="/#">
        {" "}
      </a>
      <div className="container-form">
        <section className="background-img">
          <div className="container-inputs">
            <h3>Contactame</h3>
            <form onSubmit={sendEmail}>
              <div className="input-container">
                <label htmlFor="firs_name">
                  <i class="fas fa-user-tie"></i>
                </label>
                <input
                  name="user_name"
                  placeholder="Nombre"
                  type="text"
                  id="name"
                />
              </div>

              <div className="input-container">
                <label htmlFor="email">
                  <i class="fas fa-envelope-open-text"></i>
                </label>
                <input
                  name="user_email"
                  placeholder="Correo"
                  type="email"
                  id="email"
                />
              </div>

              <div className="input-container">
                <label htmlFor="Mensaje">
                  <i class="fa-solid fa-text"></i>
                </label>
                <textarea
                  name="user_text"
                  placeholder="Mensaje"
                  type="text"
                  id="Mensaje"
                />
              </div>

              <button>Submit</button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Form;
