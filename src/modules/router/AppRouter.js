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
import CallDialog from "../../components/dialogs/CallDialog";
import MedicineDialog from "../../components/dialogs/MedicineDialog";

function AppRouter(props, { children }) {
  const [callOpen, setCallOpen] = useState(false);
  const [detailId, setDetailId] = useState("");
  const [medicineId, setMedicineId] = useState("");

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = id => {
    setDetailId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = id => {
    setMedicineId(id);
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <BrowserRouter>
      <div>
        {children}
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <CallsWaitingPage
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                setId={setDetailId}
              />
            )}
          />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/addpatient" exact component={AddPatientPage} />
          <Route path="/patients" exact component={PatientsPage} />
          <Route path="/callshistory" exact component={CallsHistoryPage} />
          <Route
            path="/callswaiting"
            exact
            component={() => (
              <CallsWaitingPage
                handleClickOpen={handleClickOpen}
                handleClose={handleClose}
                setId={setDetailId}
              />
            )}
          />
          <Route
            // setId={setDetailId}
            path="/medicinewaiting"
            exact
            // component={MedicineWaitingPage}
            component={() => (
              <MedicineWaitingPage
                handleClickOpen={handleClickOpen2}
                handleClose={handleClose2}
                setId={setMedicineId}
              />
            )}
          />
        </Switch>
        <CallsCarousel />
        <CallDialog id={detailId} open={open} handleClose={handleClose} />
        <MedicineDialog
          id={medicineId}
          open={open2}
          handleClose={handleClose2}
        />
        {/* <CallDetail open={callOpen} setopen={setCallOpen} /> */}
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
