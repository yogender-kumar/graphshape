var crypto = require("crypto");
var generateDBID = function(){
	return crypto.randomBytes(10).toString('hex');
}



module.exports.init = function(data){
	try{
		var timeStamp = String(1*new Date()), id = generateDBID()+"_"+timeStamp;
		var d = {
			"TableName":"graphshape",
			"Item":{
				"txid":{
					"S":id
				}
			},
		}
		for(var i in data){
			for(var j in data[i]){
				if(typeof data[i][j] == "object"){
					d["Item"][j] = {"S":JSON.stringify(data[i][j])}
				}else if(typeof data[i][j] != "function"){
					d["Item"][j] = {"S":String(data[i][j])}
				}
			}
		}
		return d;
	}catch(er){console.log(er.message);}
}