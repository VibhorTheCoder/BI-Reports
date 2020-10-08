import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Header, Footer, Sidebar, Topbar, BarGraph, CustomerSales, KPI, SalesPersonGraph, ItemsSalesGraph, ComboChart, Analysis, AnalysisFilter } from './Components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function RouteApp() {
  return (
    <Router>
      <div>
        <Switch>                 

          <Route path="/analysis">
            <Analysis />
          </Route>


          <Route path="/">           
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

class App extends React.Component {

  render() {

    return (
      <div className={styles.myBody}>

        <Header />

        {/* <Footer /> */}
        <AnalysisFilter />


        {/* <Sidebar /> */}
        <Topbar />


        <KPI />

        {/* <SalesPersonGraph /> */}



        <BarGraph />

        <ComboChart />

        {/* <ItemsSalesGraph className={styles.mySpace} />
        
        <CustomerSales /> */}

      </div>
    );
  }
}

// export default App;
