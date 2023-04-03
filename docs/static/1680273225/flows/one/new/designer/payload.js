__NUXT_JSONP__("/flows/one/new/designer", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){return {data:[{}],fetch:{"0":{}},mutations:[["SET_AVAILABLE_OPERATIONS",[{id:"a794778d-4fe3-4dae-aa81-d3313add0f5d",key:"cron_camel_k",version:b,name:k,description:k,lastUpdated:c,builtIn:a,groupId:l,sequenceInGroup:e,category:"SCHEDULER",resultDescription:"An event is trigged according to a scheduler",isParent:d,isTrigger:a,searchTags:["scheduler","schedule event","cron","recurrence","reoccurence"]},{id:"23c8bca6-07c3-4bd7-b035-9047a6bfeea2",key:m,version:b,name:"Loop operation",description:"Iterate over operations inside",lastUpdated:c,builtIn:a,groupId:f,sequenceInGroup:e,category:"LOOP",resultDescription:h,isContainerOp:d,searchTags:[m]},{id:"22c8bca6-07c3-4bd7-b035-9047a6bfeea2",key:"exceptionhandler",version:b,name:"Exception operation",description:"Specify exception flow",lastUpdated:c,builtIn:a,groupId:f,sequenceInGroup:e,category:"EXCEPTION",resultDescription:h,isContainerOp:d,searchTags:["exception"]},{id:"21c8bca6-07c3-4bd7-b035-9047a6bfeea2",key:n,version:b,name:"Switch operation",description:"Specify switch flow",lastUpdated:c,builtIn:a,groupId:f,sequenceInGroup:e,category:"SWITCH",resultDescription:h,isContainerOp:d,searchTags:[n]},{id:"a794778d-4f13-4dae-aa81-d3313add0f5d",key:"parse_csv",version:b,name:"Parse CSV",description:"Define parse options for file",lastUpdated:c,builtIn:a,groupId:l,sequenceInGroup:e,category:g,resultDescription:"File content updated and parsed",isParent:d,isTrigger:a,searchTags:["csv","file parse"]},{id:"20c8bca6-07c3-4bd7-b035-9047a6bfeea2",key:i,version:b,name:"Get file(s) from (S)FTP server",description:"Retrieves one or more files specified by full path from FTP server",lastUpdated:c,builtIn:a,groupId:f,sequenceInGroup:e,category:g,resultDescription:h,isContainerOp:d,searchTags:["FTP","file","pull file from ftp","retrieve file from FTP"]},{id:"4cc8bca6-07c3-4bd7-b035-9047a6bfeea3",key:i,version:b,name:"List files in (S)FTP directory",description:"Lists the contents of the remote working directory",lastUpdated:c,builtIn:a,groupId:f,sequenceInGroup:3,category:g,resultDescription:"List of file details",isContainerOp:d,searchTags:[j,o]},{id:"4cc8bca6-07c3-4bd7-b035-9047a6bfeea4",key:i,version:b,name:"Put FTP file",description:"Puts file into remote (S)FTP directory",lastUpdated:c,builtIn:a,groupId:f,sequenceInGroup:p,category:g,resultDescription:"List of file details of transfered files",isContainerOp:d,searchTags:[j,o]},{id:"4cc8bca6-07c3-4bd7-b035-9047a6bfeea5",key:i,version:b,name:"delete remote FTP file",description:"Deletes a file from the remote working directory",lastUpdated:c,builtIn:a,groupId:f,sequenceInGroup:4,category:g,resultDescription:"Information on deleted file",isContainerOp:d,searchTags:[j,"delete file in (S)ftp remote directory"]},{id:"be35e877-f176-4af3-b48f-a2fa72f3fb38",key:"mapGroovyScript",version:b,name:"Groovy Map",description:"Map data using grooy",lastUpdated:c,builtIn:a,groupId:"aef2cf7e-14b6-4f99-9ca5-e85d17d1ab24",sequenceInGroup:e,category:"MAPPING",resultDescription:"Data transformation of one data structue into another",isContainerOp:d,searchTags:["Map data","data mapping","data transformation","groovy"]},{id:"be35e877-f176-4af3-b48f-a2fa72f3fb39",key:"retrieve_messages",version:b,name:"Retrieve messages",description:"Retrieve messages from Kafka topic",lastUpdated:c,builtIn:a,groupId:q,sequenceInGroup:e,category:r,resultDescription:"List of messages in data pipeline",isContainerOp:d,searchTags:[s,"read messages",t,"read message"]},{id:"be35e877-f176-4af3-b48f-a2fa72f3fb40",key:"send_messages",version:b,name:"Send messages",description:"Send messages to Kafka topic",lastUpdated:c,builtIn:a,groupId:q,sequenceInGroup:p,category:r,resultDescription:"One or many messsages are sent to Kafka topic",isContainerOp:d,searchTags:[s,"send messages",t,"send message"]}]]]}}(true,"1.0.0","2018-12-10T13:49:51.141Z",false,1,"7020fba8-f581-41e8-a5a3-022c7ef10a95","FILE","","ftplistfiles","ftp","Schedule event","b420e4f6-f1e6-48ba-ab96-4e1989ca7c40","loop","switch","list files in directory",2,"5faf3d6c-f0e8-4540-b903-c656820ffc43","KAFKA","messaging","kafka")));