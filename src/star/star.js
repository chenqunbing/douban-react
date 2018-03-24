import React from 'react';
import starImg from './star.png';
import noneStarImg from './none-star.png';
import './star.css';

export default class Star extends React.Component{
	convertToStarsArray(stars) {
	  	var num = stars.toString().substring(0, 1);
	  	var array = [];
	  	for (var i = 1; i <= 5; i++) {
	    	if (i <= num) {
	      	array.push(1);
		    }else{
		      array.push(0);
		    }
	  	}
	  return array;
	}

	render(){
		return (
			<div className='starContainer'>
			{
				this.convertToStarsArray(this.props.stars).map(function(item,index,array){
					if(item){
						return <img key={index} src={starImg} />
					}else{
						return <img key={index} src={noneStarImg} />
					}
				})
			}
			<span className="score">{this.props.score}</span>
			</div>
		)
	}
}
