import { HashRouter } from "react-router-dom";
import Providers from "./providers";
import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    //hasrouter for github deployment, unless the link breaks
    <HashRouter>
      <Providers>
        <AppRoutes />
      </Providers>
    </HashRouter>
  );
}
