import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { JLMCPageLayout } from "../components/PageLayout";
import JLMCHome from "../components/Home";
import JLMCAbout from "../components/About";
import JLMCPlaylist from "../components/Playlist";
import JLMCNews from "../components/News";
import JLMCContact from "../components/Contact";
import JLMCErrorPage from "../components/ErrorPage";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<JLMCPageLayout />}
      errorElement={<JLMCErrorPage />}
    >
      <Route index path="/home" element={<JLMCHome />}></Route>
      <Route path="sobre" element={<JLMCAbout />}></Route>
      <Route path="playlist" element={<JLMCPlaylist />}></Route>
      <Route path="noticia" element={<JLMCNews />}></Route>
      <Route path="contato" element={<JLMCContact />}></Route>
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={route} />;
};

export default Root;
