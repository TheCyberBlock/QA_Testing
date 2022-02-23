import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.js";
import productRoutes from "./routes/product.js";
import gameRoutes from "./routes/game.js";
import softwareRoutes from "./routes/software.js";
import cartRouter from "./routes/cart.js";
import accountRouter from "./routes/account.js";
import adminRouter from "./routes/admin.js";
import paymentRoutes from "./routes/payment.js";

dotenv.config();


const app = express();
/* setting the parameters*/

app.use(express.json({ limit: "30mb", extended: true}));  /* 30 mb because we are going to load images which will be larger in size*/
app.use(express.json({ limit: "30mb", extended: true}));
app.use(cors());


app.use("/api/user", userRoutes); // importing routes here
app.use("/api/product", productRoutes);
app.use("/api/games", gameRoutes);
app.use("/api/softwares", softwareRoutes);
app.use("/api/cart", cartRouter);
app.use("/api/account", accountRouter);
app.use("/api/admin", adminRouter);
app.use("/api/payment", paymentRoutes);



const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT|| 5000;


/* connect the database*/

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))) // THIS FOR WHEN CONNECTION IS SUCCESSFUL
  .catch((error) => console.log(`${error} did not connect`)); // IF THE CONNECTION IS NOT SETUP

mongoose.set('useFindAndModify', false); // THIS MAKES SURE WE DONT GET ANY WARNING IN CONSOLE
