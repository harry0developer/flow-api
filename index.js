var Express = require('express');
var MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var bodyParser = require('body-parser');

var app = Express();

app.use(bodyParser.json());
app.use(cors());

// var CONNECTION_STRING = 'mongodb+srv://admin:Pro12345@cluster0.l3tzc0c.mongodb.net/';
var CONNECTION_STRING = 'mongodb+srv://admin:Pro12345@cluster0.l3tzc0c.mongodb.net/?retryWrites=true&w=majority';
var PORT = 5000;
var DATABASE = 'flow';
var database;

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


// GET, POST, DELETE  Inventory 
app.get('/api/flow/inventory', (req, res)=> {
    database.collection("inventory").find({}).toArray((err, data)=> {
        res.send(data);
    });
});

app.post('/api/flow/inventory', (req, res) => {
    database.collection('inventory').insertOne({ req });
    res.json("Document addedd successfully");
});

app.delete('/api/flow/inventory', (req, res) => {
    database.collection('inventory').deleteOne({ 
        _id:  req.body._id
     });
    res.json("Document removed successfully");
});


// GET, POST, DELETE USER 
app.route('/api/flow/users')
    .get((req, res)=> {
        database.collection("users").find({}).toArray((err, data)=> {
            res.send(data);
        })
    })

    .post((req, res) => {
        database.collection('users').insertOne({ 
            id: req.id,
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
        database.collection('users').updateOne(
            { id: req.body.id },
            { 
                $set: { 
                    id: req.id,
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
        database.collection('users').deleteOne({ 
            _id:  req.body._id
        });
        res.json("Document removed successfully");
    });



// GET, POST, DELETE Customers 
app.route('/api/flow/customer')
    .get((req, res)=> {
        database.collection("customer").find({}).toArray((err, data)=> {
            res.send(data);
        })
    })

    .post((req, res) => {
        database.collection('customer').insertOne({ 
            id: req.id,
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
        database.collection('customer').updateOne(
            { id: req.body.id },
            { 
                $set: { 
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
                    updatedBy: req.body.updatedBy,
                    updatedOn: req.body.updatedOn
                },
                $currentDate: { lastModified: true }
            }
        );
        res.json("Document updated successfully");
    })

    .delete((req, res) => {
        database.collection('customer').deleteOne({ 
            _id:  req.body._id
        });
        res.json("Document removed successfully");
    });
