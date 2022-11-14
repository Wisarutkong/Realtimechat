import React from 'react'
import { Text } from "@chakra-ui/layout"
import { Route, Routes } from "react-router-dom"
import SignUp from "./Login/SignUp"
import Homepage from "../pages/Homepage"
import Login from "./Login/Login"
import PrivateRoutes from './PrivateRoutes'
import { AccountContext } from './AccountContext'
import { useContext } from 'react'
import Home from './Chat/Home'



const View = () => {
  const { user } = useContext(AccountContext)
  return user.loggedIn === null ? (
    <Text>Loading...</Text>
  ) : (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default View
