import { QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "./routes";
import queryClient from "./libs/react-query";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
