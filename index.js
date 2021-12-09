var express=require("express");
var apiserver=express(); 
var sf=require("fs");
const { Z_ASCII } = require("zlib");



console.log("funziona");

var port=3000;
var host="localhost";
apiserver.listen(port,host,()=>{
    console.log("server running at http://%s:%d",host,port);
});
apiserver.get("/",(request,response)=>{
    console.log("sono in GET",request);
    response.send("ciao client sei in home");
});
var nome="russo";
apiserver.get("/nome",(request,response)=>{
    console.log("richiesta get su nome",request);
    response.send("cioa il mio  nome è: "+nome);
});
apiserver.get("/mionome",(request,response)=>{
    console.log("richiesta get sul mionome",request.query);
    response.send("cioa il tuo nome è: "+request.query.nome);
})
apiserver.get("/somma",(request,response)=>{          
    console.log("somma request",request.query);
    response.send("risualtato "+(request.query.a-(-request.query.b)));
})  
apiserver.get("/student",(request,response)=>{          
    console.log("student id",request.query.id);
    //leggere file
    sf.readFile("studenti.js",(err,data)=>{
        if(err){ console.log("error:"+err);
    }else{
        var students=JSON.parse(data);
        console.log("students:"+students[0].surname);
        for(var a=0;a<students.length;a++){
            if(students[a].id==request.query.id){
                response.send("lo studente è: "+students[a].id+" "+students[a].surname+" "+students[a].name); 
            }
        }
        response.send(students.find(x=>x.id===request.query.id));
    }

});
    //prelevare l'oggetto con id 1
    //send

})                                                              