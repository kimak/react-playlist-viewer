import React, { Component, PropTypes } from 'react';
import fetchJSON from "app/fetchJSON";
import consts from "app/consts"
import InputList from "InputList";

import styles from "./index.css"

import InputArtist from 'InputArtist'

export default class PageHome extends Component {

  state = {
    kinds: null,
  };

  fetchKinds(){
    fetchJSON(consts.api.enpoints.getKinds()).then((response) => {
        if(!response.error){
          this.setState({kinds:response.genres})
        }
    });
  };

  componentDidMount() {
      this.fetchKinds();
  };

  render() {
    return (
      <div className="background">
        <h1>Search Artists</h1>
        <p>Vous pouvez dés maintenant rechercher un artiste via le moteur de recherche en haut à droite.</p>
      </div>
    )
  }
}
