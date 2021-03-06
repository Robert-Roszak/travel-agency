import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, /* Switch, */ Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './App.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import Home from './components/views/Home/Home';
import Trips from './components/views/Trips/TripsContainer';
import Countries from './components/views/Countries/CountriesContainer';
import Regions from './components/views/Regions/RegionsContainer';
import Country from './components/views/Country/CountryContainer';
import Trip from './components/views/Trip/TripContainer';
// TODO - import other views
import Info from './components/views/Info/Info';
import NotFound from './components/views/NotFound/NotFound';

import parseTrips from './utils/parseTrips';
import {setMultipleStates} from './redux/globalRedux';

class App extends React.Component {
  static propTypes = {
    trips: PropTypes.array,
    setStates: PropTypes.func,
  }

  constructor(props){
    super(props);
    // parse trips when App is first created
    parseTrips(this.props.trips, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.trips != this.props.trips){
      // parse trips again if they changed
      parseTrips(this.props.trips, this.props.setStates);
    }
  }

  render(){
    return (
      <BrowserRouter>
        <MainLayout>
          <AnimatedSwitch
            atEnter={{ opacity: 0, offset: 200 }}
            atLeave={{ opacity: 0, offset: 200 }}
            atActive={{ opacity: 1, offset: 0 }}
            className={styles.switchWrapper}
            mapStyles={(styles) => ({
              transform: `translateY(${styles.offset}%)`,
            })}
          >

            {/* <Switch location={location}> */}
            <Route exact path='/' component={Home} />
            <Route exact path='/trips' component={Trips} />
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/regions' component={Regions} />
            <Route exact path="/country/:id" component={Country} />
            <Route exact path="/Trip/:id" component={Trip} />
            <Route exact path='/info' component={Info} />
            <Route path='*' component={NotFound} />
            {/*</Switch>*/}
          </AnimatedSwitch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  trips: state.trips,
});

const mapDispatchToProps = dispatch => ({
  setStates: newState => dispatch(setMultipleStates(newState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
