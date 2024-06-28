import { StatementModel } from "../models/statement_model.js";

// function to store data in the database
export const addStatement = async (req, res) => {
    try{
        console.log('request', req.body);
        const addData = await StatementModel.create(req.body);
        res.send("Statement added");


    } catch (error) {
        console.log(error)
    }
}

// function to get all statements
export const getStatements = async (req, res) => {
    try {
        const findStatements = await StatementModel.find();
        res.json(findStatements);
    } catch (error) {
        console.log(error);
    }
}

// function to get a statement
export const getStatement = async (req, res) => {
    try {
        const findStatement = await StatementModel.findById(req.params.id);
        res.status(200).send(findStatement);
    } catch (error) {
        console.log(error);
    }
}

// function to get update case status
export const updateStatementStatus = async (req, res) => {
   try {
     const status = req.body.caseStatus;
     console.log("request", status);
     const addData = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status})
     res.status(200).send(addData);


   } catch (error) {
    console.log(error);
   }
}

export const deleteStatement = (req, res) => {
    try {
        StatementModel.findByIdAndDelete(req.params.id);
        res.send(`Statement with id ${req.params.id} is deleted`);
    } catch (error) {
        console.log(error);
    }
}