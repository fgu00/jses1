var express=require("express");
var apiserver=express(); 



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