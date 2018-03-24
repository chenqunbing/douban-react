import React from 'react';
import Star from '../star/star';
import movieImg from './1.jpg';
import './oneMovie.css';


export default class OneMovie extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="oneMovieContainer">
				<img src={this.props.subject.images.small}/>
				<h3>{this.props.subject.title}</h3>
				<Star score={this.props.subject.rating.average} stars={this.props.subject.rating.stars}/>
			</div>
		)
	}
}
