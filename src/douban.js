import $ from 'jquery';

var doubanData=null;
function handleData(data){
	doubanData=data;
	console.log(doubanData);
}
$(function(){

	$.ajax({
		type:"get",
		url:"https://api.douban.com/v2/movie/top250",
		async:true,
		dataType:'jsonp',
		success:function(data){
			handleData(data)
		},
		error:function(){
			console.log("error!");
		}
	});
	
})

export const movieData=doubanData;



/*
 * 如何解决下面这种请求的跨域问题？？？？
 * 
 */
//var xhr=null;
//if(window.XMLHttpRequest){
//	xhr=new XMLHttpRequest;
//}
//var url='https://api.douban.com/v2/movie/top250';
////var url='./new_file.json';
//xhr.open('get',url,true);
//
//xhr.onreadystatechange=function(){
//	if(xhr.readyState==4){
//		if(xhr.status==200){
//			var data=xhr.responseText;
//			console.log(data);
//		}
//	}
//}
//xhr.send(null);