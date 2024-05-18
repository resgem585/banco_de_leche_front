import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CALIDAD } from '../graphql/Queries';

const CalidadDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CALIDAD, {
    variables: { id },
  });

  if (loading) return "Cargando detalles de la calidad...";
  if (error) return `Error: ${error.message}`;

  const calidad = data.getCalidad;

  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{calidad.nombre}</h1>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>SDG:</b>
            </div>
            <div className="col">{calidad.sdg}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default CalidadDetails;