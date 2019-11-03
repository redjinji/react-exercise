class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(eventName, cb) {
        if (!this.events[eventName]) this.events[eventName] = [];
        
        this.events[eventName].push(cb);
        
        return function() {
            this.events[eventName].filter((fn) => fn !== cb);
        }
    }
}






const ee = new EventEmitter();

const unSubSclick = ee.on('click', function() {
    console.log('clicked');
})

ee.emit('click');
unSubSclick();
ee.unsubscribe();


function mutationToJson(mutationElem){
    mutationElemParse = {
        type: mutationElem[0].type,
        target: mutationElem[0].target.innerHTML
    };
    
    return JSON.stringify(mutationElem);
}

function sendMutationToServer(mutationElem){
    var theUrl = "https://localhost:3000//get-report/";
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(mutationToJson(mutationElem))
}


var mutationObserv = new MutationObserver(sendMutationToServer);

mutationObserv.observe(document.getElementsByTagName('html')[0], { childList: true ,subtree:true});









Promise.resolve()
.then(function(x) {
    console.log('1');
    throw 'lgjdfjg';
})
.then((x) => console.log('2'))
.catch((err) => console.log(err))

