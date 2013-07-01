
var dropZone = document.createElement('div');
dropZone.id="drop";
document.getElementsByTagName('body')[0].appendChild(dropZone);

var droppedLink = document.createElement('p');
droppedLink.id="droppedLink";
document.getElementsByTagName('body')[0].appendChild(droppedLink);

function cancel(e) {
	this.classList.toggle('over');
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function cancel2(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function cancel1(e) {
	this.classList.toggle('over');
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

var drop = document.querySelector('#drop');

// Tells the browser that we *can* drop on this target
addEvent(drop, 'dragover', cancel2 );
addEvent(drop, 'dragenter', cancel);
addEvent(drop, 'dragleave', cancel);

addEvent(drop, 'drop', function (e) {
  if (e.preventDefault) e.preventDefault(); // stops the browser from redirecting off to the text.
  document.getElementById('droppedLink').innerHTML = e.dataTransfer.getData('Text');
  //this.innerHTML = '<p>' + e.dataTransfer.getData('Text') + '</p>';
  return false;
});