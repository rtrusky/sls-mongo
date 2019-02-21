
const connectToDatabase = require('./db');
const Tab = require('./models/tab');
module.exports.create = async (event, context) => {
    await connectToDatabase();
    try {
        const TabModel = await Tab.create(JSON.parse(event.body));
        return {
            statusCode: 200,
            body: JSON.stringify(TabModel)
        }
    } catch(err) {
        return {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not create the Tab.'
        }
    }

};

module.exports.getOne =  async (event, context) => {
    await connectToDatabase();
    try {
        const TabModel = await Tab.findById(event.pathParameters.id);
        return {
            statusCode: 200,
            body: JSON.stringify(TabModel)
        }
    } catch(err) {
        return {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch the Tab.'
        }
    }

};

module.exports.getAll = async (event, context) => {

    await connectToDatabase();
    try {
        let Tabs =  await Tab.find();
        const response = {
            statusCode: 200,
            body: JSON.stringify(Tabs)
        }
        return response;

    } catch(err) {
        return {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not fetch the Tab.'
        }
    }
};

module.exports.update =  async (event, context) => {;

    await connectToDatabase();
    try {
        let TabModel =  await Tab.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body));
        return {
            statusCode: 200,
            body: JSON.stringify(TabModel)
        }


    } catch(err) {
        return {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could not update the Tab.'
        }
    }

};

module.exports.delete =  async (event, context) => {
    await connectToDatabase();
    try {
        let TabModel =  await Tab.findByIdAndRemove(event.pathParameters.id);
        return  {
            statusCode: 200,
            body: JSON.stringify({ message: 'Removed Tab with id: ' + TabModel._id, Tab: TabModel })
        }


    } catch(err) {
        return {
            statusCode: err.statusCode || 500,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Could remove the Tab.'
        }
    }
};
