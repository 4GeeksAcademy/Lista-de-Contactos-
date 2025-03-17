const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			listcontact: []
			// estoy almacenando la variale "listcontact"
			

		},
		// listcontact: []

		actions: {

			createagenda: () => {
				// aqui estoy creando la agenda martes 
				fetch("https://playground.4geeks.com/contact/agendas/martes", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(),
				})
					.then((response) => {

						return response.json();
					})
					.then((data) => {
						console.log(data);

					})
					.catch((error) => console.error(error));

			},

             //aqui estoy consiguinedo los contactos de la agenda 
			getcontacts: () => {

				fetch("https://playground.4geeks.com/contact/agendas/martes")
					.then((response) => {
						if (response.status == 404) {
							getActions().createagenda()
						}

						if (response.ok) {
							return response.json();
						}

						else {

							throw new Error("Error al obtener las tareas");
						}
					})
					.then((data) => {
						setStore({ listcontact: data.contacts });

					})
					.catch((error) => console.error(error));


			},
// estoy agregando un nuevo usuarion sin la necesidad de utilizar el método GET
            añadircontacto: (contact) => {
				
				const store = getStore() 
			    setStore({...store,listcontact:[...store.listcontact, contact] })
				},

// estoy creando un usuario dentro del servidor 

				crearusuario: (usuarionuevo) => {
					fetch("https://playground.4geeks.com/contact/agendas/4geeks-user/martes", {
						method: "POST",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(
							usuarionuevo
						),
					})
						.then((response) => response.json())
						.then((data) => {
							console.log(data);
							const actions = getActions(); 
							actions.añadircontacto(data); 
							console.log("Contact added:", data);
						})
						.catch((error) => console.log(error));
				},

				// Estamos elimianando un usuario de la lista mediante el id, utilizo el metodo filter en la la "Listcontacts" para que me devuelva(me filtre) el usuario elimiando.

				borrarcontacto: (id) => {
					fetch(`https://playground.4geeks.com/contact/agendas/4geeks-user/martes/${id}`, {
						method: "DELETE",
					})
						.then((response) => {
							console.log(response)
							if (response.ok) {
								const store = getStore();
								const actualizacionContacto = store.listcontact.filter(contact => contact.id !== id);
								setStore({ listcontact: actualizacionContacto });
								console.log(`Contact with ID ${id} deleted`);
							} else {
								console.log("Error deleting contact");
							}
						})
						.catch((error) => console.log(error));
				},


				editarcontacto: (id, contact) => {
					const store = getStore()
					fetch(`https://playground.4geeks.com/contact/agendas/4geeks-user/martes/${id}`, {
						method: "PUT",
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
						.then((response) => {
							if (response.ok) {
								return response.json()
							}
						})
						.then((data) => {
							if (data) {
								const listacorregida = store.listcontact.map(contact => {
									if (contact.id == id) {
										contact = data // Estoy remplazando el contacto viejo por el actualizado
									}
									return contact
								})
								setStore({ listcontact: listacorregida })
							}
						})
						.catch((error) => console.log(error));
	
	
				}

		    
		}
	}
};

export default getState;

// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
