/**
 * Created by bchennu .
 */


var driver = require('couchbase');
var idgen = require('uuid');

//config params for the DB
var config={
    "couchbase": {
        "server": "127.0.0.1:8091",
        "bucket": "default"
    }
};

//generate the id
var id1 = idgen.v4();

//connect to cluster here
var db = new driver.Cluster(config.couchbase.server).openBucket(config.couchbase.bucket);

module.exports={
  insert:function(key1,value1){

//insert the record
      db.upsert(id1,{key1:value1},function(err,result){
          if(err){
              console.error("From bchennu - Couchbase error: "+err);
              return;
          }
          console.log("From bchennu - Inserted record : "+result+" with id :"+id1);

      });

  }
};