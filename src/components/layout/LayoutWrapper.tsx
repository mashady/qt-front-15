import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {
  rootStyles,
  mainContentStyles,
  navbarWrapperStyles,
  scrollableContentStyles,
  contentStyles,
  sidebarStyles,
} from "../styles/layout/LayoutWrapper.styles";

interface Props {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={rootStyles}>
      <Box sx={mainContentStyles}>
        <Box sx={navbarWrapperStyles}>
          <Navbar />
        </Box>

        <Box component="main" sx={scrollableContentStyles}>
          <Box sx={contentStyles}>{children}</Box>

          <Box sx={sidebarStyles}>
            <Sidebar />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutWrapper;
