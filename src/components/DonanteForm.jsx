import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CREATE_CALIDAD } from "../graphql/Mutation";
import { CREATE_DONANTE } from "../graphql/Mutation";
import { GET_DONANTES } from "../graphql/Queries";
import { GET_CALIDADES } from "../graphql/Queries";
import '../css/main.css';

export const DonanteForm = () => {
  const navigate = useNavigate();

  const [tipo, setTipo] = useState("");
  const [firstName, setFirstName] = useState("");

  const [createDonante] = useMutation(CREATE_DONANTE, {
    refetchQueries: [{ query: GET_DONANTES }],
  });

  const [createCalidad] = useMutation(CREATE_CALIDAD, {
    refetchQueries: [{ query: GET_CALIDADES }],
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: { createDonante: donante } } = await createDonante({
        variables: {
          firstName: firstName,
        },
      });

      if (donante && donante._id) {  // Asegúrate de usar el ID del donante
        const { data: { createCalidad: calidad } } = await createCalidad({
          variables: {
            input: {
              donante: donante._id,  // Pasa el ObjectId aquí
              olor: 'Cumple', 
            },
          },
        });

        const { donante: donanteRelacionado } = calidad;
        console.log('Donante relacionado:', donanteRelacionado);

        setShowSuccessMessage(true);
      } else {
        console.error("Error: 'donante' o 'donante._id' es nulo");
      }
    } catch (error) {
      console.error("Error al crear Donante y Calidad:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row form-group mb-2">
        <div className="col">
          <label htmlFor="tipo">Tipo</label>
          <select
            className="form-select"
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
        <div className="col">
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div className="mb-4"></div>
        <div className="form-group mb-4">
          <button type="submit" className="btn btn-primary">
            Agregar Donante
          </button>
        </div>

        {showSuccessMessage && (
          <div className="alert alert-success">
            Registro Exitoso!{" "}
            <a href="/listaDonadoras" className="alert-link">
              VER REGISTRO
            </a>
          </div>
        )}
      </div>
    </form>
  );
};
