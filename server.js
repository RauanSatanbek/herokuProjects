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
var obj = [
	{
		added_at : "2017-03-07T13:47:43.998245Z",
		additional_info : null,
		address : "Алтын ауыл 4 дом 34 кв",
		answers_count : 0,
		approved : false,
		city : 1,
		client : 78,
		comment : "",
		districts : [],
		id : 61,
		is_child : false,
		is_loop : false,
		medtest: null,
		price : 3000,
		procedure : null,
		sex : "male",
		specialities : [2, 12, 13, 14, 39],
		symptom : 33,
		time_from : "16:30",
		time_to : "21:30",
		type : 0,
		when_date : "2017-03-14",
	},
	{
		added_at : "2017-03-07T13:47:43.998245Z",
		additional_info : null,
		address : "Алтын ауыл 4 дом 34 кв",
		answers_count : 0,
		approved : false,
		city : 1,
		client : 78,
		comment : "",
		districts : [],
		id : 61,
		is_child : false,
		is_loop : false,
		medtest: null,
		price : 3000,
		procedure : null,
		sex : "male",
		specialities : [2, 12, 13, 14, 39],
		symptom : 33,
		time_from : "16:30",
		time_to : "21:30",
		type : 0,
		when_date : "2017-03-14",
	},
	{
		added_at : "2017-03-09T21:14:41.847203Z",
		additional_info : null,
		address : "Абылай хана 49",
		answers_count : 0,
		approved : false,
		city : 1,
		client : 83,
		comment : null,
		districts : [],
		id : 76,
		is_child : false,
		is_loop : true,
		medtest : null,
		price : 3000,
		procedure : 5,
		sex : "male",
		specialities : [],
		symptom : null,
		time_from : "08:00",
		time_to : "16:00",
		type : 3,
		when_date : "2017-03-11",
	}
];
// get info
	app.get("/api/info", function(req, res) {
		res.send(obj);
	});
	// process.env.PORT || 
var port = 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});