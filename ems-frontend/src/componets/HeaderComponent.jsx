import React from "react";

const HeaderComponent = () => {
  return (
    <div>
      <header
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          minHeight: "100px",
          display: "flex",
          width: "100%",
        }}
      >
        <nav
          className="navbar navbar-dark bg-dark"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <a className="navbar-brand" href="#">
            Sistema de Gerenciamento
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
