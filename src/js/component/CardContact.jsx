import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const CardContact = ({ contact }) => {
    const { store, actions } = useContext(Context)

    const eliminarContacto = () => {
        console.log(contact)
        actions.borrarcontacto(contact.id);
    };

    return (
        <li className="list-group-item d-flex justify-content-center">
            <div className="d-flex align-items-center w-75">
                <div className="col-md-3 d-flex justify-content-center">
                    <img
                        className="rounded-circle"
                        src="https://picsum.photos/170/170/"
                        alt="Contact"

                    />
                </div>
                <div className="col-md-6">
                    <h5 className="card-title mb-1">{contact.name}</h5>
                    <p className="card-text mb-1">{contact.address}</p>
                    <p className="card-text mb-1">{contact.phone}</p>
                    <p className="card-text mb-1">{contact.email}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <Link to={"/editContact/" + contact.id} className="btn btn-link p-0 me-3">
                        <i className="fa fa-eraser"></i>
                    </Link>
                    {/* <button className="btn btn-link p-0" onClick={eliminarContacto}>
                        <i className="fa fa-trash fa-lg"></i>
                    </button> */}
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                        <i className="fa fa-trash fa-lg"></i>
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    If you delete this thing the etire universe will go down!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes baby!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default CardContact
































// import React from "react";
// import { Link } from "react-router-dom";
// import { useContext } from 'react'; // hook que me permite acceder ah lo que tengo dentro de flux que es el store y actions
// import { Context } from '../store/appContext'; // accedo al estado global de la app (appContext.js)


// // le estoy asigando un prop a esta funcion "El objeto conctact tiene la informacion del contacto"
// export const Card = ({contact}) => {

  
//   // ahora tengo que acceder al contexto global para poder acceder a lo que quiera utilizar de la store y actions 
//   const { store, actions } = useContext(Context);

//   // Creo una funcion para eleminira el contacto cuando se lo integre al imput "X", aqui estaria llamando al fecth delete creado en "actions"

//   const erradicarContacto = () => {
//     console.log(contact);
//     actions.borrarcontacto(contact.id);
// };

//   return (

//     <div className="card mb-3" style={{ maxWidth: "700px" }}>
//       <div className="row g-0">
//         {/* Imagen del contacto */}
//         <div className="col-md-3">
//           <img
//             src="https://via.placeholder.com/150"
//             className="img-fluid rounded-circle p-2"
//             alt="profile picture"
//           />
//         </div>

        
//         <div className="col-md-7">
//           <div className="card-body">
//             <h5 className="card-title">{contact.name}</h5>
//             <p className="card-text mb-1">
//               <i className="bi bi-geo-alt-fill"></i> {contact.address}
//             </p>
//             <p className="card-text mb-1">
//               <i className="bi bi-telephone-fill"></i> {contact.phone}
//             </p>
//             <p className="card-text">
//               <i className="bi bi-envelope-fill"></i> {contact.email}
//             </p>
//           </div>
//         </div>

        
//         <div className="col-md-2 d-flex align-items-center justify-content-center">  

//           {/* Botón de editar */}
//           <Link to={`/edit/${contact.id}`} className="btn btn-link p-0 me-2">
//             <i className="bi bi-pencil-fill"></i>
//           </Link>

//           {/* Botón de eliminar */}
//           <button
//             className="btn btn-link p-0 text-danger"
//             onClick={erradicarContacto} // "Con el evento onclik le astoy asicnando la funcion erradicarcontato "
//           >
//             <i className="bi bi-trash-fill"></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );

// };

