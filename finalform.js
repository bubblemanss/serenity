var name, email, message, thedate, submit;


$.getScript("index.js"), function (){
	this.name = name;
	this.email = email;
	this.message = message;
	thedate = date;
	this.submit = submit;
});



var x = document.getElementById("form_final");

var createform = document.createElement('form'); // Create New Element form
	createform.setAttribute("action", "http://127.0.0.1:3000");        // Setting action Attribute on form
	createform.setAttribute("method", "post");  // Setting method Attribute on form
	x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of form
	heading.innerHTML = "SafeSpace ";  
	createform.appendChild(heading);

var line = document.createElement('hr');  //giving horizontal row after heading
	createform.appendChild(line);

var description = document.createElement('p');
	createform.appendChild(description);
	description.innerHTML='Welcome to SafeSpace, a place to post personal and private concerns and anxieties!';

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for name field
	namelabel.innerHTML = "Your Name : ";            // Set Field Labels
	createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create input field for name
	inputelement.setAttribute("type", "text");  
	inputelement.setAttribute("name", "dname");
	inputelement.setAttribute("value", name);
	createform.appendChild(inputelement);

var linebreak = document.createElement('br');
	createform.appendChild(linebreak);


var feeling = document.createElement('label');  //Create Label for email field
	feeling.innerHTML = "What made you go on SafeSpace today : ";
	createform.appendChild(feeling);

var emailelement = document.createElement('input'); // Create input field for email
	emailelement.setAttribute("type", "text");
	emailelement.setAttribute("name", "demail");
	emailelement.setAttribute("value", email);
	createform.appendChild(emailelement);

	
var emailbreak = document.createElement('br');
	createform.appendChild(emailbreak);

// Append Textarea
var messagelabel = document.createElement('label'); 
	messagelabel.innerHTML = "Feel free to write in your journal : ";
	createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea'); 
	texareaelement.setAttribute("name", "dmessage");
	createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
	createform.appendChild(messagebreak);
	
var date = document.createElement('input');
	date.setAttribute("type", "text");
	date.setAttribute("name", "ddate");
	date.setAttribute("value", thedate);
	date.setAttribute("id", "dateTime")
	createform.appendChild(date);

	


