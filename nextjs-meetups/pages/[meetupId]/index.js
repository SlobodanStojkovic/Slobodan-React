//import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";

const MeetupDetails = (props) => {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/04/27/1448/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.jpg/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.16x9.jpg"
        title="First Meetup"
        address="Some Street 5, Some City"
        description="This is a first meetup"
      />
      {/* OR LIKE THIS with MONGO DB
            <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
      */}
    </>
  );
};

export async function getStaticPaths() {
  //const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.ntrwp.mongodb.net/<DATABASEOFYOURCHOICE>?retryWrites=true&w=majority")      //THIS CODE MUST NEVER RUN ON CLIENT SIDE BECAUSE THEY WILL THEN SEE YOUR PASSWORD
  //const db=client.db();

  //const meetupsCollection = db.collection("meetups");

  //const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  //client.close();

  return {
    fallback: "blocking", // BLOCKING returns nothing until page is generated and final page is served, TRUE returns EMPTY page that pulls down generated content when its done while if FALSE user will be redirected to 404 page if he visits path that we didnt specify
    paths:
      /* meetups.map(meetup=> ({ params: { meetupId: meetup._id.toString()}}))    WE USE THIS WHEN WE CONNECT TO MONGO DB AND DELETE vvv*/
      [
        {
          params: {
            meetupId: "m1",
          },
        },
        {
          params: {
            meetupId: "m2",
          },
        },
      ],
  };
}

export async function getStaticProps(context) {
  //here we CANT USE HOOKS
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  //const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.ntrwp.mongodb.net/<DATABASEOFYOURCHOICE>?retryWrites=true&w=majority")      //THIS CODE MUST NEVER RUN ON CLIENT SIDE BECAUSE THEY WILL THEN SEE YOUR PASSWORD
  //const db=client.db();

  //const meetupsCollection = db.collection("meetups");

  //const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  //const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

  //client.close();

  return {
    props: {
      /* meetupData: {
          id: selectedMeetup._id.toString(),
          title: selectedMeetup.title,
          address: selectedMeetup.address,
          image: selectedMeetup.image,
          description: selectedMeetup.description,
      }        we use this when we connect to our MONGO DB */
      meetupData: {
        image:
          "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/04/27/1448/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.jpg/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.16x9.jpg",
        id: meetupId,
        title: "First meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
