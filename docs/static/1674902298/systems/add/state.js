window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){A.properties=[{id:"3048c1c0-3075-4440-b8b8-57dcb8de2d6b",name:"name",type:m,isOptional:a,description:"Name of system"},{id:"9ce69b54-1c4b-4797-a087-e1ff46836c97",name:"type",type:B,enums:[C],defaultValue:C,isOptional:a,description:"Type of system"},{id:i,name:"stage",description:"System stage name",type:m,isOptional:a},{id:i,name:"host",description:"Connection host",type:m,isOptional:a},{id:i,name:"port",description:"Connection port",type:"NUMBER",isOptional:a},{id:i,name:"securityCredentialType",description:"Security credential type",type:B,enums:[D],defaultValue:D,isOptional:a}];return {staticAssetsBase:"https:\u002F\u002Folexandrbig.github.io\u002Ffr-kipa\u002Fstatic\u002F1674902298",layout:n,error:o,state:{languages:[{title:"English",code:p}],locale:p,appVersion:"0.11.1",appOperations:[],allOperations:[{id:j,key:"exceptionhandler",version:c,name:"Exception operation",description:"Specify exception flow",lastUpdated:d,builtIn:b,groupId:e,sequenceInGroup:f,category:"EXCEPTION",resultDescription:k,isContainerOp:a,searchTags:["exception"]},{id:j,key:q,version:c,name:"Loop operation",description:"Iterate over operations inside",lastUpdated:d,builtIn:b,groupId:e,sequenceInGroup:f,category:"LOOP",resultDescription:k,isContainerOp:a,searchTags:[q]},{id:j,key:g,version:c,name:"Get file(s) from (S)FTP server",description:"Retrieves one or more files specified by full path from FTP server",lastUpdated:d,builtIn:b,groupId:e,sequenceInGroup:f,category:h,resultDescription:k,isContainerOp:a,searchTags:["FTP","file","pull file from ftp","retrieve file from FTP"]},{id:"4cc8bca6-07c3-4bd7-b035-9047a6bfeea3",key:g,version:c,name:"List files in (S)FTP directory",description:"Lists the contents of the remote working directory",lastUpdated:d,builtIn:b,groupId:e,sequenceInGroup:3,category:h,resultDescription:"List of file details",isContainerOp:a,searchTags:[l,r]},{id:"4cc8bca6-07c3-4bd7-b035-9047a6bfeea4",key:g,version:c,name:"Put FTP file",description:"Puts file into remote (S)FTP directory",lastUpdated:d,builtIn:b,groupId:e,sequenceInGroup:s,category:h,resultDescription:"List of file details of transfered files",isContainerOp:a,searchTags:[l,r]},{id:"4cc8bca6-07c3-4bd7-b035-9047a6bfeea5",key:g,version:c,name:"delete remote FTP file",description:"Deletes a file from the remote working directory",lastUpdated:d,builtIn:b,groupId:e,sequenceInGroup:4,category:h,resultDescription:"Information on deleted file",isContainerOp:a,searchTags:[l,"delete file in (S)ftp remote directory"]},{id:"be35e877-f176-4af3-b48f-a2fa72f3fb38",key:"mapGroovyScript",version:c,name:"Groovy Map",description:"Map data using grooy",lastUpdated:d,builtIn:b,groupId:"aef2cf7e-14b6-4f99-9ca5-e85d17d1ab24",sequenceInGroup:f,category:"MAPPING",resultDescription:"Data transformation of one data structue into another",isContainerOp:a,searchTags:["Map data","data mapping","data transformation","groovy"]},{id:"be35e877-f176-4af3-b48f-a2fa72f3fb39",key:t,version:c,name:"Retrieve messages",description:"Retrieve messages from Kafka topic",lastUpdated:d,builtIn:b,groupId:u,sequenceInGroup:f,category:v,resultDescription:"List of messages in data pipeline",isContainerOp:a,searchTags:[w,"read messages",x,"read message"]},{id:"be35e877-f176-4af3-b48f-a2fa72f3fb40",key:t,version:c,name:"Send messages",description:"Send messages to Kafka topic",lastUpdated:d,builtIn:b,groupId:u,sequenceInGroup:s,category:v,resultDescription:"One or many messsages are sent to Kafka topic",isContainerOp:a,searchTags:[w,"send messages",x,"send message"]}],availableOperations:[],availableSystems:[],availableFlows:[],latestId:o,appData:[{link:"\u002Fdesigner",code:"designer",name:"Designer",icon:"pen-nib",views:[]},{link:"\u002Fflows",code:y,name:y,icon:"sitemap",views:[]},{link:"\u002Fsystems",code:n,name:"Systems",icon:"server",views:[]},{link:"\u002Fgateway",code:"gateway",name:"API Gateway",icon:"globe",views:[]},{link:"\u002Fcredentials",code:"credentials",name:"Security Credentials",icon:"key",views:[]}],tabs:["m1:OVERVIEW",z],activeModule:"m1",activeView:z,operationsModel:A,operationCache:{"api/systems/model/":A}},serverRendered:b,routePath:"\u002Fsystems\u002Fadd",config:{_app:{basePath:"\u002Ffr-kipa\u002F",assetsPath:"\u002F",cdnURL:"https:\u002F\u002Folexandrbig.github.io\u002Ffr-kipa\u002F"},content:{dbHash:"8fe72f21"}}}}(false,true,"1.0.0","2018-12-10T13:49:51.141Z","7020fba8-f581-41e8-a5a3-022c7ef10a95",1,"ftplistfiles","FILE","114cc6b8-4b49-4814-8e26-26b71dbb1632","4cc8bca6-07c3-4bd7-b035-9047a6bfeea2","","ftp","STRING","systems",null,"en","loop","list files in directory",2,"cron_camel_k","5faf3d6c-f0e8-4540-b903-c656820ffc43","KAFKA","messaging","kafka","flows","m1:PRODUCT:VERSIONS",{},"ENUM","SFTP","BASICAUTH"));