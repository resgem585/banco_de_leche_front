import { gql } from "@apollo/client"
// USER
export const CREATE_USER = gql `
mutation createUser($email:String, $password: String) {
  createUser(email:$email, password:$password){
    email
    password
  }
}
`
export const UPDATE_USER = gql`



mutation updateUser($_id: ID,$email:String, $password:String){
  updateUser(_id: $_id,email:$email, password:$password){
    _id
    email
    password
  }
}
`
export const DELETE_USER = gql`
  mutation deleteUser($_id: ID) {
    deleteUser(_id: $_id) {
      _id
      email
      password
    }
  }
`;
// Donante

export const CREATE_DONANTE = gql`
  mutation createDonante(
    $tipo: String,
    $firstName: String,
  ) {
    createDonante(
      tipo: $tipo,
      firstName: $firstName,

    ) {
      tipo
      firstName

    }
  }
`;
export const UPDATE_DONANTE = gql`
  mutation updateDonante(
    $_id: ID!,
    $tipo: String,
    $firstName: String,
    
  ) {
    updateDonante(
      _id: $_id,
      tipo: $tipo,
      firstName: $firstName,
    ) {
      _id
      tipo
      firstName
    }
  }
`;
export const DELETE_DONANTE = gql`
  mutation deleteDonante($_id: ID!) {
    deleteDonante(_id: $_id) {
      _id
      tipo
      firstName
    }
  }
`;
// Calidad

export const CREATE_CALIDAD = gql`
  mutation CREATE_CALIDAD($donante: ID!, $olor: String!) {
  createCalidad(donante: $donante, olor: $olor) {
    _id
    donante {
      _id
      firstName
    }
    olor
  }
}
`;

export const UPDATE_CALIDAD = gql`
  mutation updateCalidad($_id: ID!, $donante: String, $olor: String) {
    updateCalidad(_id: $_id, donante: $donante, olor: $olor) {
      _id
      donante
      olor
    }
  }
`;

export const DELETE_CALIDAD = gql`
  mutation deleteCalidad($_id: ID!) {
    deleteCalidad(_id: $_id) {
      _id
    }
  }
`;


