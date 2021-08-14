const api = require('npm-vwconnectapi');
const ObjectsToCsv = require('objects-to-csv')

var log = new api.Log();
var vwConn = new api.VwWeConnect();
var user_id = process.env.USER_ID // "239482"
var user_key = process.env.USER_KEY // "foobar"

vwConn.setLogLevel("INFO"); // optional, ERROR (default), INFO, WARN or DEBUG
vwConn.setCredentials(user_id, user_key);
vwConn.setConfig("idCharger"); // type

log.info("Successfully connected to backend, retrieving data");

vwConn.getData()
    .then(() => {
        var records = vwConn.homechargingRecords;
        log.info("wcData: " + records );
        
        const writeToCsv = async(records) => {
            var csv = new ObjectsToCsv(records);
            log.info("Objects 2 CSV: "+csv.toString());
            await csv.toDisk('./sessions.csv');
            return true;
        };
        
        writeToCsv(records).then(isWritten => {
            if (isWritten) 
                process.exit(0);
        });
    })
    .catch(() => {
        log.error("something went wrong");
        process.exit(1);
    });