import SideBar from "../components/SideBar"
import CalidadView from "../components/CalidadView"
import './../styles/home.scss'

export const ListaCalidades = () => {
  return (
    <>
      <div className="app-container">
        <SideBar />
        <div className="content-container">
          <CalidadView />
        </div>
      </div>
    </>
  )
}