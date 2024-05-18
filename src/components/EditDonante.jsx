import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_DONANTE } from '../graphql/Queries';
import { UPDATE_DONANTE } from '../graphql/Mutation';

function EditDonante() {
  const { id } = useParams();

   // Inicializa el estado para cada campo del formulario
  const [updateDonante] = useMutation(UPDATE_DONANTE);
  const [_id, set_id] = useState(id);
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
  const [tipo, setTipo] = useState('');

     // Estado para rastrear si la actualización fue exitosa
  const [updateSuccess, setUpdateSuccess] = useState(false);
  
  
  const { data, loading, error } = useQuery(GET_DONANTE, {
    variables: { id },
    onCompleted: (data) => {
      if (data && data.donante) {
      // Cuando los datos se cargan, establece el estado de cada campo con los valores de los datos del donante
      set_id(data.donante.id);
      setTipo(data.donante.tipo);
      setFirstName(data.donante.firstName);
      setLastName(data.donante.lastName);
      setEdad(data.donante.edad);
      setDireccion(data.donante.direccion);
      setOcupacion(data.donante.ocupacion);
      setPartos(data.donante.partos);
      setCesareas(data.donante.cesareas);
      setApellidosRNLactante(data.donante.apellidosRNLactante);
      setSdg(data.donante.sdg);
      setFechaNacimRN(data.donante.fechaNacimRN);
      setComplicacionesEmbarazo(data.donante.complicacionesEmbarazo);
      setTransfusionesUltimos5Anos(data.donante.transfusionesUltimos5Anos);
      setTatuajesPiercingsAcupunturaUltimoAno(data.donante.tatuajesPiercingsAcupunturaUltimoAno);
      setTratamientoMedico(data.donante.tratamientoMedico);
      setPruebaRapidaSifilis(data.donante.pruebaRapidaSifilis);
      setPruebaRapidaVIH(data.donante.pruebaRapidaVIH);
      setPruebaRapidaHepatitisC(data.donante.pruebaRapidaHepatitisC);
      setObservaciones(data.donante.observaciones);
      }
    },
  });
  

  // Cuando los datos de la consulta cambien, actualiza el estado del formulario
  useEffect(() => {
    if (data && data.donante) {
      const {
        _id,
        tipo,
        firstName,
        lastName,
        edad,
        direccion,
        ocupacion,
        partos,
        cesareas,
        apellidosRNLactante,
        sdg,
        fechaNacimRN,
        complicacionesEmbarazo,
        transfusionesUltimos5Anos,
        tatuajesPiercingsAcupunturaUltimoAno,
        tratamientoMedico,
        pruebaRapidaSifilis,
        pruebaRapidaVIH,
        pruebaRapidaHepatitisC,
        observaciones
      } = data.donante;
  
      setDonanteData({
        _id,
        tipo,
        firstName,
        lastName,
        edad,
        direccion,
        ocupacion,
        partos,
        cesareas,
        apellidosRNLactante,
        sdg,
        fechaNacimRN,
        complicacionesEmbarazo,
        transfusionesUltimos5Anos,
        tatuajesPiercingsAcupunturaUltimoAno,
        tratamientoMedico,
        pruebaRapidaSifilis,
        pruebaRapidaVIH,
        pruebaRapidaHepatitisC,
        observaciones
      });
    }
  }, [data]);
  
  // Estado para almacenar todos los campos del donante
  const [donanteData, setDonanteData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateDonante({ variables: {
         _id, 
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
        observaciones,/* otros campos */ }});
      // Mostrar el mensaje de éxito
      setShowSuccessMessage(true);
    } catch (error) {
      console.error("Error updating donante:", error);
      // Manejar el error
    }
  };

  if (loading) return 'Cargando...';
  if (error) return `Error! ${error.message}`;

  return (
      <form onSubmit={handleSubmit}>
        <div className="row form-group mb-2">
          <div className="col">
            {/* Muestra "EDIT (Nombre Donante)" antes del nombre del donante */}
            <h1>EDIT ({firstName} {lastName})</h1>
          </div>
        </div>
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
            class="form-control"
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
              class="form-control mt-2"
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
              className="form-control"
              id="ocupacion"
              name="ocupacion"
              value={ocupacion}
              onChange={(e) => setOcupacion(e.target.value)}
            />
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6">
                <label for="partos">Partos</label>
                <input
                  type="number"
                  className="form-control"
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
                  className="form-control"
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
          <div className="col-sm-3">
            <label for="sdg">Semanas de gestación (SDG)</label>
            <input
              type="number"
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
              className="form-control"
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
      </div>  
        <div className="row form-group mb-2">
          <div className="col">
            {/* Cambia el texto del botón a "ACTUALIZAR" */}
            <button type="submit" className="btn btn-primary">ACTUALIZAR</button>
            {/* Muestra el mensaje de éxito si la actualización fue exitosa */}
            {updateSuccess && <p>Se ha actualizado correctamente</p>}
          </div>
        </div>
      </form>  
  );
}

export default EditDonante;