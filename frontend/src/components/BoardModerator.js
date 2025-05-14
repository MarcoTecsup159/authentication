import React from 'react';

const BoardModerator = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-body text-center">
              <h3 className="card-title text-success fw-bold">Moderator Board</h3>
              <p className="card-text mt-3">
                Bienvenido a la vista de moderador. Aquí puedes gestionar contenido y moderar las interacciones de los usuarios.
              </p>
              <button className="btn btn-success mt-4">Revisar Contenido</button>
              <button className="btn btn-outline-success mt-4 ms-3">Gestionar Comentarios</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardModerator;