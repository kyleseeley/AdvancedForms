import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import HomePage from "../HomePage";
import Inventory from "../Inventory";
import InventoryReport from "../InventoryReport";
import SensoryPreferenceSurvey from "../SensoryPreferencesSurvey";
import SampleSurvey from "../SampleSurvey";

const SurveyRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/">Home</NavLink> |{" "}
        <NavLink to="/sample">Sample Survey</NavLink> |{" "}
        <NavLink to="/inventory">Inventory</NavLink> |{" "}
        <NavLink to="/report">Inventory Report</NavLink>
      </div>
      <Switch>
        <Route path="/sample">
          <SampleSurvey />
        </Route>
        <Route path="/inventory">
          <Inventory />
        </Route>
        <Route path="/report">
          <InventoryReport />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default SurveyRoutes;
