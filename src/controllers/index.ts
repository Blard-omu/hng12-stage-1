import { Request, Response } from 'express';
import { classifyNumber } from '../helper/classifyNumber';


export const classifyNumberController = async (req: Request, res: Response) => {
    const { number } = req.query;
    const num = Number(number);

    if (!number) {
        return res.status(400).json({ error: true, message: "Number is required!" });
    }
    if (isNaN(num)) {
        return res.status(400).json({ number, error: true });
    }
    
    try {
        const result = await classifyNumber(num);
        return res.json(result); 
    } catch (error: any) {
        return res.status(500).json({ error: true, message: error.message });
    }
};
