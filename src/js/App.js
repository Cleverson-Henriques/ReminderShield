import React from "react";
import Home from "../views/Home";
import Tarefas from "../components/Tarefas";
import Contatos from "../components/Contatos";
import Lembrete from "../components/Lembrete";
import Configurações from "../components/Configurações";
import SideBar from "../components/SideBar";
import Senhas from "../components/Senhas";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <SideBar />
      <Switch>
        <Route path="/config">
          <Configurações />
        </Route>

        <Route path="/task">
          <Tarefas />
        </Route>

        <Route path="/contact">
          <Contatos />
        </Route>

        <Route path="/reminder">
          <Lembrete />
        </Route>

        <Route path="/password">
          <Senhas />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
