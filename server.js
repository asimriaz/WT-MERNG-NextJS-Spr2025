import express from 'express';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3500

app.use(cors());
app.use(express.json());
app.listen(PORT, ()=> console.log(`server is listening on http://localhost:${PORT}`));