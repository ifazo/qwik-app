import { component$ } from "@builder.io/qwik";

export const App = component$(() => {
  return (
     <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      {/* more routes */}
    </Router>
  );
});
