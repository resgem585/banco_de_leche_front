import {gql} from '@apollo/client'


export const LOGIN =  gql`
query login($email:String, $password: String){
    login(email: $email, password: $password){
        _id
        email
        password
    }
}
`
// Donante

export const GET_DONANTES = gql`
  query getDonantes {
    getDonantes {
    _id 
    tipo
    firstName
    lastName
    edad
    direccion
    ocupacion
    partos
    cesareas
    apellidosRNLactante
    sdg
    fechaNacimRN
    complicacionesEmbarazo
    transfusionesUltimos5Anos
    tatuajesPiercingsAcupunturaUltimoAno
    tratamientoMedico
    pruebaRapidaSifilis
    pruebaRapidaVIH
    pruebaRapidaHepatitisC
    observaciones
    }
  }
`;
export const GET_DONANTE = gql`
  query getDonante($id: ID!) {
    getDonante(id: $id) {
      _id
      tipo
      firstName
      lastName
      edad
      direccion
      ocupacion
      partos
      cesareas
      apellidosRNLactante
      sdg
      fechaNacimRN
      complicacionesEmbarazo
      transfusionesUltimos5Anos
      tatuajesPiercingsAcupunturaUltimoAno
      tratamientoMedico
      pruebaRapidaSifilis
      pruebaRapidaVIH
      pruebaRapidaHepatitisC
      observaciones
    }
  }
`;

// Calidad

export const GET_CALIDADES = gql`
  query GetCalidades {
    getCalidades {
      _id
      donante {
        _id
        firstName
      }
      
    }
  }
`;