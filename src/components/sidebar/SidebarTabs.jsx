import { useContext } from "react";
import { Tab, Tabs } from "@mui/material";
import {
  HomeRounded,
  FaceRounded,
  FactCheckRounded,
  SpeakerNotesRounded,
  IntegrationInstructionsRounded,
  ContactPhoneRounded,
} from "@mui/icons-material";

import MainContext from "../../context/indexContext";
const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setOpenDrawer } =
    useContext(MainContext);

  const tabProps = (index) => {
    return {
      id: `sidebar-tab${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره ی من", icon: <FaceRounded />, ...tabProps(1) },
    { label: "رزومه من", icon: <FactCheckRounded />, ...tabProps(2) },
    {
      label: "نمونه کار ها",
      icon: <IntegrationInstructionsRounded />,
      ...tabProps(3),
    },
    { label: "دوستان و همکارانم", icon: <SpeakerNotesRounded />, ...tabProps(4) },
    { label: "ارتباط با من", icon: <ContactPhoneRounded />, ...tabProps(5) },
  ];
  return (
    <>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={pageNumber}
        onChange={handlePageNumber}
        sx={{ my: 2 }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            sx={{color : "gray"}}
            onClick={() => setOpenDrawer(false)}
            {...tab}
          />
        ))}
      </Tabs>
    </>
  );
};

export default SidebarTabs;
