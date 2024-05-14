import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUTATIONS
import { CREATE_DONANTE } from "../graphql/Mutation";
import { GET_DONANTES } from "../graphql/Queries";

export const DonanteForm = () => {
  const navigate = useNavigate();

  // Estados para el formulario
  const [tipo, setTipo] = useState("");
  const [firstName, setFirstName] = useState("");
 

  // Mutación para crear un donante
  const [createDonante] = useMutation(CREATE_DONANTE, {
    refetchQueries: [{ query: GET_DONANTES }],
  });

  // Estado para mostrar el mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createDonante({
      variables: {
        tipo,
        firstName,
      },
    });

    // Mostrar el mensaje de éxito
    setShowSuccessMessage(true);
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
            {" "}
            Agregar Donante{" "}
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