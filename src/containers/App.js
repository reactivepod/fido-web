import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  selectFido,
  selectCountries,
  fetchFido,
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
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.props.dispatch(selectCountries(value));
  }

  handlePickerSubmit(e) {
    e.preventDefault();
    const { podcastId, podcastName } = this.refs.picker.refs;
    this.props.dispatch(selectFido({
      name: podcastName.value,
      id: podcastId.value,
    }));
    // this.props.dispatch(fetchFido())
  }

  handlePodcastDelete(id) {
    return () => this.props.dispatch(deletePodcast(id));
  }

  handleFetch() {
    this.props.dispatch(fetchFido());
  }

  render() {
    const { dispatch, fido } = this.props;

    return (
      <div>
        <Header />
        <Countries
          countries={fido.countries}
          handleCountriesChange={this.handleCountriesChange.bind(this)} />
        <Picker
          onSubmit={this.handlePickerSubmit.bind(this)}
          ref="picker"
          key="picker"
          data={fido.selected} />
        <PodcastList
          podcasts={fido.podcasts}
          handlePodcastDelete={this.handlePodcastDelete.bind(this)}
          handleFetch={this.handleFetch.bind(this)} />
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
