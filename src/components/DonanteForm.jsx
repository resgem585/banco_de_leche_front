import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// MUTATIONS
import { CREATE_DONANTE } from "../graphql/Mutation";
import { GET_DONANTES } from "../graphql/Queries";

export const DonanteForm = () => {
  const navigate = useNavigate();

  // Estados para el formulario
  const [tipo, setTipo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [edad, setEdad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [partos, setPartos] = useState("");
  const [cesareas, setCesareas] = useState("");
  const [apellidosRNLactante, setApellidosRNLactante] = useState("");
  const [sdg, setSdg] = useState("");
  const [fechaNacimRN, setFechaNacimRN] = useState("");
  const [complicacionesEmbarazo, setComplicacionesEmbarazo] = useState("");
  const [transfusionesUltimos5Anos, setTransfusionesUltimos5Anos] = useState("");
  const [tatuajesPiercingsAcupunturaUltimoAno, setTatuajesPiercingsAcupunturaUltimoAno] = useState(
    ""
  );
  const [tratamientoMedico, setTratamientoMedico] = useState("");
  const [pruebaRapidaSifilis, setPruebaRapidaSifilis] = useState("");
  const [pruebaRapidaVIH, setPruebaRapidaVIH] = useState("");
  const [pruebaRapidaHepatitisC, setPruebaRapidaHepatitisC] = useState("");
  const [observaciones, setObservaciones] = useState("");

  // Mutación para crear un donante
  const [createDonante] = useMutation(CREATE_DONANTE, {
    refetchQueries: [{ query: GET_DONANTES }],
  });

  // Estado para mostrar el mensaje de éxito
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createDonante({
      variables: {
        tipo,
        firstName,
        lastName,
        edad: parseInt(edad),
        direccion,
        ocupacion,
        partos: parseInt(partos),
        cesareas: parseInt(cesareas),
        apellidosRNLactante,
        sdg: parseInt(sdg),
        fechaNacimRN,
        complicacionesEmbarazo,
        transfusionesUltimos5Anos,
        tatuajesPiercingsAcupunturaUltimoAno,
        tratamientoMedico,
        pruebaRapidaSifilis,
        pruebaRapidaVIH,
        pruebaRapidaHepatitisC,
        observaciones,
      },
    });

    // Mostrar el mensaje de éxito
    setShowSuccessMessage(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row form-group mb-2">
        <div className="col">
          <label for="tipo">Tipo</label>
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
          <label for="firstName">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div className="col-sm-6">
          <label for="lastName">Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={lastName}
            required
            style={{ width: '28rem' }}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div className="row form-group mb-4">
          <div className="col-sm-2">
            <label for="edad" style={{ marginTop: "0.88rem" }}>
              {" "}
              Edad{" "}
            </label>
            <input
              type="number"
              className="form-control mt-2"
              id="edad"
              name="edad"
              value={edad}
              required
              min="1"
              onChange={(e) => setEdad(e.target.value)}
            />
          </div>
          <div className="col-sm-10">
            <label for="direccion" style={{ marginTop: "1rem" }}>
              {" "}
              Dirección{" "}
            </label>
            <input
              type="text"
              className="form-control form-control mt-2"
              id="direccion"
              name="direccion"
              value={direccion}
              required
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col-sm-6">
            <label for="ocupacion">Ocupación</label>
            <input
              type="text"
              class="form-control"
              id="ocupacion"
              name="ocupacion"
              value={ocupacion}
              onChange={(e) => setOcupacion(e.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div class="col-sm-6">
                <label for="partos">Partos</label>
                <input
                  type="number"
                  class="form-control"
                  id="partos"
                  name="partos"
                  value={partos}
                  onChange={(e) => setPartos(e.target.value)}
                />
              </div>
              <div className="col-sm-6">
                <label for="cesareas">Cesáreas</label>
                <input
                  type="number"
                  class="form-control"
                  id="cesareas"
                  name="cesareas"
                  value={cesareas}
                  onChange={(e) => setCesareas(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col-sm-6">
            <label for="apellidosRNLactante">
              {" "}
              Apellidos del RN o Lactante{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="apellidosRNLactante"
              name="apellidosRNLactante"
              value={apellidosRNLactante}
              onChange={(e) => setApellidosRNLactante(e.target.value)}
            />
          </div>
          <div class="col-sm-3">
            <label for="sdg">Semanas de gestación (SDG)</label>
            <input
              type="number"
              class="form-control"
              id="sdg"
              name="sdg"
              value={sdg}
              required
              onChange={(e) => setSdg(e.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <label for="fechaNacimRN">Fecha de Nacim. RN</label>
            <input
              type="date"
              class="form-control"
              id="fechaNacimRN"
              name="fechaNacimRN"
              value={fechaNacimRN}
              required
              onChange={(e) => setFechaNacimRN(e.target.value)}
            />
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col">
            <label for="complicacionesEmbarazo">
              {" "}
              ¿Ha tenido alguna complicación durante el embarazo?{" "}
            </label>
            <input
              type="text"
              class="form-control"
              id="complicacionesEmbarazo"
              name="complicacionesEmbarazo"
              value={complicacionesEmbarazo}
              onChange={(e) => setComplicacionesEmbarazo(e.target.value)}
            />
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col">
            <label for="transfusionesUltimos5Anos">
              {" "}
              ¿Ha recibido transfusiones en los últimos 5 años?{" "}
            </label>
            <select
              className="form-select"
              id="transfusionesUltimos5Anos"
              name="transfusionesUltimos5Anos"
              required
              value={transfusionesUltimos5Anos}
              onChange={(e) => setTransfusionesUltimos5Anos(e.target.value)}
            >
              <option value="">Seleccione una opción</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col">
            <label for="tatuajesPiercingsAcupunturaUltimoAno">
              {" "}
              ¿Tiene tatuajes, piercings o se ha realizado acupuntura en{" "}
              <br />
              el último año?{" "}
            </label>
            <select
              className="form-select"
              id="tatuajesPiercingsAcupunturaUltimoAno"
              name="tatuajesPiercingsAcupunturaUltimoAno"
              required
              value={tatuajesPiercingsAcupunturaUltimoAno}
              onChange={(e) =>
                setTatuajesPiercingsAcupunturaUltimoAno(e.target.value)
              }
            >
              <option value="">Seleccione una opción</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col">
            <label for="tratamientoMedico">Tratamiento médico</label>
            <input
              type="text"
              class="form-control"
              id="tratamientoMedico"
              name="tratamientoMedico"
              value={tratamientoMedico}
              onChange={(e) => setTratamientoMedico(e.target.value)}
            />
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col-sm-4">
            <label for="pruebaRapidaSifilis">Prueba Rapida Sifilis</label>
            <select
              className="form-select"
              id="pruebaRapidaSifilis"
              name="pruebaRapidaSifilis"
              required
              value={pruebaRapidaSifilis}
              onChange={(e) => setPruebaRapidaSifilis(e.target.value)}
            >
              <option value="">Seleccione una opción</option>
              <option value="No Reactivo">No Reactivo</option>
              <option value="Reactivo">Reactivo</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label for="pruebaRapidaVIH">Prueba Rapida VIH</label>
            <select
              className="form-select"
              id="pruebaRapidaVIH"
              name="pruebaRapidaVIH"
              required
              value={pruebaRapidaVIH}
              onChange={(e) => setPruebaRapidaVIH(e.target.value)}
            >
              <option value="">Seleccione una opción</option>
              <option value="No Reactivo">No Reactivo</option>
              <option value="Reactivo">Reactivo</option>
            </select>
          </div>
          <div className="col-sm-4">
            <label for="pruebaRapidaHepatitisC">
              {" "}
              Prueba Rápida Hepatitis C{" "}
            </label>
            <select
              className="form-select"
              id="pruebaRapidaHepatitisC"
              name="pruebaRapidaHepatitisC"
              required
              value={pruebaRapidaHepatitisC}
              onChange={(e) => setPruebaRapidaHepatitisC(e.target.value)}
            >
              <option value="">Seleccione una opción</option>
              <option value="No Reactivo">No Reactivo</option>
              <option value="Reactivo">Reactivo</option>
            </select>
          </div>
        </div>
        <div className="row form-group mb-4">
          <div className="col-sm-12">
            <label for="observaciones">Observaciones</label>
            <textarea
              className="form-control bg-yellow"
              id="observaciones"
              name="observaciones"
              rows="3"
              value={observaciones}
              onChange={(e) => setObservaciones(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="mb-4"></div>
        <div className="form-group mb-4">
          <button type="submit" className="btn btn-primary">
            {" "}
            Agregar Donante{" "}
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