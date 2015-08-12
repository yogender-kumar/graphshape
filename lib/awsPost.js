var AWS = require('aws-sdk');
var dataProcess = require("./process.js");



AWS.config.update({accessKeyId: 'AKIAJXP6NJRNEWN2AMTA', secretAccessKey: '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'});

AWS.config.region = "ap-southeast-1";
AWS.config.apiVersions = {
    dynamodb: '2014-10-12',
};

var db = new AWS.DynamoDB();


module.exports.Process = function(req, res){
	var json = req.query.data;
	if(json == undefined || json == ""){
		console.log("There is no data to store");
		res.status(405).end();
	}else{
		var b = new Buffer(json, 'base64').toString();
		b = JSON.parse(b);
		putData(b);
		res.send(b);
	}
}

function putData(json){
	try{
		var params = dataProcess.init(json);
		db.putItem(params, function(err, data) {
			err && console.log(err);
		});
	}catch(er){console.log(er.message);}
}



module.exports.getProcess = function(req, res){
	var data = getData();
	res.send(data);
}

function getData(json){
	try{
		console.log("getDataFunction");
		db.putItem({
			 'TableName': "graphshape"
		  }, function(err, data) {
			 err && console.log(err);
			 return data;
		  });
	}catch(er){console.log(er.message);}
}









