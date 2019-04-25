import React from 'react';

import Header from './Header';
import Footer from './Footer';
import DisplayProduce from './schedules/DisplayProduce';
import NewLocationControl from './schedules/NewLocationControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import DisplaySchedule from './schedules/DisplaySchedule';
import marketSchedule from '../model/LocationData';






// import Error404 from './Error404';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      marketSchedule: marketSchedule,
    };
    this.handleAddingNewLocationForm = this.handleAddingNewLocationForm.bind(this);

  }

  handleAddingNewLocationForm(newLocation){
    let newMarketSchedule = this.state.marketSchedule.slice();
    newMarketSchedule.push(newLocation);
    this.setState({marketSchedule: newMarketSchedule});
  }

  render(){
    return (
      <div>
      <style jsx global>{`
        body {
          background-color: #170829;
          margin: 0;
          padding: 0;
          color: #FFF;
        }
        `}</style>
        <Header/>

        <Switch>
          <Route exact path ='/' render={() =><DisplaySchedule marketSchedule={this.state.marketSchedule} />} />
          <Route exact path ='/displayproduce' component={DisplayProduce} />
          <Route exact path = '/newlocationcontrol'render={() =><NewLocationControl  onNewLocationCreation={this.handleAddingNewLocationForm}/>} />
          <Route component={Error404}/>
        </Switch>
        <Footer/>
        </div>
    );
  }
}

export default App;
