import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import StudentList from "./components/student/StudentList";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StudentList} />
  </Route>
);
