import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ProdivderConf from "./tools/provider/index.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./roots/index.tsx";
import "@ant-design/v5-patch-for-react-19";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProdivderConf>
      <RouterProvider router={router} />
    </ProdivderConf>
  </StrictMode>
);
