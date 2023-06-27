const mongoose = require('mongoose'); //importing mongoose library

//schema for our model/table

const tourSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A tour must have a name'] //true = it is required field
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    },
    description: {
        type: String
    },
    plan: {
        type: String,
        required: [true, 'A tour must have a plan'],
        enum: {
            values: ['silver','gold','diamond'],
            message: 'Plan is either silver, gold or diamond'
        }
    }
});

const tourModel = mongoose.model('Tour', tourSchema);

module.exports = tourModel;