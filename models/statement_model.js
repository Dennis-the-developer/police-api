import { Schema, model } from "mongoose";

const statementSchema = new Schema({
    statementId: {type: String},
    incidentType: {enum: ['non-criminal', 'criminal']},
    civilianStatus: {enum: ['suspect', 'complainant', 'witness']},
    statement: {type: String},
    caseStatus: {enum: ['Open', 'Closed']},
    // civilianId: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

export const StatementModel = model('statement', statementSchema);