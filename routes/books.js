import { Router } from "express";
import Books from "../models/Books.js";

const router = Router();

router.get('/',async(req,res) => {
    try{
        const books = await Books.find();
        res.status(200).json({books});
    }
    catch(error){
        res.status(500).json({error : error});
    }
})

// router.get('/:name',async(req,res) => {
//     const bookName = req.params.name;
//     try{
//         const books = await Books.find({ 'name' : bookName });
//         console.log(books);
//         res.status(200).json({books});
//     }
//     catch(error){
//         res.status(500).json({error : error});
//     }
// })

export default router;