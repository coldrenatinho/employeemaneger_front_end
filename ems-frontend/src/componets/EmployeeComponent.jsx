import React, { useState } from "react";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const handleLastNameChange = (event) => setLastName(event.target.value);
  const handleEmailNameChange = (event) => setEmailId(event.target.value);

  const savedEmployee = (event) => {
    event.preventDefault();
    const employee = { firstName, lastName, emailId };
    console.log(employee);
  };

  return (
    <div>
      <div className="container">
        <br></br>
        <div className="row">
          <div className="card col-md-6 mx-auto">
            <h2 className="text-center">Adicionar Empregado</h2>
            <div className="card-body">
              <form action="">
                <div className="form-group nb-2">
                  <label htmlFor="" className="form-label">
                    Primeiro nome:
                  </label>
                  <input
                    type="text"
                    name="fitstName"
                    id="firstName"
                    placeholder="Digite o primeiro nome do empregado"
                    value={firstName}
                    className="form-control"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="form-group nb-2">
                  <label htmlFor="" className="form-label">
                    Sobre noome:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Digite o sobrenome do empregado"
                    value={lastName}
                    className="form-control"
                    onChange={(event) => handleLastNameChange(event)}
                  />
                </div>
                <div className="form-group nb-2">
                  <label htmlFor="" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="emmailId"
                    placeholder="Digite o email do empregado"
                    value={emailId}
                    className="form-control"
                    onChange={(event) => handleEmailNameChange(event)}
                  />
                </div>
                <br />
                <div className="container">
                  <button
                    className="btn btn-success btn-lg w-100"
                    type="button"
                    onClick={savedEmployee}
                  >
                    Salvar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
