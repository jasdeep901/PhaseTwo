document.getElementsByTagName("input type").value = "";
// get location 
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
}

// on success add link to view and google map
function success(location) {
var link = document.createElement('a');
link.href = `https://www.openstreetmap.org/#map=18/${location.coords.latitude}/${location.coords.longitude}`;
link.textContent = "openstreetmap";
document.body.prepend(link);
// created google map with coordinates
var googlemap = document.createElement('div');
googlemap.style.height = "300px";
googlemap.style.width = "500px";
var viewMap = new google.maps.Map(
googlemap, {zoom: 10, center: {lat: location.coords.latitude, lng: location.coords.longitude}});
// add to body
document.body.prepend(googlemap);
}
// for errors

function error()
{
	alert("Unable to reterieve");
}
function AddItem() {
    let ul = document.querySelector('ul');
    let li = document.createElement("li");
    let l = document.createElement('h1');
    let Value = document.getElementById("myInput").value;
    let Item = document.createTextNode(Value);
	// changed addition of element in task
	l.textContent = Item.textContent;
    li.appendChild(l);
    ul.appendChild(li);

    let checkboxItem = document.createElement('input');
    checkboxItem.setAttribute('type', 'checkbox');
    li.appendChild(checkboxItem);
	checkboxItem.addEventListener('click',ListItem);
	// changed actionlistener as per improving functionality
    function ListItem(e) {
        let todoItem = e.target.parentNode;
        todoItem.querySelector('h1').style.textDecoration = 'line-through';
        ul.appendChild(todoItem);
    }

    let RemoveButton = document.createElement('button');
    RemoveButton.setAttribute('id', 'Del');
    RemoveButton.setAttribute('class', 'MyDel')
    RemoveButton.textContent = 'X';
    li.appendChild(RemoveButton);

	// delete node functionality improved
    function DeleteTodo(e) {
        let I = e.target.parentNode;
        ul.removeChild(I);
    }
    RemoveButton.addEventListener('click', DeleteTodo);
}

button = document.getElementById("myBtn");
button.addEventListener('click', AddItem);