import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


//import components
import HomePage from './pages/home.page.jsx';
import AuthPage from './pages/auth.page.jsx';

const Routes = () => {
  
  return (
      <>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/auth' exact component={AuthPage} />
        <Redirect from='*' to='/404' />
      </Switch>
   
    
      <div style={{ height:'2000px' }}></div>
      </>
  )
}

export default Routes;