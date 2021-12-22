import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First MeetUp",
    image:
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/04/27/1448/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.jpg/Grand-Hyatt-Dubai-P353-Hotel-Exterior-Pools-Twilight.16x9.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second MeetUp",
    image:
      "https://www.expatica.com/app/uploads/sites/15/2019/11/best-restaurants-in-dubai.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
          <title>NextJS Meetups</title>
          <meta name="description" content="Browse a huge list of highly active NextJS meetups!" />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

export async function getStaticProps() {
  // If we want to wait for data to be fetched. Any code written here will NEVER execute or render on the client side. This code is executed during the build process.
  //fetch data form an API

  //fetch("/api/meetups"); OR EVEN BETTER execute the code right here like this vvv

  //import {mongoClient} from "mongodb";

  //const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.ntrwp.mongodb.net/<DATABASEOFYOURCHOICE>?retryWrites=true&w=majority")      //THIS CODE MUST NEVER RUN ON CLIENT SIDE BECAUSE THEY WILL THEN SEE YOUR PASSWORD
  //const db=client.db();

  //const meetupsCollection = db.collection("meetups"); //can be named as database but can be also named differently

  //const meetups = await meetupsCollection.find().toArray();

  //client.close();

  return {
    props: {
      meetups: DUMMY_MEETUPS, //instead of DUMMY_MEETUPS we can put meetups that we fetch from MONGODB >>> meetups.map(meetup => {title: meetup.title, address: meetup.address, image: meetup.image, id: meetup._id.toString()})
    },
    revalidate: 10, //10 seconds before next.js waits to regenerate (this is how we ensure that our data is never older than 10 seconds), if our data changes each hour we will put 3600 here
  };
}

//ALTERNATIVE > its guaranteed it will run for each request but this can also be a disadvantage if your page doesnt change too ofthen. Its slower than getStaticProps and should be used only if you need access to request and response object.
/* export async function getServerSideProps(context) {
  const req = context.req; //request
  const res = context.res; //response

  //fetch data form an API or from the file system

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
} */

export default HomePage;
