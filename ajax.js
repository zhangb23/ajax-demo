window.JQuery = {}
window.$ = window.JQuery
window.JQuery.ajax =function ({url,method,body,success,fail}){
	let request = new XMLHttpRequest()
	request.open(method,url)
    request.onreadystatechange = function () {
    	if(request.readyState === 4){
    		if(request.status >= 200 && request.status < 300){
    			success.call(undefined,request.responseText)
    		}else if(request.status >= 400){
    			fail.call(undefined,request)
    		}
    	}
    }
    request.send(body)
}



myButton.addEventListener('click', function(){
  $.ajax({
    url: '/xxx',
    method: 'get',
    body:'a=1&b=2',
    success:(x)=>{console.log(x)}
    fail:(x)=>{console.log(x)}
  })
})