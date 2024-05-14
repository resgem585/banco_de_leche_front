import { DonanteForm } from "../components/DonanteForm";
import SideBar from "../components/SideBar";

export const Donante = () => {
  return (
    <>
      <div className="app-container">
      <SideBar />
      <div className="content-container">
        <DonanteForm />
      </div>
    </div>
    </>
  )
}
