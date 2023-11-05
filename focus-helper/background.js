chrome.alarms.onAlarm.addListener(onAlarm)
function onAlarm(alarm)
{   if(alarm.name == "break")
    {
        breakNotification();
        chrome.alarms.clear("break");
        console.log("break alarm terminated");
        createAlarmStudy();
       
        
    }
   else if (alarm.name == "study")
   { 
        studyNotification();
        chrome.alarms.clear("study");
        console.log("study alarm terminated");
        createAlarmBreak();
   }
   else
   {
    console.log("something wrong");
   }
}
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request=="start")
            {createAlarmStudy();}
        sendResponse(()=> 
        {
          return false;
        });

    }
);
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request=="stop")
            {chrome.alarms.clearAll();}
        sendResponse(()=> 
        {
          return false;
        });

    }
);

function createAlarmBreak() {
    chrome.alarms.create(
        "break",
        {
            when: Date.now() + (10*1000)
        }
    );
    console.log("break-alarm-created");
}

function createAlarmStudy() 
{
    chrome.alarms.create(
    "study",
    {
        when: Date.now() + (5*1000)
    }
    );
    console.log("study alarm created");
}


function breakNotification()
{
    chrome.notifications.create(
        {   
            type:"basic",
            silent:false,
            title:"BREAK!!!",
            message:"Take a 5mins break :)",
            iconUrl:"alarm.jpg",
           

        },()=>{});  
      
        
}
function studyNotification()
{
    chrome.notifications.create(
        {   
            type:"basic",
            silent:false,
            title:"FocusTime",
            message:"Let's have fun doing work :)",
            iconUrl:"alarm.jpg",
           

        },()=>{});  
      
        
}
