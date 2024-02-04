const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const UserModel = require('./models/user');
const CustomerModel = require('./models/customer');
const CompanyModel = require('./models/company');
const QuoteModel = require('./models/quote');
const InvoiceModel = require('./models/invoice');
const InventoryModel = require('./models/inventory');



const USERS = 'api/flow/users';
const CUSTOMERS = '/customers';
const INVENTORY = '/inventory';
const QUOTES = '/qoutes';
const COMPANIES = '/companies';
const INVOICES = '/invoices';


const PORT = 5000;
const CONNECTION_STRING = 'mongodb+srv://admin:Pro12345@cluster0.l3tzc0c.mongodb.net/flow?retryWrites=true&w=majority';
app.use(express.json());
app.use(cors());

const start = async () => {
    try {
      await mongoose.connect(
        CONNECTION_STRING
      );
      app.listen(PORT, () => console.log("Server started on port ", PORT));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
}; 

start();


//USERS ==============================

app.get(USERS, async(req, res) => {
    try { 
        const users = await UserModel.find();
        return res.status(200).json(users);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(USERS + "/:id", async(req, res) => {
    try {
        const user = await UserModel.findById(req.body._id);
        return res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(USERS, async(req, res) => {
    try {
        const newUser = new UserModel({...req.body});
        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(USERS + "/:id", async(req, res) => {
    try {
        const {_id} = req.body;
        await UserModel.updateOne({_id}, req.body);
        const updatedUser = await UserModel.findById(_id);
        return res.status(200).json(updatedUser);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(USERS + "/:id", async(req, res) => {
    try {
        const { _id } = req.body;
        const deletedUser = await UserModel.findByIdAndDelete(_id); 
        return res.status(200).json(deletedUser);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});




//CUSTOMERS ==============================

app.get(CUSTOMERS, async(req, res) => {
    try { 
        const item = await CustomerModel.find();
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(CUSTOMERS + "/:id", async(req, res) => {
    try {
        const user = await CustomerModel.findById(req.params['id'] )
        return res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});


app.post(CUSTOMERS, async(req, res) => {
    try {
        const item = new CustomerModel({...req.body});
        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(CUSTOMERS, async(req, res) => {
    try {
        await CustomerModel.updateOne({_id: req.body._id}, req.body);
        const item = await CustomerModel.findById(req.body_id);
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(CUSTOMERS + "/:id", async(req, res) => {
    try {
        const { _id } = req.body;
        const item = await CustomerModel.findByIdAndDelete(_id); 
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

 

//INVENTORY ==============================

app.get(INVENTORY, async(req, res) => {
    try { 
        const items = await InventoryModel.find();
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(INVENTORY + "/:id", async(req, res) => {
    try {
        const items = await InventoryModel.findById(req.body._id);
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(INVENTORY, async(req, res) => {
    try {
        const newUser = new InventoryModel({...req.body});
        const savedItem = await newUser.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(INVENTORY + "/:id", async(req, res) => {
    try {
        const {_id} = req.body;
        await InventoryModel.updateOne({_id}, req.body);
        const updatedItem = await InventoryModel.findById(_id);
        return res.status(200).json(updatedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(INVENTORY + "/:id", async(req, res) => {
    try {
        const { _id } = req.body;
        const deletedItem = await InventoryModel.findByIdAndDelete(_id); 
        return res.status(200).json(deletedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});




//QUOTE ==============================

app.get(QUOTES, async(req, res) => {
    try { 
        const items = await QuoteModel.find();
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(QUOTES + "/:id", async(req, res) => {
    try {
        const items = await QuoteModel.findById(req.body._id);
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(QUOTES, async(req, res) => {
    try {
        const newUser = new QuoteModel({...req.body});
        const savedItem = await newUser.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(QUOTES + "/:id", async(req, res) => {
    try {
        const {_id} = req.body;
        await QuoteModel.updateOne({_id}, req.body);
        const updatedItem = await QuoteModel.findById(_id);
        return res.status(200).json(updatedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(QUOTES + "/:id", async(req, res) => {
    try {
        const { _id } = req.body;
        const deletedItem = await QuoteModel.findByIdAndDelete(_id); 
        return res.status(200).json(deletedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});



//COMPANIES ==============================

app.get(COMPANIES, async(req, res) => {
    try { 
        const items = await CompanyModel.find();
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(COMPANIES + "/:id", async(req, res) => {
    try {
        const items = await CompanyModel.findById(req.body._id);
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(COMPANIES, async(req, res) => {
    try {
        const newUser = new CompanyModel({...req.body});
        const savedItem = await newUser.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(COMPANIES + "/:id", async(req, res) => {
    try {
        const {_id} = req.body;
        await CompanyModel.updateOne({_id}, req.body);
        const updatedItem = await CompanyModel.findById(_id);
        return res.status(200).json(updatedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(COMPANIES + "/:id", async(req, res) => {
    try {
        const { _id } = req.body;
        const deletedItem = await CompanyModel.findByIdAndDelete(_id); 
        return res.status(200).json(deletedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});




//INVOICES ==============================

app.get(INVOICES, async(req, res) => {
    try { 
        const items = await InvoiceModel.find();
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(INVOICES + "/:id", async(req, res) => {
    try {
        const items = await InvoiceModel.findById(req.body._id);
        return res.status(200).json(items);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(INVOICES, async(req, res) => {
    try {
        const newUser = new InvoiceModel({...req.body});
        const savedItem = await newUser.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(INVOICES + "/:id", async(req, res) => {
    try {
        const {_id} = req.body;
        await InvoiceModel.updateOne({_id}, req.body);
        const updatedItem = await InvoiceModel.findById(_id);
        return res.status(200).json(updatedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(INVOICES + "/:id", async(req, res) => {
    try {
        const { _id } = req.body;
        const deletedItem = await InvoiceModel.findByIdAndDelete(_id); 
        return res.status(200).json(deletedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});