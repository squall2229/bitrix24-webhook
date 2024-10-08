import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/webhook', (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Success!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

