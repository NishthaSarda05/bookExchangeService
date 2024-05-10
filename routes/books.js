import { Router } from "express";
import Books from "../models/Books.js";

const router = Router();

router.get('/',async(req,res) => {
    try{
        const books = await Books.find();
        console.log(books);
        res.status(200).json({books});
    }
    catch(error){
        res.status(500).json({error : error});
    }
})

export default router;