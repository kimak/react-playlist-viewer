import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"

import ItemDetails from "ItemDetails"

import { get as getToptracks } from "app/reducers/toptracks"

@connect(
    (state) => ({
        artist : state.artist,
        toptracks : state.toptracks,
    }),
    (dispatch) => ({
        getArtist : (value) => dispatch(getArtist(value)),
        getToptracks : (value) => dispatch(getToptracks(value)),
    })

)
export default class PageArtist extends Component {

  static propTypes = {
      params: PropTypes.shape({
        artistId:PropTypes.string,
      }),
      artist : PropTypes.object,
      toptracks : PropTypes.object,
      getArtist : PropTypes.func,
      getToptracks : PropTypes.func,
  };

  static defaultProps = {
      params: {},
      artist : null,
      toptracks: null,
      getArtist : () => {},
      getToptracks : () => {},
  };
  componentDidMount(){

      const {
        params,
        getArtist,
        getToptracks,
      } = this.props

      if(params.artistId) 
      {
        getArtist(params.artistId)
        getToptracks(params.artistId)
      }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
      getToptracks,
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId)
      getToptracks(nextProps.params.artistId)
    }
  }

  render() {
    const {
      params,
      artist,
      toptracks,
    } = this.props
    return (
      <div>
        {
            artist && !artist.loading &&  toptracks && !toptracks.loading &&
            <ItemDetails name={artist.name}
                         image={artist.picture ? artist.picture.url : null}
                         kinds={artist.genres}
                         songs={toptracks.tracks}  />
        }
      </div>
    )
  }
}
