import e from "express";
import routerCountry from "./countries.routes.js";

export const routespace = e();

routespace.use('/api', routerCountry);

routespace.use((req, res, next) => {
    const error = new Error('Oops!');
    next(error);
});
  
routespace.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({ error: error.message });
});