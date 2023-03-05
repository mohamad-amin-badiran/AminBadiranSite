import { Box, } from "@mui/material";
const TabPanel = (props) => {
  const { children, index, pageNumber, ...others } = props;
  return (
    <>
      <div
        role="tabpanel"
        hidden={pageNumber !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`sidebar-tab-${index}`}
        {...others}
      >
        {pageNumber === index && (
          <Box
            sx={{
              width: "100%",           
            }}
          >
            {children}
          </Box>
        )}
      </div>
    </>
  );
};

export default TabPanel;
