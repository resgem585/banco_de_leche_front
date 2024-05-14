import { useParams } from 'react-router-dom';
import EditDonante from "../components/EditDonante";
import SideBar from '../components/SideBar';
import './../styles/home.scss'

 
export const EditarDonante = () => {
  const { id } = useParams();

  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <EditDonante donanteId={id} /> 
        </div>
      </div>
    </>
  )
}

export default EditarDonante;
