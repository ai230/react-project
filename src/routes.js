import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import HomePage from "./components/Home/HomePage";
import CoursesPage from "./components/course/CoursesPage";
import SelectCoursePage from "./components/Home/SelectCoursePage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="/:name" component={SelectCoursePage} />
  </Route>
);
