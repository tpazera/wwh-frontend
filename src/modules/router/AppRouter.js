import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import CallsHistoryPage from "../../pages/CallsHistoryPage";
import PatientsPage from "../../pages/PatientsPage";
import CallsWaitingPage from "../../pages/CallsWaitingPage";
import AddPatientPage from "../../pages/AddPatientPage";
import MedicineWaitingPage from "../../pages/MedicineWaitingPage";
import CallsCarousel from "../../components/calls/CallsCarousel";
import CallWrapper from "../../components/details/CallWrapper";

function AppRouter(props, { children }) {
  const [callOpen, setCallOpen] = useState(false);
  const [detailId, setDetailId] = useState("");

  return (
    <BrowserRouter>
      <div>
        {children}
        <Switch>
          <Route
            path="/"
            exact
            component={() => <CallsWaitingPage setId={setDetailId} />}
          />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/addpatient" exact component={AddPatientPage} />
          <Route path="/patients" exact component={PatientsPage} />
          <Route path="/callshistory" exact component={CallsHistoryPage} />
          <Route
            path="/callswaiting"
            exact
            component={() => <CallsWaitingPage setId={setDetailId} />}
          />
          <Route
            // setId={setDetailId}
            path="/medicinewaiting"
            exact
            component={MedicineWaitingPage}
          />
        </Switch>
        <CallsCarousel />
        <CallWrapper id={detailId} open={callOpen} setOpen={setCallOpen} />
        {/* <CallDetail open={callOpen} setopen={setCallOpen} /> */}
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
