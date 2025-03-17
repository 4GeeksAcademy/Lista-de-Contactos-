
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import CardContact from "../component/CardContact.jsx";

const Contacts = () => {

    const { store, actions } = useContext(Context)
    console.log(store.listcontact)

    useEffect(() => {
        
    }, [])

    return (

        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/AddContact">
                    <button className="btn btn-success">Add New contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listcontact && store.listcontact.length > 0 && store.listcontact.map((contact, index) => {
                    return (
                        <CardContact contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};
export default Contacts;





























// import React, { useState, useEffect, useRef, useContext } from "react"; // Hooks de React
// import { Link } from 'react-router-dom'; // Componente para navegación
// import { Context } from "../store/appContext.js"; // Contexto global
// import Card from "../component/CardContact.jsx"; // Componente para renderizar cada contacto

// // Definición del componente principal
// export const Home = () => {

//     // Obtenemos el estado global (store) y las acciones (actions) desde el contexto
//     const { store, actions } = useContext(Context);
//     console.log(store.listcontact); // Mostramos en consola la lista de contactos desde el estado global


//     // useEffect(() => {
//     //     // Código que se ejecutaría al montar el componente o cuando cambien las dependencias
//     // }, []);

//     // Renderizamos el componente
//     return (
//         <div className="w-75 mx-auto"> {/* Contenedor principal centrado */}
//             {/* Botón para agregar un nuevo contacto */}
//             <div className="d-flex justify-content-end">
//                 <Link to="/Demo"> {/* Navega a la página de agregar contacto */}
//                     <button className="btn btn-success">Add New Contact</button>
//                 </Link>
//             </div>

//             {/* Lista de contactos */}
//             <ul className="list-group mt-3">
//                 {/* Comprobamos que existan contactos en la lista antes de mapearla */}
//                 {store.listcontact && store.listcontact.length > 0 &&
//                     store.listcontact.map((contact, index) => {
//                         return (
//                             // Renderizamos un componente CardContact para cada contacto
//                             <Card contact={contact} key={index} />
//                         );
//                     })
//                 }
//             </ul>
//         </div>
//     );
// };

// // Exportamos el componente para usarlo en otras partes de la aplicación



