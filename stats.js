var socket = new WebSocket("wss://XD.nitrogem35.repl.co")
socket.onopen = function(){
  socket.send("assault")
}
socket.onmessage = function(event) {
  let lbArray = [];
  event = event.data.split(" ")
  for(let i = 0; i < 60; i+=3) {
    lbArray.push([event[i], event[i+1], event[i+2]])
  }
  console.log(lbArray)
}
