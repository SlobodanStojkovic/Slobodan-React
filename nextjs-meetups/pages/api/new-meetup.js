// /api/new-meetup
// POST /api/new-meetup

function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    //npm install mongodb
    //on top we import {MongoClient} from "mongodb";

    //const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.ntrwp.mongodb.net/<DATABASEOFYOURCHOICE>?retryWrites=true&w=majority")      //THIS CODE MUST NEVER RUN ON CLIENT SIDE BECAUSE THEY WILL THEN SEE YOUR PASSWORD
    //const db = client.db();

    //const meetupsCollection = db.collection("meetups"); //can be named as database but can be also named differently

    //const result = await meetupsCollection.insertOne(data);

    //client.close();

    //res.status(201),json({message: "Meetup inserted!"});
  }
}

export default handler;
