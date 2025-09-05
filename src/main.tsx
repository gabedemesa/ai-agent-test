import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { NavBar, type IAuth0Config } from '@opengov/components-nav-bar';


const auth0Config: IAuth0Config = {
  auth0domain: import.meta.env.VITE_AUTH0_DOMAIN || '',
  auth0clientID: import.meta.env.VITE_AUTH0_CLIENT_ID || '',
  auth0callbackUrl: `${window.location.origin}/admin/auth-callback`
};

const agentProps = {
  entityUUID: '1234',
  baseUrl: 'http://test.com',
  auth0Config: auth0Config
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar appName="AI Agent Test" menuOptions={[]} unstable_ogAgentOptions={agentProps} />
    <App />
  </StrictMode>,
)
