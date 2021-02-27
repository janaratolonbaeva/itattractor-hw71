import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import Dishes from "./containers/Dishes/Dishes";
import Orders from "./containers/Orders/Orders";
import AddDish from "./containers/AddDish/AddDish";
import EditDish from "./containers/EditDish/EditDish";
import './App.css';

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={Dishes}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/dish" exact component={AddDish}/>
        <Route path="/dish/:id" component={EditDish}/>
      </Switch>
    </Layout>
);


export default App;
