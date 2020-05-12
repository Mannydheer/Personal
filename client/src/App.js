import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from './components/Navbar';
import GlobalStyles from './components/GlobalStyles'
import styled from 'styled-components';


function App() {
  return (
    <>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <BrowserRouter>
        <GlobalStyles />


        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>



      </BrowserRouter>





    </>
  );
}

export default App;


const NavWrapper = styled.div`
background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
`