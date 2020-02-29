import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import CallsHistoryPage from "../../pages/CallsHistoryPage";
import PatientsPage from "../../pages/PatientsPage";
import CallsWaitingPage from "../../pages/CallsWaitingPage";
import AddPatientPage from "../../pages/AddPatientPage";
import MedicineWaitingPage from "../../pages/MedicineWaitingPage";

function AppRouter(props, { children }) {
  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
      <div>
        {children}
        <Switch>
          <Route path="/" exact component={CallsWaitingPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/addpatient" exact component={AddPatientPage} />
          <Route path="/patients" exact component={PatientsPage} />
          <Route path="/callshistory" exact component={CallsHistoryPage} />
          <Route path="/callswaiting" exact component={CallsWaitingPage} />
          <Route
            path="/medicinewaiting"
            exact
            component={MedicineWaitingPage}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
