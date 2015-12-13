import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  selectCountries,
  fetchFido,
  addPodcast,
  deletePodcast
} from '../actions';
import { Header } from '../components/Header';
import Countries from '../components/Countries';
import Picker from '../components/Picker';
import PodcastList from '../components/PodcastList';
import ReviewList from '../components/ReviewList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleCountriesChange(e) {
    const options = e.target.options;
    let value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value = value.concat(options[i].value.split(','));
      }
    }
    this.props.dispatch(selectCountries(value));
  }

  handlePickerSubmit(e) {
    e.preventDefault();
    const { id, name } = this.refs.picker.refs;
    this.props.dispatch(addPodcast({
      name: name.value,
      id: id.value,
    }));
  }

  handlePodcastDelete(id) {
    return () => this.props.dispatch(deletePodcast(id));
  }

  handleFetchFido() {
    this.props.dispatch(fetchFido());
  }

  render() {
    const { dispatch, fido } = this.props;

    return (
      <div>
        <Header />
        <Countries
          data={fido.countries}
          handleCountriesChange={this.handleCountriesChange.bind(this)} />
        <Picker
          onSubmitHandle={this.handlePickerSubmit.bind(this)}
          ref="picker"
          data={fido.selected} />
        <PodcastList
          podcasts={fido.podcasts}
          handlePodcastDelete={this.handlePodcastDelete.bind(this)}
          handleFetchFido={this.handleFetchFido.bind(this)} />
        <ReviewList
          reviews={fido.reviews}
          podcasts={fido.podcasts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { fido } = state;
  return {
    fido,
  };
}

export default connect(mapStateToProps)(App);
