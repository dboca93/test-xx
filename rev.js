//This document is meant as merely a review document for the objects section 
//of the codeacademy course. 

let mercedes = {
    color: 'black',
}
console.log(mercedes.color); 

let redHouse = {
    'street number':  18, 
    gutters: 'long-form',
    name: 'The Red House', 
}
//console.log(redHouse['street number']); 
//let propertyPlease = 'street number'; 
//console.log(redHouse[propertyPlease]); 
redHouse.driveway = 'grey'; 
console.log(redHouse); 
delete redHouse['street number']; 
console.log(redHouse); 

const meetingOfMinds = {
    leader: 'Henry Aslan', 
    location: 'Bursa', 
    changeLocation () {
        console.log(this.location = 'Istanbul')
    }
}
meetingOfMinds.changeLocation();  
//in the following we intend to identify the values of chained properties; 
const timHouse = {
    driveway : {
        color: 'grey', 
        length: 10, 
        width: 5, 
    }
}

//This is a fantastic chair to type in. Testing it will, however, require some more time as
//the ergonomic design of a chair is not something which can automatically reveal itself, but
//is rather something that takes time to fully recover. 