import express from 'express';
import { Firestore } from '@google-cloud/firestore';

const app = express();
const db = new Firestore({ databaseId: 'firestore-test' }); // Automatically connects using Cloud Run's identity

app.get('/', async (req, res) => {
  // 1. Write a "visit" to the database
  const docRef = db.collection('visits').doc('latest');
  await docRef.set({
    time: new Date().toISOString(),
    user: process.env.MY_NAME || 'Unknown'
  });

  // 2. Read the data back
  const doc = await docRef.get();
  res.send(`<h1>Hello ${doc.data().user}!</h1><p>Last visit: ${doc.data().time}</p>`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
