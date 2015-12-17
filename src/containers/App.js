import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  selectCountries,
  fetchFido,
  addPodcast,
  deletePodcast,
  selectPodcast
} from '../actions';
import Countries from '../components/Countries';
import Picker from '../components/Picker';
import PodcastList from '../components/PodcastList';
import ReviewList from '../components/ReviewList';
import FetchButton from '../components/FetchButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      my: false
    }
  }

  toggleMyPodcasts() {
    this.setState({
      my: !this.state.my
    })
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
    const id = this.refs.picker.refs.id;
    this.props.dispatch(addPodcast({
      id: id.value.trim(),
    }));
    this.props.dispatch(fetchFido());
  }

  handlePodcastPick(id) {
    return () => this.props.dispatch(selectPodcast(id));
  }

  handlePodcastChange(e) {
    const id = e.target.value;
    this.props.dispatch(selectPodcast(id));
  }

  handlePodcastDelete(id) {
    return () => this.props.dispatch(deletePodcast(id));
  }

  handleFetchFido() {
    this.props.dispatch(fetchFido());
  }

  render() {
    const { dispatch, fido } = this.props;

    const renderMy = () => {
      if (this.state.my) {
        return (
          <div className="my">
            <Picker
              onSubmitHandle={this.handlePickerSubmit.bind(this)}
              ref="picker"
              data={fido.selected} />
            <PodcastList
              podcasts={fido.podcasts}
              fido={fido.fido}
              handlePodcastPick={this.handlePodcastPick.bind(this)}
              handlePodcastDelete={this.handlePodcastDelete.bind(this)} />
          </div>
        )
      } else {
        return ;
      }
    }

    return (
      <div>
        {renderMy()}
        <header className="header">
          <div>
            <h1>Fido</h1>
            , find reviews for
            <select onChange={this.handlePodcastChange.bind(this)}>
              {Object.keys(fido.fido).map((id) => {
                const podcast = fido.fido[id].meta;
                if (podcast && fido.podcasts.filter(i => i.id === id)) {
                  return <option value={id} key={`select-${id}`}>{podcast.name}</option>
                }
              }
              )}
            </select>
            from
            <Countries
              data={fido.countries}
              handleCountriesChange={this.handleCountriesChange.bind(this)} />
            <FetchButton
              progress={fido.isFetching}
              disabled={!Object.keys(fido.podcasts).length}
              handleFetchFido={this.handleFetchFido.bind(this)} />
          </div>
          <div>
            <button className="my__button" data-size="s" data-color="green" className="ladda-button " onClick={this.toggleMyPodcasts.bind(this)}><span className="ladda-label">My Podcasts</span></button>
          </div>
        </header>
        <ReviewList
          reviews={fido.fido}
          selected={fido.selected} />
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
