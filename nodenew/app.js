var http=require("https");
var url = 'https://affiliate-api.flipkart.net/affiliate/api/carehello.json';
var bodyParser = require('body-parser');
var cron = require('cron');


var mongodb = require('mongodb');
var async=require('async');
var tc=0;

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
//var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var urlmongo = 'mongodb://buddyadmin:memongosh1@54.255.147.43:27017/buddydb';
//MongoClient.connect(urlmongo,function(err,db){

var job = new cron.CronJob('* * * * *', function() {

//
//var db = monk('54.169.129.170:27017/meshdb', {
//    username : 'buddyadmin',
//    password : 'memongosh1'
//});
//if(!db){
//    console.log('no connection')
//}
//if(db){
//    console.log('Digo ')
//}
var jsonParser = bodyParser.json();
var req=require('sync-request');
var resp;
//var collection=db.get('flipkartaff');

resp=req('GET',url);
//var request=http.get(url,function(response){
var buffer="";
var map={};
var map2={};
var api="";
    var res;

var data2="";
//response.on("data",function(chunk){
//buffer+=chunk;});
//response.on("end",function(err)
//{
var data=JSON.parse(resp.getBody());

 api=data.apiGroups.affiliate.apiListings.laptops.availableVariants["v0.1.0"].get;
//console.log(api);
var i=0;

var w=12;
    while(api!=null) {


    var requestnew = require('sync-request');
    var username = 'care@hellobuddy.in'
    var password = 'buddyemi'
    var options = {
        //   url: api,
        auth: {

            username: username,
            password: password
        },
        //  method: 'GET',COMEDZY4ZGDDGGKM
        headers: { //We can define headers too
            'Fk-Affiliate-Id': 'carehello',
            'Fk-Affiliate-Token': 'c4ccb69921b94f5ab7c7cb3936ab1291'
        }
    }


try{

     res = requestnew('GET', api, options);
    }
    catch(ex){console.log(ex);}

        //    var db = require('monk')(urlmongo);
        //var users = db.get('sad');
    //console.log(JSON.parse(res.getBody()));

//    request2(options, function (err, res, body) {
//        if (err) {
//            console.dir(err)
//            return
//        }
//
//
    data2 = JSON.parse(res.getBody());
    //  console.dir(data2.nextUrl);

    api = data2.nextUrl;
   //console.log(api);

// MongoClient.connect(urlmongo, function (err, db) {
    var key, count = 0,mo=0;

  //  var collection=db.collection('flipkartaff');
    for (key in data2.productInfoList) {
//async.whilst(
//        function () { return count < 5; },
//        function (callback) {
        if (data2.productInfoList.hasOwnProperty(key)) {


             // id(db)
             //var collection = db.collection('flipkartaff222a');

                var items= data2.productInfoList[count]["productBaseInfo"].productIdentifier.productId;
            var item2=data2.productInfoList[count];

            if (map[data2.productInfoList[count]["productBaseInfo"].productIdentifier.productId] != 1)
            {
map2[items]=item2;


               // console.log(data2.productInfoList[count]["productBaseInfo"].productIdentifier.productId);
                tc+=1;


                map[data2.productInfoList[count]["productBaseInfo"].productIdentifier.productId] = 1;}

            //users.insert(item2, function (err,res){if(!err)
            //    console.log("success");}); {
            //
            //}
           // console.log(items);

            //var to=users.findOne({productId:items});
            //if(!to)
            //console.log("fww");
       //users.findOne({productId:items},function (err, docs) {
       //            if(docs==null){
       //                console.log("dd");
       //                users.insert(item2, function (err, result) {
       //                    if (err) {
       //                        console.log(err);
       //                        db.close();
       //                    } else {
       //                       // console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
       //                        db.close();}
       //                    //console.log(items);
       //
       //                });
       //            }
       //              else if(docs!=null)
       //            { console.log("uu");
       //                users.update(item2, function (err, result) {
       //                if (err) {
       //                    console.log(err);
       //                    db.close();
       //                } else {
       //                    console.log('updated');
       //                    db.close();}
       //                //console.log(items);
       //
       //            });}
       //         });

//COMEDGTK55C8BRXY
//console.log("true");

                //console.log(data2.productInfoList[count]["productBaseInfo"].productIdentifier.productId);
           //   console.log(count);

            //      console.log(data2.productInfoList[count]["productBaseInfo"].productIdentifier.productId);
            count++;

        }


    }//);//



///        //console.log(map[data2.productInfoList[count - 1]["productBaseInfo"].productIdentifier.productId]);
//    });
//i++;

}

var e=0;
var db = require('monk')(urlmongo);
var users = db.get('flipkartProducts1');
var q = async.queue(function (task, callback) {
    //console.log('hello ' + e+++task.doc);

//console.log(task.doc.productBaseInfo.productIdentifier.productId);
    users.findOne({'productBaseInfo.productIdentifier.productId':task.doc.productBaseInfo.productIdentifier.productId},function(err,res){
    if(res)
    { users.update(task.doc,function(err,res){

         });}
    if(res==null){ users.insert(task.doc,function(err,res){

    });}});

   // users.findOne({productInfoList:task.doc},function(err,d){console.log(doc);})
   // users.insert(task.doc,function(err,res){
   //
   // });
    callback();
}, 2);
q.drain = function() {

    console.log('all items have been processed');

}
//console.log(map2);
for (var doc in map2) {
    q.push({ doc: map2[doc] }, function(err) {
       // console.log(doc)
        if (err) console.log(err);
    })
}

//for(var id in map2){
//   // users.insert(map2[doc]);
//    users.findOne({productId:id},function(err,docs){if(docs==null&&err==null)
//        console.log(id);}
//
//    )
//    console.log(true);
//    //console.log
// //   console.log(map2.length);
//}

//users.insert(map2.[doc],function(err,res)
//{db.close();})}

//});

    console.log('Function executed!');
}, null, true);
