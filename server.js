require('dotenv').config();
const express = require('express');
const mongoose = requrie('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI);

app.listen(5000, () => {
    console.log('Server is runnong on port 5000');
})

const BarFillOut = mongoose.model('BarFillOut', new mongoose.Schema({
    barangayName: String,
    concern: String,
    priority: Number
}))

app.post('/api/barangay', async (req, res) => {
    const barangay = new BarFillOut(req.body);
    await barangay.save();
})

app.post('/api/pokemon/ :id', async (req, res) => {
    const {id} = req.params;
    const updateBarForms = await BarFillOut.findByIdAndUpdate(id, req.body, {new: true});
    res.send(updateBarForms);
})

app.get('/api/barangay/ : id', async (req, res) => {
    const list = await BarFillOut.find();
    res.send(list);
})

app.delete('/api/pokemon/ :id', async (req, res) => {
    const {id} = req.params;
    await BarFillOut.findByIdAndDelete(id);
    res.status(204).send();
})

app.put('/api/pokemon/ :id', async (req, res) => {
    const updateBarForms = await BarFillOut.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.send(updateBarForms);
})