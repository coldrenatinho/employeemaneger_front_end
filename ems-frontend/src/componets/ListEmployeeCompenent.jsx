import React, { useEffect, useState } from "react";
// Importa a função que busca os funcionários da API
import { listEmployees } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

// Componente funcional que exibe a lista de funcionários
const ListEmployeeCompenent = () => {
  // Hook de estado para armazenar os funcionários
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  // useEffect executa a busca dos funcionários quando o componente é montado
  useEffect(() => {
    // Chama a função que faz a requisição para a API
    listEmployees()
      .then((Response) => {
        // Atualiza o estado com os dados recebidos da API
        setEmployees(Response.data);
      })
      .catch((error) => {
        // Exibe erros no console, caso ocorram
        console.error(error);
      });
  }, []); // O array vazio faz o efeito rodar só uma vez (montagem)

  function addNewEmployee() {
    navigate("/add-employee/_add");
  }

  return (
    <div className="container">
      {/* Título centralizado */}
      <h2 className="text-center" style={{ padding: "1vw" }}>
        Lista de Empregados
      </h2>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <button
          type="button"
          className="btn btn-primary"
          style={{
            flexShrink: 1,
            flexGrow: 1,
            flexBasis: "10vw",
            padding: "20px",
            margin: "40px",
          }}
          onClick={() => {
            addNewEmployee();
          }}
        >
          Adicionar
        </button>
      </div>
      {/* Tabela estilizada com Bootstrap */}
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th>Primeiro Nome</th>
            <th>Último Nome</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            // Retorna uma linha da tabela com os dados do funcionário
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeCompenent;
