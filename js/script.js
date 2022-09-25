var moment = require("moment"); // require
const date = moment().format();
const axios = require("axios").default;

console.log(moment().format());

axios
    .get("http://worldtimeapi.org/api/timezone/Europe")
    .then(function(response) {
        // handle success
        console.log(response);
    })
    .catch(function(error) {
        // handle error
        console.log(error);
    })
    .then(function() {
        // always executed
    });

// const fetching = async() => {
//     const response = await fetch("");

//     const data = await response.json();
//     console.log(data);
// };

// fetching();

console.log("first");

console.log("nodemon");

exports.d = date;