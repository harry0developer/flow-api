var Express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const app = Express();

app.use(bodyParser.json());
app.use(cors());

// const CONNECTION_STRING = 'mongodb+srv://admin:Pro12345@cluster0.l3tzc0c.mongodb.net/';
const CONNECTION_STRING = 'mongodb+srv://admin:Pro12345@cluster0.l3tzc0c.mongodb.net/?retryWrites=true&w=majority';
const PORT = 5000;
const DATABASE = 'flow';
let database;

const LOGIN = 'login';
const SIGNUP = 'signup';
const USERS ='users';
const USERNAME = 'username';
const CUSTOMERS ='customer';
const INVENTORY ='inventory';
const QUOTES ='quotes';
const MY_COMPANIES ='my-companies';


app.listen(PORT, () => {
    MongoClient.connect(CONNECTION_STRING, (error, client) => {
        if(client) {
            database = client.db(DATABASE);
            console.log("Mongo DB Connection Successful on port ", PORT);
        } else {
            console.log("Connection failed");
        }
    });
}); 
 
// LOGIN
app.route('/api/flow/'+LOGIN)
    .post((req, res) => {
        let userFound;
        database.collection(USERS).findOne({ username: req.body.username })
            .then(user => {
                if(!user) {
                    return res.status(401).json({
                        message: 'User not found'
                    })
                }
                userFound = user;
                return bcrypt.compare(req.body.password, user.password)
            })
        .then(result => {
            if(!result) {
                return res.status(401).json({
                    message: 'Password incorrect'
                })
            }
            const token = jwt.sign({username: userFound.username, userId: userFound._id}, 'secret_string', {expiresIn: '1h'});
            return res.status(200).json({
                token: token
            })

        })
        .catch(err => {
            return res.status(401).json({
                message: 'Error with authentication'
            })
        })
    });

// USERNAME 
app.route('/api/flow/'+USERNAME)
    .post((req, res) => {
        database.collection(USERS).find({ username: req.body.username }).toArray((err, data)=> {
            res.send(data);
        })
    });

// GET, POST, DELETE USER 
app.route('/api/flow/'+USERS)
    .get((req, res) => {
        database.collection(USERS).find({}).toArray((err, data)=> {
            res.send(data);
        })
    })

    .post((req, res) => {
        database.collection(USERS).insertOne({ 
            id: req.body.id,
            profilePhoto: req.body.profilePhoto,
            email: req.body.email,
            gender: req.body.gender,
            idNo: req.body.idNo,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            title: req.body.title,
            phone: req.body.phone,
            role: req.body.role,
            physicalAddress: req.body.physicalAddress,
            createdOn: req.body.createdOn,
            createdBy: req.body.createdBy, 
            updatedOn: req.body.updatedOn,
            updatedBy: req.body.updatedBy
        });
        res.json("Document addedd successfully");
    })

    .put((req, res) => {
        database.collection(USERS).updateOne(
            { id: req.body.id },
            { 
                $set: { 
                    profilePhoto: req.body.profilePhoto,
                    email: req.body.email,
                    gender: req.body.gender,
                    idNo: req.body.idNo,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    title: req.body.title,
                    phone: req.body.phone,
                    role: req.body.role,
                    physicalAddress: req.body.physicalAddress,
                    updatedOn: req.body.updatedOn,
                    updatedBy: req.body.updatedBy
                },
                $currentDate: { lastModified: true }
            }
        );
        res.json("Document updated successfully");
    })

    .delete((req, res) => {
        database.collection(USERS).deleteOne({ 
            _id:  req.body._id
        });
        res.json("Document removed successfully");
    });



// GET, POST, DELETE Customers 
app.route('/api/flow/'+CUSTOMERS)
    .get((req, res)=> {
        database.collection(CUSTOMERS).find({}).toArray((err, data)=> {
            res.send(data);
        })
    })

    .post((req, res) => {
        database.collection(CUSTOMERS).insertOne({ 
            id: req.body.id,
            url: req.body.url,
            companyName: req.body.companyName,
            companyVATNumber: req.body.companyVATNumber,
            companyBillingAddress: req.body.companyBillingAddress,
            companyShippingAddress: req.body.companyShippingAddress,
            contactPersonEmail: req.body.contactPersonEmail,
            contactPersonFirstName: req.body.contactPersonFirstName,
            contactPersonLastName: req.body.contactPersonLastName,
            contactPersonPhoneNumber: req.body.contactPersonPhoneNumber,
            contactPersonTitle: req.body.contactPersonTitle,
            createdBy: req.body.createdBy,
            createdOn: req.body.createdOn,
            updatedBy: req.body.updatedBy,
            updatedOn: req.body.updatedOn,
        });
        res.json("Document addedd successfully");
    })

    .put((req, res) => {
        database.collection(CUSTOMERS).updateOne(
            { id: req.body.id },
            { 
                $set: { 
                    companyName: req.body.companyName,
                    companyVATNumber: req.body.companyVATNumber,
                    companyBillingAddress: req.body.companyBillingAddress,
                    companyShippingAddress: req.body.companyShippingAddress,
                    contactPersonEmail: req.body.contactPersonEmail,
                    contactPersonFirstName: req.body.contactPersonFirstName,
                    contactPersonLastName: req.body.contactPersonLastName,
                    contactPersonPhoneNumber: req.body.contactPersonPhoneNumber,
                    contactPersonTitle: req.body.contactPersonTitle, 
                    updatedBy: req.body.updatedBy,
                    updatedOn: req.body.updatedOn,
                    bankDetails: req.body.bankDetails
                },
                $currentDate: { lastModified: true }
            }
        );
        res.json("Document updated successfully");
    })

    .delete((req, res) => {
        database.collection(CUSTOMERS).deleteOne({ 
            _id:  req.body._id
        });
        res.json("Document removed successfully");
    });


