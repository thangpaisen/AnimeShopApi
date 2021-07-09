const mongoose = require('mongoose');
async function connect(app) 
{
    try {
        await mongoose.connect('mongodb+srv://thang:thang@cluster0.det8c.mongodb.net/AnimeShop',
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
            });
            console.log('connect ok')
    } catch (error) {
            console.log('connect fall')
    }
}

module.exports = {connect};
// const mongoose = require('mongoose');

// async function connect(app) 
// {
//     try {
//         await mongoose.connect('mongodb://localhost:27017/AnimeShop', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify: false,
//             useCreateIndex: true
//             });
//             console.log('connect ok')
//     } catch (error) {
//             console.log('connect fall')
//     }
// }

// module.exports = {connect};