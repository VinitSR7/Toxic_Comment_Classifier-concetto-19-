//Comment both annoymous and with user id(modified)

//var button_1=document.getElementById("button_1_pa");
var button_2=document.getElementById("test1");
var comment = document.getElementById("comment_here");
var user_name= document.getElementById("user_name");
var section = document.getElementById("show_comment");

// button_1.addEventListener("click",function(){
// 	console.log("button1 working");
// 	if(comment.value.length > 0 )
// 	{
// 		var p_1 = document.createElement("p");
// 		p_1.appendChild(document.createTextNode("Anonymous"+" :"));
// 		section.appendChild(p_1);
//
// 		var p_2 = document.createElement("p");
// 		p_2.appendChild(document.createTextNode(comment.value));
// 		section.appendChild(p_2);
// 		user_name.value = "";
// 		comment.value = "";
// 	}
// });

button_2.addEventListener("keyup",function(event){
	console.log("button2 working");
	console.log(comment.value);
	if(event.event.keyCode === 13 && comment.value.length > 0 && user_name.value.length >0)
	{
		var p_1 = document.createElement("p");
		p_1.appendChild(document.createTextNode(user_name.value +":"));
		section.appendChild(p_1);

		var p_2 = document.createElement("p");
		p_2.appendChild(document.createTextNode(comment.value));
		section.appendChild(p_2);
		user_name.value = "";
		comment.value = "";
	}
});
