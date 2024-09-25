import { json } from "body-parser";
import { Request,Response } from "express";

export class UserController{
    static loginUser = async(req:Request,res:Response):Promise<void>=>{
        const { email, senha } = req.body;
        console.log(req.body)
        res.send(req.body)
        res.status(200)
    }
}