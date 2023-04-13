import Sidebar from "./component/sidebar/Sidebar";
import "./app.css"
import Proxy from "./component/pages/proxy/Proxy";
import Accounts from "./component/pages/accounts/Accounts";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DetailProxy from "./component/pages/proxy/DetailProxy";
import EditDetailProxy from "./component/pages/proxy/EditProxy";
import CreateProxy from "./component/pages/proxy/CreateProxy";
import HomePage from "./component/pages/homePage/Home";
import Auth from "./component/pages/profile/Auth";
import Register from "./component/pages/profile/Register";


function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
          <Switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/proxy/:proxyId" component={DetailProxy}/>
            <Route exact path="/proxy/:proxyId/edit" component={EditDetailProxy}/>
            <Route exact path="/create" component={CreateProxy}/>
            <Route exact path="/proxy" component={Proxy}/>
            <Route exact path="/accounts" component={Accounts}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
