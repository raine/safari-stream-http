const elem = document.getElementById('output')
var w = new Worker('./worker.js')
w.onmessage = (e) => elem.innerHTML += e.data
