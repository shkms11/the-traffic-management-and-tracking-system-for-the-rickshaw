import { Provider } from "react-redux";
import { store } from "@";
import { BrowserRouter } from "react-router-dom";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
