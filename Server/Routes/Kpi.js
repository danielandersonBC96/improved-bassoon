import express from "express";

const routes = express.Router();

routes.get ( "/Kpis", async (req,res) => {

    try{
        const Kpis = await KPI.find()
        
    }
    catch(error) {
        res.status(404).json({message: error.message})

    }
})

export default routes;