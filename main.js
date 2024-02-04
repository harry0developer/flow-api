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
        const item = await UserModel.find();
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(USERS + "/:id", async(req, res) => {
    try {
        const user = await UserModel.findById(req.params['id'])
        return res.status(200).json(user);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(USERS, async(req, res) => {
    try {
        const item = new UserModel({...req.body});
        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(USERS, async(req, res) => {
    try {
        await UserModel.updateOne({_id: req.body._id}, req.body);
        const item = await UserModel.findById(req.body_id);
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(USERS + "/:id", async(req, res) => {
    try {
        
        const item = await UserModel.findByIdAndDelete(req.params['id']); 
        return res.status(200).json(item);
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
        const item = await CustomerModel.findById(req.params['id'])
        return res.status(200).json(item);
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
        
        const item = await CustomerModel.findByIdAndDelete(req.params['id']); 
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

 

//INVENTORY ==============================

app.get(INVENTORY, async(req, res) => {
    try { 
        const item = await InventoryModel.find();
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(INVENTORY + "/:id", async(req, res) => {
    try {
        const item = await InventoryModel.findById(req.params['id'])
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(INVENTORY, async(req, res) => {
    try {
        const item = new InventoryModel({...req.body});
        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(INVENTORY, async(req, res) => {
    try {
        await InventoryModel.updateOne({_id: req.body._id}, req.body);
        const item = await InventoryModel.findById(req.body_id);
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(INVENTORY + "/:id", async(req, res) => {
    try {
        
        const item = await InventoryModel.findByIdAndDelete(req.params['id']); 
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});


//QUOTES ==============================

app.get(QUOTES, async(req, res) => {
    try { 
        const item = await QuoteModel.find();
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(QUOTES + "/:id", async(req, res) => {
    try {
        const item = await QuoteModel.findById(req.params['id'])
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(QUOTES, async(req, res) => {
    try {
        const item = new QuoteModel({...req.body});
        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(QUOTES, async(req, res) => {
    try {
        await QuoteModel.updateOne({_id: req.body._id}, req.body);
        const item = await QuoteModel.findById(req.body_id);
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(QUOTES + "/:id", async(req, res) => {
    try {
        
        const item = await QuoteModel.findByIdAndDelete(req.params['id']); 
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});



//COMPANIES ==============================

app.get(COMPANIES, async(req, res) => {
    try { 
        const item = await CompanyModel.find();
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(COMPANIES + "/:id", async(req, res) => {
    try {
        const item = await CompanyModel.findById(req.params['id'])
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(COMPANIES, async(req, res) => {
    try {
        const item = new CompanyModel({...req.body});
        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(COMPANIES, async(req, res) => {
    try {
        await CompanyModel.updateOne({_id: req.body._id}, req.body);
        const item = await CompanyModel.findById(req.body_id);
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(COMPANIES + "/:id", async(req, res) => {
    try {
        
        const item = await CompanyModel.findByIdAndDelete(req.params['id']); 
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});


//INVOICES ==============================

app.get(INVOICES, async(req, res) => {
    try { 
        const item = await InvoiceModel.find();
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.get(INVOICES + "/:id", async(req, res) => {
    try {
        const item = await InvoiceModel.findById(req.params['id'])
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.post(INVOICES, async(req, res) => {
    try {
        const item = new InvoiceModel({...req.body});
        const savedItem = await item.save();
        return res.status(200).json(savedItem);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.put(INVOICES, async(req, res) => {
    try {
        await InvoiceModel.updateOne({_id: req.body._id}, req.body);
        const item = await InvoiceModel.findById(req.body_id);
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete(INVOICES + "/:id", async(req, res) => {
    try {
        
        const item = await InvoiceModel.findByIdAndDelete(req.params['id']); 
        return res.status(200).json(item);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
});
