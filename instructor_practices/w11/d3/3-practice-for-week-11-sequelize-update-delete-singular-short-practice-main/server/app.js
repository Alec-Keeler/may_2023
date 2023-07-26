// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
    const allPuppies = await Puppy.findAll({order: [['name', 'ASC']]});

    res.json(allPuppies);
});


// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {
    // Your code here
    const pup = await Puppy.findByPk(req.params.puppyId)
    const {ageYrs, weightLbs, microchipped} = req.body

    if (!pup) {
        res.status(404)
        return res.json({
            statusCode: 404,
            message: `The puppy with an id of ${req.params.puppyId} could not be found`
        })
    }

    // console.log(pup)
    if (ageYrs) {
        pup.ageYrs = ageYrs
    }
    if (weightLbs) {
        pup.weightLbs = weightLbs
    }
    if (microchipped !== undefined) {
        pup.microchipped = microchipped
    }
    await pup.save()

    res.json({
        message: 'Successfully updated the puppy',
        puppy: pup
    })
})


// STEP 2: Delete a puppy by id
// app.delete('/puppies/:puppyId', async (req, res, next) => {
//     // Your code here
//     const pup = await Puppy.findByPk(req.params.puppyId)

//     await pup.destroy()

//     res.json({
//         message: 'Successfully deleted the puppy',
//         puppy: pup
//     })
// })

app.delete('/puppies/:puppyId', async (req, res, next) => {
    // Your code here
    const id = req.params.puppyId
    const dog1 = await Puppy.findByPk(id)
    await dog1.destroy();
    res.json({
        message: "pupp was successfully deleted",
        puppy: dog1
    })
})


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}