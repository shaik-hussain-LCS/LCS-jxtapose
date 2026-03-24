/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuildPage from "./Pages/BuildPage";
import { SpaceProjects, buildprojects } from "./utils/constansts";
import SpacePage from "./Pages/SpacePage";
import HomeScreen from "./Pages/Home";
import SocialPage from "./Pages/Social";
import TeamPage from "./Pages/Team";
import ClientsPage from "./Pages/Clients";
import ContactPage from "./Pages/Contact";
import Build from "./Pages/Build";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/build" element={<Build />} />
          <Route path="/socialprojects" element={<SpacePage />} />
          <Route path="/buildprojects" element={<BuildPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {buildprojects.map((project: any, index) => (
            <Route
              key={"build" + index}
              path={project?.link}
              element={project?.project}
            />
          ))}

          {SpaceProjects.map((project: any, index) => (
            <Route
              key={"space" + index}
              path={project?.link}
              element={project?.project}
            />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
