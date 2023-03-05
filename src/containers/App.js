import { useEffect, useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import "./../App.css";
import ContentContaner from "./ContentContaner";
import { useMediaQuery } from "@mui/material";
import DrawerActionButton from "../components/drawer/DrawerActionButton";
import SwipeableViews from "react-swipeable-views";
import MainContext from "./../context/indexContext";
import { useTheme } from "@mui/material/styles";
import {
  Sidebar,
  SidebarContaner,
  TabPanel,
} from "../components/sidebar/ImportComponent";
import {
  HomePage,
  AboutPage,
  Skill,
  ContactPage,
  MyProjects,
  FirendPage,
} from "../pages/ImportComponent";
function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mode, setmode] = useState();

  const perefersTheme = useMediaQuery("(prefers-color-scheme : dark)");

  const handlePageNumber = (event, newvalue) => {
    setPageNumber(newvalue);
  };

  let theme = useTheme();
  let isMdSidebar = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (isMdSidebar) {
      setOpenDrawer(false);
    }
  }, []);

  useEffect(() => {
    setmode(perefersTheme ? "dark" : "light");
  }, []);

  const handleMode = () => {
    setmode((prevmode) => (prevmode === "light" ? "dark" : "light"));
  };
  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleMode,
        openDrawer,
        setOpenDrawer,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContaner>
          <Sidebar />
        </SidebarContaner>

        <DrawerActionButton />

        <ContentContaner>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <TabPanel pageNumber={pageNumber} index={0}>
              <HomePage />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={1}>
              <AboutPage />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={2}>
              <Skill />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={3}>
              <MyProjects />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={4}>
              <FirendPage />
            </TabPanel>
            <TabPanel pageNumber={pageNumber} index={5}>
              <ContactPage />
            </TabPanel>
          </SwipeableViews>
        </ContentContaner>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default App;
