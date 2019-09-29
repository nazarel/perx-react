import React from 'react';
import './App.css';
import Input from "./components/Input";
import { OrganizationList } from "./components/List/OrganizationList";
import { RepoList } from "./components/List/RepoList";
import { useSelector } from "react-redux";

function App() {
  const orgs = useSelector(state => {
    return state.OrganizationReducer.organizations;
  });
  const repos = useSelector(state => {
    return state.RepoReducer.repos;
  });

  let dataExists = orgs !== null || repos !== null;

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
        <div className={dataExists ? 'card input-container' : 'card input-container input-container--centralized'}>
          <Input label={'Username'}/>
        </div>
        {dataExists &&
          <div className="row">
            <div className="column">
              <OrganizationList/>
            </div>
            <div className="column">
              <RepoList/>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
