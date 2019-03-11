const axios = require('axios');
var beautify = require('js-beautify');

console.time();
(async function main() {
    try {
        //getting the mobile_stock endpoint
        const response = await axios.get('http://www.supremenewyork.com/mobile_stock.json');

        //this will query an items stock(replace id with specified ID): 
        //test ID as of week 2: 172169
        var ID = '';
        if (ID.length > 0) {
        const responseID = await axios.get('http://www.supremenewyork.com/shop/' + ID + '.json');
        const entryID = await JSON.stringify(responseID.data);

        //make it readable. optional step.
        const entryID2 = await beautify(entryID);
        console.log(entryID2);
        } else {
        const response = await axios.get('http://www.supremenewyork.com/mobile_stock.json');
        const entries = await JSON.stringify(response.data);

        //make it readable. optional step.
        const entries2 = await beautify(entries);
        console.log(entries2);
        }
    } catch (e) {
        console.log('Something is wrong', e);
    }
    console.timeEnd();
})();