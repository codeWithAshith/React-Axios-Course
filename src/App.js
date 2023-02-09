// npm i axios

import Interceptors from "./examples/06. Interceptors";

// Axios
// returns promise
// response data located in data object
// error in response.error

const App = () => {
  return (
    <div>
      <h2 className="text-center">Learn Axios</h2>
      <Interceptors />
    </div>
  );
};

export default App;
