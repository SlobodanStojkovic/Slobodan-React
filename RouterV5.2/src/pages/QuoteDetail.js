import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { DUMMY_QUOTES } from "./AllQuotes";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  console.log(match)



  console.log(params)


  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return (
      <HighlightedQuote text="No quote found" author="Great Quotes team" />
    );
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn-flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        {/*/quotes/${params.quoteId} is replaced with  ${match.path}*/}
        {/* or alternately since we define ROUTE and NOT LINK we can use path="/quotes/:quoteId/comments" */}
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
