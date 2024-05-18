import { useParams } from 'react-router-dom';
import CalidadDetails from "../components/CalidadDetails";
import SideBar from "../components/SideBar";

export const CalidadDetalles = () => {
  const { id } = useParams();

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <CalidadDetails calidadId={id} />
        </div>
      </div>
    </>
  )
}