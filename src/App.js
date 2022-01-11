import React from 'react';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import WebsiteDetail from './pages/WebsiteDetail';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
//Animation
import { AnimatePresence } from 'framer-motion';
import SideNav from './components/SideNav';

function App() {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <SideNav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/projects' exact>
            <Projects />
          </Route>
          <Route path='/projects/:id'>
            <WebsiteDetail />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
          <Route path='*'>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h1 style={{ color: 'white' }}>NOT FOUND</h1>
            </div>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
