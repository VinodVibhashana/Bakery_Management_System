import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// Adjust the import paths as needed
import AddShop from "./AddShop";
import AddProfit from "./AddProfit";
import InputQuntity from "./InputQuntity";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{ width: "100vw" }}>
            <Tab label="Home" value="1" sx={{ fontWeight: "bold" }} />
            <Tab label="Sales Price" value="2" sx={{ fontWeight: "bold" }} />
            <Tab label="ADD TO SALES" value="3" sx={{ fontWeight: "bold" }} />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ backgroundColor: "#faebd7" }}>
          {value === "1" && <InputQuntity/>}
        </TabPanel>
        <TabPanel value="2" sx={{ backgroundColor: "#faebd7" }}>
          {value === "2" && <AddProfit />}
        </TabPanel>
        <TabPanel value="3" sx={{ backgroundColor: "#faebd7" }}>
          {value === "3" && <AddShop />}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
