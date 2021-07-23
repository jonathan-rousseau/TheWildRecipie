import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import Home from '../view/Home';
import Footer from './Footer';
import PlatsList from '../view/PlatsList';
import PlatsForm from '../view/PlatsForm';
import PlatsItem from '../view/PlatsItem';
import DessertForm from '../view/DessertForm';
import DessertList from '../view/DessertList';
import DessertItem from '../view/DessertItem';
import Profile from '../view/Profile';
import SignUp from '../view/SignUp';

// import SignIn from '../view/SignIn';

function GlobalRouter() {
  return (
    <div>
      <Router className="tout">
        <Header />
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Accueil">
              <Home />
            </Route>
            <Route exact path="/plats">
              <PlatsList />
            </Route>
            <Route exact path="/platsItem">
              <PlatsItem />
            </Route>
            <Route exact path="/platsForm">
              <PlatsForm />
            </Route>
            <Route exact path="/dessertForm">
              <DessertForm />
            </Route>
            <Route exact path="/desserts">
              <DessertList />
            </Route>
            <Route exact path="/dessertItem">
              <DessertItem />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/profil:id">
              <Profile />
            </Route>
            <Route exact path="/inscription">
              <SignUp />
            </Route>
            {/* <Route exact path="connexion">
              <SignIn />
            </Route> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default GlobalRouter;
