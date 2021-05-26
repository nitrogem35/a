var socket = new WebSocket("wss://XD.nitrogem35.repl.co")
socket.onopen = function(){
  socket.send("pointsneutralized")
}
socket.onmessage = function(event) {
  let lbArray = [];
  event = event.data.split(" ")
  for(let i = 0; i < 60; i+=3) {
    lbArray.push([event[i], event[i+1], event[i+2]])
    for(let x = 0; x < 3; x++) {
      document.getElementsByTagName("td")[i+x].innerHTML = lbArray[i/3][0+x]
    }
  }
  console.log(lbArray)
}
