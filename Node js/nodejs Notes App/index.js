import express from 'express';

const app = express();
app.use(express.json());
const notes = [];

app.post('/notes',(req,res)=>{
    const note = req.body.note;
    notes.push(note);

    res.json({message:"done"});
})

app.get('/notes',(req,res)=>{
    res.json({notes})
})
app.listen(3000,()=>{
    console.log("app running on port 3000")
})