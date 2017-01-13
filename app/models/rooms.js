var mongoose = require("../libs/mongoose.js");
var Schema = mongoose.Schema;
var schema = new Schema({
	name: String,
	mafia: Number,
	doctor: Number,
	citizen: Number,
	sheriff: Number,
});
exports.Rooms = mongoose.model("Rooms", schema);