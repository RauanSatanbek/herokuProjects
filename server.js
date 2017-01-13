var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var fs = require("fs");
var app = express();
app.use(cors());
app.use(bodyParser());
/* ------------------------------------------------------------------------------------------
* Подключаем все коллекций
*/
	var Rooms = require("./app/models/rooms.js").Rooms;

/* ------------------------------------------------------------------------------------------
* add room
*/
	app.post("/api/room", function(req, res) {
		console.log("room");
		var name = req.body.name;
		var mafia = req.body.mafia;
		var doctor = req.body.doctor;
		var citizen = req.body.citizen;
		var sheriff = req.body.sheriff;
		var room = new Rooms({
			name: name,
			mafia: mafia,
			doctor: doctor,
			citizen: citizen,
			sheriff: sheriff
		});

		room.save(function(err, affected) {
			if(err) {
				res.statusCode = 500;
				res.send(err);
			} else {
				Rooms.find({}, function(err, result) {
					if(err) {
						res.statusCode = 500;
						res.send(err);
					} else {
						res.send(result);
					}
				});
			}
		});
	});

/* ------------------------------------------------------------------------------------------
* get all room
*/
	app.get("/api/room", function(req, res) {
		Rooms.find({}, function(err, result) {
			if(err) {
				res.statusCode = 500;
				res.send(err);
			} else {
				res.send(result);
			}
		});
	});
	// process.env.PORT || 
var port = 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});