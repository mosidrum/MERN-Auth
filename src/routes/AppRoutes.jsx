import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { paths } from '@routes/paths'
import { Dashboard } from '@pages/Dashboard'
import { PageNotFound } from '@components/PageNotFound/PageNotFound'
import { Register } from '@pages/Register'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.dashboard} element={<Dashboard/>} />
      <Route path={paths.register} element={<Register/>} />
      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}
