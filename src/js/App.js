import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import SideBar from "../components/SideBar";

export default function App() {
  return (
    <Router>
      {/* <SideBar /> */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route path="/Tarefas">
          <h1>Tarefas</h1>
        </Route>

        <Route path="/Contatos">
          <h1>Contatos</h1>
        </Route>

        <Route path="/Lembrete">
          <h1>Lembrete</h1>
        </Route>

        <Route path="/Senhas">
          <h1>Senhas</h1>
        </Route>

        <Route path="/Configurações">
          <h1>Configurações</h1>
        </Route>
      </Switch>
    </Router>
  );
}
