var xCoordinate=0;
var yCoordinate=0;
var countClick=0;
var flag=1;
var treasureLocation=[];

//funtion to set a random location for the treasure.
function randomTreasureLocation() {
  var xOfTreasure= Math.floor(Math.random()*920);
  var yOfTreasure= Math.floor(Math.random()*920);
  return [xOfTreasure,yOfTreasure];
}

var treasureLocation=[];
if(flag>=1) {
treasureLocation= randomTreasureLocation();
flag--;
}

//funtion to calculate the distance between the treasure and use click.
function distaceOfTC () {
  console.log('treasureLocation is '+ treasureLocation);
  var distBetweenTC= Math.sqrt(Math.pow((treasureLocation[0]-xCoordinate),2)+Math.pow((treasureLocation[1]-yCoordinate),2));
  if (distBetweenTC<=50) {
  alert('you won buddy!!!');
  flag++;
  return;
}
  else if(distBetweenTC<100)
  alert('you are really hot');
  else if (distBetweenTC<200)
  alert('you are getting hot');
  else if (distBetweenTC<250)
  alert('you are now warmer');
  else if (distBetweenTC<300)
  alert('you are a bit warm');
  else if (distBetweenTC<350)
  alert('you are still cold');
  else if (distBetweenTC<400)
  alert('you are cold');

}

//function to get the co-ordinate of the click and count the clicks
function clickHandler(event) {
  if(flag>=1) {
  treasureLocation= randomTreasureLocation();
  flag--;
  }
  console.log("Click is at co-ordinate (x)"+ event.pageX+ '(Y)'+event.pageY);
  distaceOfTC();
  xCoordinate = event.pageX;
  yCoordinate = event.pageY;
  countClick++;
}
$('#hiddenGreen').click(clickHandler);
