import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../store/appContext.js";


const AddContact = () => {

    const { store, actions } = useContext(Context)
    let navigate = useNavigate();
    const { id } = useParams(); //se obtine el id colocado en el layout

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    function guardarContacto(e) {
        e.preventDefault()
        if (name.trim() == "" || phone.trim() == "" || email.trim() == "" || address.trim() == "") {
            alert("Empty fields")
            return null
        }
        const payload = {
            name: name,
            phone: phone,
            email: email,
            address: address
        };

         

        if (!id) {
            actions.guardarContacto(payload)
        } else {
            actions.editContact(id, payload)
        }
        alert("Se grabo los datos del contacto");

        // Redirigir a la página de contactos después de guardar
        navigate("/Contacts");
         // Limpiar el formulario si es un nuevo contacto
        setName("");
        setPhone("");
        setEmail(""),
        setAddress("");

    }

    useEffect(() => {
        if (id && store.listcontact.length > 0) {
            const currentContact = store.listcontact.find(contact => contact.id == id)
            setName(currentContact.name)
            setPhone(currentContact.phone)
            setEmail(currentContact.email)
            setAddress(currentContact.address)
        }
    }, [id, store.listcontact])

    return (
        <div className="container">
            <h1 className="text-center">{!id ? "Add a New Contact" : `Editing Contact: ${name}`}</h1>

            <form className="container" onSubmit={guardarContacto}>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput1" placeholder="Full name" onChange={(e) => setName(e.target.value)} value={name} required />

                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
                    <input type="text" className="form-control" id="formGroupExampleInput3" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} value={phone} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} value={address} required />
                </div>
                <div className="mb-3">
                   
                    <button type="submit" className="btn btn-primary" > Save</button>
                    
                </div>
            </form>

            <Link to="/">volver a Contacts</Link>
        </div>
    );


};
export default AddContact;


































// import React, { useState, useEffect, useContext } from "react"; // Hooks para manejar el estado, efectos secundarios y contexto
// import { Link, useNavigate, useParams } from "react-router-dom"; // Navegación y obtención de parámetros de la URL
// import { Context } from "../store/appContext.js"; // Contexto global de la aplicación

// // Definición del componente principal
// const demo = () => {
//     // Accedemos al estado global (store) y a las acciones (actions) desde el contexto
//     const { store, actions } = useContext(Context);

//     // Hook para manejar la navegación entre rutas
//     let navigate = useNavigate();

//     // Hook para obtener el parámetro "id" desde la URL
//     const { id } = useParams();

//     // Estados locales para almacenar los datos del formulario
//     const [name, setName] = useState(""); // Nombre del contacto
//     const [phone, setPhone] = useState(""); // Teléfono del contacto
//     const [email, setEmail] = useState(""); // Correo electrónico del contacto
//     const [address, setAddress] = useState(""); // Dirección del contacto

//     // Función para guardar el contacto (crear o editar)
//     function guardarContacto(e) {
//         e.preventDefault(); // Evita que el formulario recargue la página al enviarse

//         // Validamos que todos los campos estén llenos
//         if (name.trim() === "" || phone.trim() === "" || email.trim() === "" || address.trim() === "") {
//             alert("Empty fields"); // Muestra un mensaje si algún campo está vacío
//             return null; // Sale de la función sin realizar acciones
//         }

//         // Creamos un objeto con los datos del contacto
//         const payload = {
//             name: name,
//             phone: phone,
//             email: email,
//             address: address
//         };

//         // Determinamos si estamos creando un contacto nuevo o editando uno existente
//         if (!id) {
//             actions.createContact(payload); // Acción para crear un nuevo contacto
//         } else {
//             actions.editContact(id, payload); // Acción para editar un contacto existente
//         }

//         // Mensaje de éxito y redirección a la página principal
//         alert("Se grabó los datos del contacto");
//         navigate("/"); // Navega a la página principal

//         // Limpia los campos del formulario
//         setName("");
//         setPhone("");
//         setEmail("");
//         setAddress("");
//     }

//     // Efecto que se ejecuta al cargar el componente o al cambiar el id o los contactos
//     useEffect(() => {
//         if (id && store.listContacts.length > 0) {
//             // Busca el contacto actual por su id
//             const currentContact = store.listContacts.find(contact => contact.id == id);

//             // Rellena los estados con los datos del contacto encontrado
//             setName(currentContact.name);
//             setPhone(currentContact.phone);
//             setEmail(currentContact.email);
//             setAddress(currentContact.address);
//         }
//     }, [id, store.listContacts]); // Dependencias del efecto: se ejecuta cuando cambian el id o la lista de contactos

//     // Renderizado del formulario y de la interfaz
//     return (
//         <div className="container">
//             {/* Título dinámico: cambia según si estamos creando o editando un contacto */}
//             <h1 className="text-center">{!id ? "Add a New Contact" : `Editing Contact: ${name}`}</h1>

//             {/* Formulario */}
//             <form className="container" onSubmit={guardarContacto}>
//                 {/* Campo para el nombre */}
//                 <div className="mb-3">
//                     <label htmlFor="formGroupExampleInput1" className="form-label">Full Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="formGroupExampleInput1"
//                         placeholder="Full name"
//                         onChange={(e) => setName(e.target.value)} // Actualiza el estado al cambiar el valor
//                         value={name} // Asigna el valor del estado al campo
//                         required // Campo obligatorio
//                     />
//                 </div>

//                 {/* Campo para el correo */}
//                 <div className="mb-3">
//                     <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="formGroupExampleInput2"
//                         placeholder="Enter email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         value={email}
//                         required
//                     />
//                 </div>

//                 {/* Campo para el teléfono */}
//                 <div className="mb-3">
//                     <label htmlFor="formGroupExampleInput3" className="form-label">Phone</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="formGroupExampleInput3"
//                         placeholder="Enter phone"
//                         onChange={(e) => setPhone(e.target.value)}
//                         value={phone}
//                         required
//                     />
//                 </div>

//                 {/* Campo para la dirección */}
//                 <div className="mb-3">
//                     <label htmlFor="formGroupExampleInput4" className="form-label">Address</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="formGroupExampleInput4"
//                         placeholder="Enter address"
//                         onChange={(e) => setAddress(e.target.value)}
//                         value={address}
//                         required
//                     />
//                 </div>

//                 {/* Botón para guardar el contacto */}
//                 <div className="mb-3">
//                     <button type="submit" className="btn btn-primary">Save</button>
//                 </div>
//             </form>

//             {/* Enlace para volver a la página principal */}
//             <Link to="/">volver a Contacts</Link>
//         </div>
//     );




// };
// export default demo;