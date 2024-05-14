import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DONANTE } from '../graphql/Queries';

const DonanteDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_DONANTE, {
    variables: { id },
  });

  if (loading) return "Cargando detalles de la donante...";
  if (error) return `Error: ${error.message}`;

  const donante = data.getDonante;

  return (
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{donante.firstName}</h1>
      </div>

      <div className="col py-3">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Registro Donadoras</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {donante.firstName}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <ul className="list-group">
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Tipo:</b>
            </div>
            <div className="col">{donante.tipo}</div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col" style={{ maxWidth: '140px' }}>
              <b>Nombre:</b>
            </div>
            <div className="col">{donante.firstName}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DonanteDetails;