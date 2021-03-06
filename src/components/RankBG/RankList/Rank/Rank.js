import React, {Component} from 'react';
import classes from './Rank.css'

const Rank = (props) => {
    return (
      <div className="rank">
        <ul className="list-group">
          <h3 className="list-group-item"><span className="label label-default">{props.position}</span> {props.name}, {props.dl_avg.toFixed(2)}</h3>
        </ul>
      </div>
    );

}

export default Rank;
