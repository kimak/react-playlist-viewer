import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"
import { get as getTour } from "app/reducers/tour"

import ItemDetails from "ItemDetails"

@connect(
  (state) => ({
    artist : state.artist
  }),
  (dispatch) => ({
    getArtist : (value) => dispatch(getArtist(value)),
    getTour:(name) => dispatch(getTour(name)),
  })
)
export default class PageArtist extends Component {

  static propTypes = {
    params: PropTypes.shape({
      artistId:PropTypes.string
    }),
    artists : PropTypes.object,
    getArtist : PropTypes.func,
    getTour: PropTypes.func
  };

  static defaultProps = {
    params: {},
    artist : null,
    getArtist : () => {},
      getTour : () => {}
  };
  componentDidMount(){

    const {
      params,
      getArtist,
      getTour
    } = this.props

    if(params.artistId)  {
      getArtist(params.artistId)
    }

    if (params.artist) {
        getTour(encodeURI(params.artist).toLowerCase())
    }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
      getTour,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId)
    }

    if (nextProps.artist.name && this.props.artist.name != nextProps.artist.name) {
        getTour(encodeURI(nextProps.artist.name).toLowerCase())
    }
  }

  render() {
    const {
      params,
      artist,
      tour,
    } = this.props

    return (
      <div>
      {
        artist && !artist.loading &&
        <ItemDetails name={artist.name}
        image={artist.picture ? artist.picture.url : null}
        kinds={artist.genres}
        songs={[{name:"..."},{name:"..."},{name:"..."}]}
        tour  />
      }
      </div>
    )
  }
}
