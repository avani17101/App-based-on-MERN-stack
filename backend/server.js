const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var mongoose = require('mongoose')
const bcrypt =  require("bcryptjs");
const app = express();
const PORT = 4400;
const Routes = express.Router();

let User = require('./models/user');
let Product = require('./models/product');
let Order = require('./models/order')

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
// app.use(express.urlencoded());


// Connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/users', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established succesfully.");
})



// Getting all the users
Routes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            console.log(users)
            res.json(users);
        }
    });
});
// Getting all the products
Routes.route('/listProducts').get(function(req, res) {
    Product.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            console.log(users)
            res.json(users);
        }
    });
});

// Adding a new user
Routes.route('/create').post(function(req, res) {
    da = req.body
    User.findOne({ username: da.username}).then(
        x => {
            if(x) {
                console.log("exist")
                exist()
            }
            else {
                console.log("creating")
                doesntexist()
            
        }}
    )

    function exist(){
        console.log("username already exists")
        res.status(200).json(0)
    }
    function doesntexist(){
        console.log("user")
        bcrypt.genSalt(10, (err, salt) => {
            console.log("bcrypting")
            bcrypt.hash(da.password, salt, (err, hash) => {
                    if (err) {throw err;}
                    
                    da.password=hash;
                    let user = new User(da)

                    user.save()
                    .then(user => {

                        res.status(200).json(1);
                        console.log("account created successfully")
                        console.log(user)
                    })
                    .catch(err => {
                        console.log("error")
                        res.status(400).send('Error');

                    });
                });
            });
        }

    
});


// Getting a user by id
Routes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        console.log(user)
        return res.json(user);
    });
});

//login
Routes.route('/login').post(
    function(req, res){
        //console.log(req.body)
        if(!req | !req.body.username | !req.body.password){
            console.log("please enterall fields")
            return res.status(200).json(1)
        }

        User.findOne({'username' : req.body.username}).then(
            userReturned => {
                if(!userReturned){
                    console.log("username not found")
                    return res.status(200).json(0)
                }

                bcrypt.compare(req.body.password, userReturned.password).then(
                    match => {
                        if(match){
                            console.log("matched")
                            return res.status(200).json(1)

                        }
                        else {
                            console.log("password incorrect")
                            return res.status(200).json(0)
                        }
                    }
                )
            }
        )
    }
)




//Adding a new product
Routes.route('/uploadProduct').post(function(req, res) {
    let product = new Product(req.body);
    product.save()
        .then(pro => {

            console.log('Product added successfully')
            res.status(200).json(product);
        })
        .catch(err => {
            console.log(err)
            res.status(400).send('Error');
        });
});


// //list products
Routes.route('/ProductList').get(function
    (req, res){
        Product.find()
        .then(
            x => {
                console.log(x)
                return res.json(x)
            }
        )
        .catch(
            err => {
                console.log("error",err)
               return res.status(400).json(err)
            }
        )
    }
);






app.use('/', Routes);

app.listen(PORT, function() {
    console.log("Server is running on port: " + PORT);
})