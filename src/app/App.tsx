import { HashRouter } from "react-router-dom";
import Providers from "./providers";
import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    <HashRouter>
      <Providers>
        <AppRoutes />
      </Providers>
    </HashRouter>
  );
}
