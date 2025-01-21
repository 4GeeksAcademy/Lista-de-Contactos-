import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react'; // hook que me permite acceder ah lo que tengo dentro de flux que es el store y actions
import { Context } from '../store/appContext'; // accedo al estado global de la app (appContext.js)


// le estoy asigando un prop a esta funcion "El objeto conctact tiene la informacion del contacto"
export const Card = (contact) => {

  
  // ahora tengo que acceder al contexto global para poder acceder a lo que quiera utilizar de la store y actions 
  const { store, actions } = useContext(Context);

  // Creo una funcion para eleminira el contacto cuando se lo integre al imput "X", aqui estaria llamando al fecth delete creado en "actions"

  const erradicarContacto = () => {
    console.log(contact);
    actions.borrarcontacto(contact.id);
};

  return (

    <div className="card mb-3" style={{ maxWidth: "700px" }}>
      <div className="row g-0">
        {/* Imagen del contacto */}
        <div className="col-md-3">
          <img
            src="https://via.placeholder.com/150"
            className="img-fluid rounded-circle p-2"
            alt="profile picture"
          />
        </div>

        
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text mb-1">
              <i className="bi bi-geo-alt-fill"></i> {contact.address}
            </p>
            <p className="card-text mb-1">
              <i className="bi bi-telephone-fill"></i> {contact.phone}
            </p>
            <p className="card-text">
              <i className="bi bi-envelope-fill"></i> {contact.email}
            </p>
          </div>
        </div>

        
        <div className="col-md-2 d-flex align-items-center justify-content-center">  

          {/* Botón de editar */}
          <Link to={`/edit/${contact.id}`} className="btn btn-link p-0 me-2">
            <i className="bi bi-pencil-fill"></i>
          </Link>

          {/* Botón de eliminar */}
          <button
            className="btn btn-link p-0 text-danger"
            onClick={erradicarContacto} // "Con el evento onclik le astoy asicnando la funcion erradicarcontato "
          >
            <i className="bi bi-trash-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );

};

