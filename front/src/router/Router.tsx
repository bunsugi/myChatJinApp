
import { Route, Switch } from "react-router";
import { LoginPage } from "../components/pages/LoginPage";
import { MainChat } from "../components/pages/MainChat";
import { Page404 } from "../components/pages/Page404";


export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <LoginPage />} />
            <Route exact path="/main" render={() => <MainChat />} />
        </Switch>
    );
};
