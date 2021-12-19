import QuoteList from "../components/quotes/QuoteList";

export const DUMMY_QUOTES = [
  { id: "q1", author: "Slobodan", text: "React Browser is very usefull!" },
  { id: "q2", author: "Sloba", text: "React Browser also has version 6!" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
