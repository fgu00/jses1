const { response } = require("express");
var express=require("express");
var apiserver=express(); 
var sf=require("fs");
const { ServerResponse } = require("http");



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
    response.setHeader("content-type","application/json");
    response.send(JSON.stringify({"cioa il tuo nome è: ":request.query.nome}));
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
});
apiserver.post("/mionome",(request,response)=>{
    console.log("richiesta get sul mionome",request.body);
    response.setHeader("content-type","application/json");
    response.send(JSON.stringify({"cioa il tuo nome è: ":request.body.nome}));
});
apiserver.get("/newStudent",(request,response)=>{          
    console.log("nuovo studente",request.query.id+"".request.query.nome+request.query.cognome);
    sf.readFile("studenti.js",(err,data)=>{
        if(err){ console.log("error:"+err);
    }else{
        var studenti=JSON.parse(data);
        studenti[studenti.length+1]=request.query.data;
      console.log("surname: "+request.query.surname,"name: "+request.query.nome,"id: "+request.query.cognome>studenti.js);  
    }
})  
    //prelevare l'oggetto con id 1
    //send
//newstudent?id=3&name=
});
