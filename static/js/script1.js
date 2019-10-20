var button_2=document.getElementById("test1");
var comment = document.getElementById("comment_here");
var user_name= document.getElementById("user_name");
var section = document.getElementById("show_comment");


button_2.addEventListener("click",function(){
	console.log("button2 working");
	console.log(comment.value.length," bfhxnx",user_name.value.length );
  console.log("ajebkjlbewf");
	if(comment.value.length > 0 && user_name.value.length >0)
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
