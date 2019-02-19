
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
let deploymentConn;

module.exports = connectToDatabase = async (tenantId) => {

    if (isConnected) {
        console.log('=> using existing database connection');
        deploymentConn.useDb(tenantId || process.env.DEFAULT_TENANT)
        return Promise.resolve();
    }

    console.log('=> using new database connection');
    let connections = await mongoose.connect(process.env.DB);
    deploymentConn =  connections.connections[0];
    isConnected = deploymentConn.readyState;
    deploymentConn.useDb(tenantId || process.env.DEFAULT_TENANT)

};
