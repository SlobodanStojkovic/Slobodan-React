import { Redirect, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";

/* import AllQuotes from "./pages/AllQuotes"; */
/* import NewQuote from "./pages/NewQuote"; */
/* import QuoteDetail from "./pages/QuoteDetail"; */
/* import NotFound from "./pages/NotFound"; */
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote")); //this will import this code only when its needed
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />{" "}
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            {/* any path that doesnt match the above routes will match this route */}
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
