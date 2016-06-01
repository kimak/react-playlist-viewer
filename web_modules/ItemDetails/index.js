import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/lib/card';
import FlatButton from 'material-ui/lib/flat-button';

import {GridList, GridTile} from 'material-ui/lib/grid-list';
import IconButton from 'material-ui/lib/icon-button';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';

import styles from "./index.css"

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

const Item = ({name ="", followers="", image=null, kinds=[], songs=[], albums=[]}) =>
(
  <div>
    <Card>
      <CardMedia overlay={<CardTitle title={name} subtitle={followers} />}>
        <img src={image} />
      </CardMedia>
    </Card>

    <div className={styles.toptracks}>
      <h2 className={styles.title}>Top Tracks</h2>
        <div className={styles.kinds}>
        <ol>
        {
          songs &&
          songs.map((item, index) => {
            return <ul key={index} className={styles.track}>{index+1}) {item.name} <span className={styles.duration}>{millisToMinutesAndSeconds(item.duration_ms)}</span></ul>
          })
        }
        </ol>
        </div>
    </div>

    <div className={styles.toptracks}>
      <h2 className={styles.title}>Les albums</h2>
        <div className={styles.kinds}>
        <ol>
        {
          albums &&
          albums.map((item, index) => {
            return <ul key={index} className={styles.track}>{item.name}</ul>
          })
        }
        </ol>
        </div>
    </div>
  </div>
)

export default Item
