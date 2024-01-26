import React from 'react'
import ReactDOM from 'react-dom/client'
import './custom.css'
import './index.css'
import Routers from './routes/Routers'
import { RecoilRoot } from 'recoil'
import '@fortawesome/fontawesome-free/css/all.css'
import Middleware from './middleware/Middleware'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      {/* <Middleware/> */}
      <Routers/>
    </RecoilRoot>
  </React.StrictMode>,
)
