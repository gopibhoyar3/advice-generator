//advice counter and fetch on load
$(document).ready(()=>{
	let counter = 1;
	let url = "https://api.adviceslip.com/advice";
	fetchApi(url);
	$('span').text(counter);
	//fetch Api and increase counter on click
	$('#dice').click((e)=>{
		fetchApi(url);
		counter+=1;
		$('span').text(counter);
	})

});

//fetching Api 
const fetchApi= (url)=>{
	$.get(url , function(data){
    	let obj = JSON.parse(data)
    	let advice = obj.slip.advice   
    	$('#advice').fadeIn(200 , function(){
		$(this).text(advice);
	});
		
  })
}
