// ./lib/routes/notes/note.js
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const widgetSchema = new Schema({
    id: Schema.Types.ObjectId,
    col: Number,
    row: Number,
    FileName: String,
    SID: String,
    TabSID: String,
    sizeX: Number,
    sizeY: Number,
    Preferences: Schema.Types.Mixed,
    CreatedDate: { type: Date, default: Date.now, required: true },
    Name: String
});

const tabsSchema = new Schema({
    CreatedDate: { type: Date, default: Date.now, required: true },
    ID: Number,
    ModifiedDate: { type: Date },
    ObjectPermissions: Number,
    SID: String,
    Banner: String,
    DefaultTab: String,
    Layout: String,
    Ordinal: Number,
    Settings: Number,
    Title: String,
    Widgets: [widgetSchema],
    ProcessSID: String
});

module.exports = mongoose.model('Tabs', tabsSchema)

