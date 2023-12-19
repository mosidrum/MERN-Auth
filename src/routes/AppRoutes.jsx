import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { paths } from '@routes/paths'
import { Home } from '@pages/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
    </Routes>
  )
}