// GET, POST, DELETE MY_COMPANIES 
app.route('/api/flow/'+MY_COMPANIES)
    .get((req, res)=> {
        database.collection(MY_COMPANIES).find({}).toArray((err, data)=> {
            res.send(data);
        })
    })

    .post((req, res) => {
        database.collection(MY_COMPANIES).insertOne({ 
            id: req.body.id,
            logo: req.body.logo,
            name: req.body.name,
            VATNumber: req.body.VATNumber,
            registrationNumber: req.body.registrationNumber,
            shippingAddress: req.body.shippingAddress,
            billingAddress: req.body.billingAddress,
            website: req.body.website,
            phoneNumber: req.body.phoneNumber,
            emailAddress: req.body.emailAddress,
            contactPerson: req.body.contactPerson,
            bankDetails: req.body.bankDetails,
            createdBy: req.body.createdBy,
            createdOn: req.body.createdOn,
            updatedBy: req.body.updatedBy,
            updatedOn: req.body.updatedOn,
        });
        res.json("Document addedd successfully");
    })

    .put((req, res) => {
        database.collection(MY_COMPANIES).updateOne(
            { id: req.body.id },
            { 
                $set: {  
                    logo: req.body.logo,
                    name: req.body.name,
                    VATNumber: req.body.VATNumber,
                    registrationNumber: req.body.registrationNumber,
                    shippingAddress: req.body.shippingAddress,
                    billingAddress: req.body.billingAddress,
                    website: req.body.website,
                    phoneNumber: req.body.phoneNumber,
                    emailAddress: req.body.emailAddress,
                    contactPerson: req.body.contactPerson,
                    bankDetails: req.body.bankDetails,
                    updatedBy: req.body.updatedBy,
                    updatedOn: req.body.updatedOn,
                },
                $currentDate: { lastModified: true }
            }
        );
        res.json("Document updated successfully");
    })

    .delete((req, res) => {
        database.collection(MY_COMPANIES).deleteOne({ 
            _id:  req.body._id
        });
        res.json("Document removed successfully");
    });



// GET, POST, DELETE QUOTE 
app.route('/api/flow/'+QUOTES)
    .get((req, res)=> {
        database.collection(QUOTES).find({}).toArray((err, data)=> {
            res.send(data);
        })
    })
 
    .post((req, res) => {
        database.collection(QUOTES).insertOne({ 
            id: req.body.id,
            quoteNo: req.body.quoteNo,
            quoteDate: req.body.quoteDate,
            quoteDueDate: req.body.quoteDueDate,
            quoteTerm: req.body.quoteTerm,
            customer: req.body.customer,
            items: req.body.items,
            totalPriceExclusive: req.body.totalPriceExclusive,
            totalVAT: req.body.totalVAT,
            totalPriceDiscount: req.body.totalPriceDiscount,
            totalPriceInclusive: req.body.totalPriceInclusive,
            createdOn: req.body.createdOn,
            createdBy: req.body.createdBy, 
            updatedOn: req.body.updatedOn,
            updatedBy: req.body.updatedBy
        });
        res.json("Document addedd successfully");
    })

 
// GET, POST, DELETE INVENTORY 
app.route('/api/flow/'+INVENTORY)
    .get((req, res)=> {
        database.collection(INVENTORY).find({}).toArray((err, data)=> {
            res.send(data);
        })
    })
 
    .post((req, res) => {
        database.collection(INVENTORY).insertOne({ 
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            stockCode: req.body.stockCode,
            quantity: req.body.quantity,
            unitPrice: req.body.unitPrice,
            createdOn: req.body.createdOn,
            createdBy: req.body.createdBy, 
            updatedOn: req.body.updatedOn,
            updatedBy: req.body.updatedBy
        });
        res.json("Document addedd successfully");
    })

    .put((req, res) => {
        database.collection(INVENTORY).updateOne(
            { id: req.body.id },
            { 
                $set: { 
                    name: req.body.name,
                    description: req.body.description,
                    stockCode: req.body.stockCode,
                    quantity: req.body.quantity,
                    photo: req.body.photo,
                    unitPrice: req.body.unitPrice,
                    discount: req.body.discount,
                    VAT: req.body.VAT,
                    updatedOn: req.body.updatedOn,
                    updatedBy: req.body.updatedBy,
                },
                $currentDate: { lastModified: true }
            }
        );
        res.json("Document updated successfully");
    })

    .delete((req, res) => {
        database.collection(INVENTORY).deleteOne({ 
            _id:  req.body._id
        });
        res.json("Document removed successfully");
    });
