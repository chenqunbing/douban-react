import React from 'react';
import $ from 'jquery';
import OneMovie from '../oneMovie/oneMovie';
import './movieGrid.css';



export default class MovieGrid extends React.Component{
	constructor(props){
		super(props);
		this.state={movieData:{}};
		
	}
	componentWillMount(){
		$.ajax({
			type:"get",
			url:"https://api.douban.com/v2/movie/top250",
			async:true,
			dataType:'jsonp',
			success:function(data){
				this.setState({movieData:data});
				console.log(this.state)
			}.bind(this),
			error:function(){
				console.log("error!");
			}
		});
		
	}
	render(){
		return(
			<div className="movieGridContainer">
				{
					this.state.movieData&&
					this.state.movieData.subjects&&
					this.state.movieData.subjects.map((subject,index)=>
					(
						( <OneMovie subject={subject} key={index} /> )
					))
				}
			</div>
		)
	}
}
