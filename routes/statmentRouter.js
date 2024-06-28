import { Router } from "express";
import { addStatement, getStatements, getStatement, updateStatementStatus, deleteStatement } from "../controllers/Statement_controller.js";


const statementRouter = Router();

// statementRouter.get('/statement', (req, res) => {
//     res.json('All Statements displayed successfully');
// });

// statementRouter.post('/statement', (req, res) => {
//     res.json('Statement Posted Successfully');
// });

statementRouter.post('/statement', addStatement);
statementRouter.get('/statement', getStatements);
statementRouter.get('/statement/:id', getStatement);
statementRouter.patch('/statement/:id', updateStatementStatus);
statementRouter.delete('statement/:id', deleteStatement);

export default statementRouter;