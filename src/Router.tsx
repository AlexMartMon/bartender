import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";

const IndexPage = lazy(() => import("./Views/IndexPage"));
const FavoritePage = lazy(() => import("./Views/FavoritePage"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                <IndexPage />{" "}
              </Suspense>
            }
            index
          />
          <Route
            path="/favorite"
            element={
              <Suspense fallback="Loading...">
                <FavoritePage />{" "}
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
