import { evaluateDiabetes } from "../services/diabetesRules.js";

export const analyzeDiabetes = (req, res) => {
    const { fbs, ppbs, hba1c } = req.body;
    
    // Input validation
    if(fbs === undefined && ppbs ===  undefined && hba1c === undefined) {
        return res.status(400).json( {
            error: "At least one medical paramter is required"
        });
    }

    const result = evaluateDiabetes({fbs, ppbs, hba1c});

    return res.json({
        input: {fbs, ppbs, hba1c},
        analysis: result
    });
};