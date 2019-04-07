const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('.'));

app.get('/', function(request, response){
	response.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8000, function(){
	console.log("Node.js server started ...");
});