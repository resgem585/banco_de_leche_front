import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DONANTE } from '../graphql/Queries';
import { UPDATE_DONANTE } from '../graphql/Mutation';

const EditDonante = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DONANTE, {
    variables: { id },
  });

  const [tipo, setTipo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (data && data.getDonante) {
      const { tipo, firstName } = data.getDonante;
      setTipo(tipo);
      setFirstName(firstName);
    }
  }, [data]);

  const [updateDonante] = useMutation(UPDATE_DONANTE, {
    onCompleted: () => {
      setSuccessMessage("Se han guardado los cambios.");
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDonante({
      variables: {
        _id: id,
        tipo,
        firstName,
      },
    });
  };

  if (loading) return "Cargando detalles del donante...";
  if (error) return `Error: ${error.message}`;

  return (
    <div className="container">
      <h1>Editar Donante</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">Tipo</label>
          <input type="text" className="form-control" id="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Actualizar</button>
      </form>
      {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
    </div>
  );
}

export default EditDonante;