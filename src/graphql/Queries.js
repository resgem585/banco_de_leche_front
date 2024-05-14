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
    }
  }
`;
export const GET_DONANTE = gql`
  query getDonante($id: ID!) {
    getDonante(id: $id) {
      _id
      tipo
      firstName
    }
  }
`;