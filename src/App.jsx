import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { SignUpForm } from './components/SignUpForm'; // Asumiendo que este es DonanteForm
import { Home } from './pages/Home';
import { Donante } from './pages/Donante';
import { ListaDonadoras } from './pages/ListaDonadoras';
import {DonanteDetalles} from './pages/DonanteDetalles';
import { EditarDonante } from './pages/EditarDonante';
import { ListaCalidades } from './pages/ListaCalidades';
import { CalidadDetalles } from './pages/CalidadDetalles'; // Importa aquí // Cambio aquí

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3000/'
  });

  return (
    <Router>
      <ApolloProvider client={client}>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/create" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/donante" element={<Donante />} />
          <Route path="/listaDonadoras" element={<ListaDonadoras />} />
          <Route path="/DonanteDetalles/:id" element={<DonanteDetalles />} />
          <Route path="/EditarDonante/:id" element={<EditarDonante />} />
          <Route path="/ListaCalidades" element={<ListaCalidades />} />
          <Route path="/CalidadDetalles/:id" element={<CalidadDetalles />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;