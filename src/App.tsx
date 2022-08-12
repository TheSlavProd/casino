import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import * as pages from 'pages'

import { setInitialTheme } from 'utils'

const setUpClipboard = async () => {
  const queryOpts = { name: 'clipboard-read' };
  // @ts-ignore
  const permissionStatus = await navigator.permissions.query(queryOpts);
  // Примет значение 'granted', 'denied' или 'prompt':
  console.log(permissionStatus.state);
  
  // Прослушиваем изменения состояния разрешения
  permissionStatus.onchange = () => {
    console.log(permissionStatus.state);
  };
}

const App = () => {
  useEffect(() => {
    setUpClipboard()
    setInitialTheme()
  }, []) 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<pages.MainPage />} />
        <Route path='/profile/*' element={<pages.UserProfile />} />
        <Route path='/game/:id' element={<pages.GamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
