var mongoose = require('mongoose')
var Customer = require('./customer')

mongoose.connect('mongodb+srv://happy:1234@project-hyjio.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error)
        console.log(error);
    else
        console.log("Connected to the mongodb");
})


// var customer1 = new Customer({
//     name: 'Fatih Mutlu',
//     city: 'İstanbul'
// })

// customer1.save((error) => {
//     if (error) {
//         throw error
//     }
//     console.log('Kayıt Edildi')
// })


// Customer.find({name:'Ali Mutlu'}, (error, data) => {
//     console.log(data)
// })

// Customer.findById('5e12297979f33dd5fe8cc6ec', (error, data) => {
//     console.log(data)
// })

// Customer.find({}, (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data)
// }).where('city').equals('Samsun')  //.limit(1) => kaç adet getireleceğini verir

// Customer.find({}, (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data)
// }).where('age').gt(15) // = > Yaşı 15 den büyük olanları getirir



// Customer.find({}, (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data)
// }).where('age').gt(15).lt(18) // => 15ten büyük 18den küçük  gte ve lte yaparsak büyük veya eşit olur


// Customer.find({}, (error, data) => {
//     if (error) {
//         throw error
//     }
//     console.log(data)
// }).where('city').equals('Samsun').sort('name').select('name city') // Order By


//  Customer.findById('5e12297979f33dd5fe8cc6ec', (error, data) => {
//      if(error) {
//          throw error
//      }
//      data.city = 'Urfa'
//      data.save((error) => {
//             if (error) {
//                 throw error
//             }
//             console.log('Kayıt Güncellendi')
//         })
//  })


// Customer.findById('5e12297979f33dd5fe8cc6ec', (error, data) => {
//     if(error) {
//         throw error
//     }
//     data.city = 'Urfa'
//     data.remove((error) => {
//            if (error) {
//                throw error
//            }
//            console.log('Kayıt Silindi')
//        })
// })


// Customer.findOneAndUpdate({name:'Ali Mutlu'},{name:'Gülşen Mutlu'}, (error, data) => {
//     if(error){
//         throw error
//     }
//     console.log(data)
// })

// Customer.findByIdAndUpdate('5e11dfb3346d70d55f3c94c8',{name:'happy Mutlu'}, (error, data) => {
//     if(error){
//         throw error
//     }
//     console.log(data)
// })


// Customer.findOneAndRemove({name:'happy Mutlu'}, (error, data) => {
//     if(error){
//         throw error
//     }
//     console.log(data)
// })

// Customer.findByIdAndRemove('5e123d3d6232cad6569dfe9d', (error, data) => {
//     if(error){
//         throw error
//     }
//     console.log(data)
// })


