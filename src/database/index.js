const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://bielslima:fUhGilbvLQ01@cluster0.wtvlj.gcp.mongodb.net/crepelito?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;