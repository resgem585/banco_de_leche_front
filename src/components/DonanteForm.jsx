import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_CALIDAD } from "../graphql/Mutation";

// MUTATIONS
import { CREATE_DONANTE } from "../graphql/Mutation";
import { GET_DONANTES } from "../graphql/Queries";
import { GET_CALIDADES } from "../graphql/Queries";

export const DonanteForm = () => {
  const navigate = useNavigate();

  // Estados para el formulario
  const [tipo, setTipo] = useState("");
  const [firstName, setFirstName] = useState("");

  // Mutación para crear un donante
  const [createDonante] = useMutation(CREATE_DONANTE, {
    refetchQueries: [{ query: GET_DONANTES }],
  });

  // Mutación para crear una calidad
  const [createCalidad] = useMutation(CREATE_CALIDAD, {
    refetchQueries: [{ query: GET_CALIDADES }],
  })

  // Estado para mostrar el mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(firstName);
  
    try {
      // Crear la instancia de Donante
      const { data: { createDonante: donante } } = await createDonante({
        variables: {
          firstName: firstName,
        },
      });
  
      // Comprobar que 'donante' y 'donante.firstName' no son nulos
      if (donante && donante.firstName) {
        // Crear la instancia de Calidad relacionada con el Donante
        const { data: { createCalidad: calidad } } = await createCalidad({
          variables: {
            donante: donante.firstName,
            olor: 'Cumple', // Puedes establecer un valor predeterminado o dejarlo vacío
          },
        });
  
        // Acceder a los datos del Donante relacionado
        const { donante: donanteRelacionado } = calidad;
        console.log('Donante relacionado:', donanteRelacionado);
  
        // Mostrar el mensaje de éxito
        setShowSuccessMessage(true);
      } else {
        console.error("Error: 'donante' o 'donante.firstName' es nulo");
      }
    } catch (error) {
      console.error("Error al crear Donante y Calidad:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="row form-group mb-2">
        <div class="col">
          <label for="tipo">Tipo</label>
          <select
            class="form-select"
            id="tipo"
            name="tipo"
            required
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="Homóloga">Homóloga</option>
            <option value="Heteróloga">Heteróloga</option>
          </select>
        </div>
        <div class="col">
          <label for="firstName">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div class="mb-4"></div>
        <div class="form-group mb-4">
          <button type="submit" class="btn btn-primary">
            {" "}Agregar Donante{" "}
          </button>
        </div>

        {showSuccessMessage && (
          <div class="alert alert-success">
            Registro Exitoso!{" "}
            <a href="/listaDonadoras" class="alert-link">
              VER REGISTRO
            </a>
          </div>
        )}
      </div>
    </form>
  );
};