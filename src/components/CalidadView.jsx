import { useQuery, useMutation } from "@apollo/client";
import { GET_CALIDADES } from "../graphql/Queries";
import { DELETE_CALIDAD } from "../graphql/Mutation";
import { Link } from "react-router-dom";

const CalidadView = () => {
  const { loading, error, data, refetch } = useQuery(GET_CALIDADES);
  const [deleteCalidad] = useMutation(DELETE_CALIDAD);

  const handleDeleteCalidad = async (calidadId) => {
    try {
      await deleteCalidad({ variables: { _id: calidadId } });
      // Refetch the quality list after deletion
      refetch();
    } catch (error) {
      console.error("Error deleting quality:", error);
    }
  };

  if (loading) return "Cargando calidades...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h2>Calidades</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Donante</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.getCalidades.map((calidad) => (
            <tr key={calidad._id}>
              <td>{calidad.donante.firstName}</td>
              <td>
                <Link
                  to={`/CalidadDetalles/${calidad._id}`}
                  className="btn btn-primary me-2"
                >
                  <i className="bi bi-eye"></i>
                </Link>
                <Link
                  to={`/EditarCalidad/${calidad._id}`}
                  className="btn btn-warning me-2"
                >
                  <i className="bi bi-pencil"></i>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCalidad(calidad._id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalidadView;