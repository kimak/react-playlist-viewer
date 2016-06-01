import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux"
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"

import { get as getArtist } from "app/reducers/artist"
import { get as getTopTracks } from "app/reducers/toptracks"
import { get as getAlbums} from "app/reducers/albums"

import ItemDetails from "ItemDetails"

@connect(
  (state) => ({
    artist : state.artist,
    toptracks : state.toptracks,
    album : state.albums
  }),
  (dispatch) => ({
    getArtist : (value) => dispatch(getArtist(value)),
    getTopTracks:(name) => dispatch(getTopTracks(name)),
    getAlbums:(name) => dispatch(getAlbums(name))
  })
)
export default class PageArtist extends Component {

  static propTypes = {
    params: PropTypes.shape({
      artistId:PropTypes.string
    }),
    artists : PropTypes.object,
    getArtist : PropTypes.func,
    getTopTracks: PropTypes.func,
    getAlbums : PropTypes.func
  };

  static defaultProps = {
    params: {},
    artist : null,
    toptrack : null,
    getArtist : () => {},
    getTopTracks : () => {},
    getAlbums : () => {}
  };
  componentDidMount(){
    const {
      params,
      getArtist,
      getTopTracks,
      getAlbums
    } = this.props

    if(params.artistId)  {
      getArtist(params.artistId)
    }
    if(params.artistId)  {
      getTopTracks(params.artistId)
    }
    if (params.artistId) {
      getAlbums(params.artistId)
    }
  }

  componentWillReceiveProps(nextProps){
    const {
      params,
      getArtist,
      getTopTracks,
      getAlbums
    } = this.props

    if(nextProps.params.artistId!=params.artistId){
      getArtist(nextProps.params.artistId)
    }
    if(nextProps.params.artistId!=params.artistId){
      getTopTracks(nextProps.params.artistId)
    }
    if(nextProps.params.artistId!=params.artistId){
      getAlbums(nextProps.params.artistId)
    }

  }

  render() {

    const {
      params,
      artist,
      toptracks,
      album,
    } = this.props

  console.log(album);

    return (


      <div className="artist">
      {
        artist && !artist.loading &&
        <ItemDetails name={artist.name}
        image={artist.picture ? artist.picture.url : null}
        followers={artist.followers + " Followers"}
        kinds={artist.genres}
        songs={toptracks.tracks}
        albums={album.items}
         />

      }
      </div>
    )
  }
}
