// Funcionalidades / Libs:
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Components:
import AppRoutes from './routes'; //Config de rotas

// Estilo Global:
import './styles/global.scss';


export default function App() {

  return (
    <BrowserRouter>  

      <GoogleOAuthProvider clientId="785758594263-g0roo40aetd6kpaln1ehu09ninqbe0u8.apps.googleusercontent.com">
        <AppRoutes/>
      </GoogleOAuthProvider>

    </BrowserRouter>
  )
}