
import React from 'react'
import DashBox from '../Componenets/DashBox'
import NavBar from '../Componenets/NavBar'
import Tok from '../Componenets/Tok'
import Table from './../Componenets/Table';
import Footer from './../Componenets/Footer';
const DashBoard = () => {
  return (
	<div>
<NavBar/>
<DashBox/>
<Tok />
<Table/>
<Footer/>
</div>
  )
}

export default DashBoard