// Move the image
var img = document.getElementById('madi');

var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
    
}
img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    
    
    //img.style.marginLeft = '100px';        to Jump right
};


//submit username/password to login


var submit = document.getElementById('submit_btn');
submit.onclick = function () {
   //Create a request object
   var request = new XMLHttpRequest();
   
   //Capture the response and store it in a variable
   request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
             //Take some action
            if (request.status === 200) {
                //Capture a list of names and render it as a list
            	console.log('user logged in');
	            alert('logged in successfully');
            } else if (request.status === 403) {
	                alert('Username/password is incorrect');
                    } else if (request.status === 500) { 
                            alert('something went wrong on the server');
                            }
        }
    };
    
    //make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);   //for debugging purpose
    console.log(password);

    request.open('POST', 'http://anujasreejithbabu.imad.hasura-app.io/login', true);
    request.setRequestHeader('Content-Type', 'application/json'); 
    request.send(JSON.stringify ({username: username, password: password}));
};








//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            //Take some action
            if (request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
       //Not done yet 
    };
    
    //Make the request
    request.open('GET', 'http://anujasreejithbabu.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit name


var submit1 = document.getElementById('submit_btn1');
submit1.onclick = function () {
   //Create a request object
   var request = new XMLHttpRequest();
   
   //Capture the response and store it in a variable
   request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
             //Take some action
            if (request.status === 200) {
                //Capture a list of names and render it as a list
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for (var i=0; i< names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    
    //make the request
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://anujasreejithbabu.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};








