import { useQuery, useMutation } from "@apollo/client";
import { GET_DONANTES } from "../graphql/Queries";
import { Link } from "react-router-dom";
import { DELETE_DONANTE } from "../graphql/Mutation";

const RegistroDonadoras = () => {
  const { loading, error, data, refetch } = useQuery(GET_DONANTES);
  const [deleteDonante] = useMutation(DELETE_DONANTE);

  const handleDeleteDonante = async (donanteId) => {
    try {
      await deleteDonante({ variables: { _id: donanteId } });
      // Refetch the donor list after deletion
      refetch();
    } catch (error) {
      console.error("Error deleting donor:", error);
    }
  };

  if (loading) return "Cargando donantes...";
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <h2>Registro de Donadoras</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tipo</th>
           
            <th>Nombre</th>
            
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {data.getDonantes.map((donante) => (
            <tr key={donante._id}>
              <td>{donante.tipo}</td>
              <td>{donante.firstName}</td>
              
              <td>
                <Link
                  to={`/DonanteDetalles/${donante._id}`}
                  className="btn btn-primary me-2"
                >
                  <i className="bi bi-eye"></i>
                </Link>
                <Link
                  to={`/EditarDonante/${donante._id}`}
                  className="btn btn-warning me-2"
                >
                  <i className="bi bi-pencil"></i>
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteDonante(donante._id)}
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

export default RegistroDonadoras;
