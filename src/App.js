import React from 'react';
import './App.css';
import Input from "./components/Input";
import List from "./components/List/List";
import { OrganizationList } from "./components/List/OrganizationList";
import { RepoList } from "./components/List/RepoList";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__inner container clearfix">
          <div className="header__brand">
            Perx React
          </div>
        </div>
      </header>
      <div className="content container">
        <div className="card">
          <Input label={'Username'}/>
        </div>
        <div className="row">
          <div className="column">
            <OrganizationList/>
          </div>
          <div className="column">
            <RepoList/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
