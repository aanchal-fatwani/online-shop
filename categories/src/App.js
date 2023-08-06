import React from "react";

const App = ({ routeParams }) => {
  const { category } = routeParams;
  return (
    <div>
      <h1>
        Categories - {category}
      </h1>
    </div>
  );
};

export default App;
