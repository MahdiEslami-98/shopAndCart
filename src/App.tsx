import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import AppRouter from "./routes";
import queryClient from "./libs/react-query";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
