import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import MainPage from "./../components/MainPage";
import NotFoundPage from "./../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import PrivateRoute from "../routers/PrivateRoute";
import PublicRoute from "../routers/PublicRoute";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResultsPage from "../components/SearchResultsPage";
import ContactPage from "../components/ContactPage";
import { CourseInfoPage } from "../components/CourseInfoPage";

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className="app__container">
            <Header history={history} />
            <div className="body-content content-container">
                <Switch>
                    <Route path="/" component={MainPage} exact={true} />
                    <Route path="/search/:category/:page" component={SearchResultsPage} />
                    <Route path="/course/:id" component={CourseInfoPage} />
                    <Route path="/contact" component={ContactPage} exact={true} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
            <Footer />
        </div>
    </Router>
);

export default AppRouter;