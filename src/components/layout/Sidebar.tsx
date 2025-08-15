import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Schedule as ScheduleIcon,
  Book as CoursesIcon,
  Grade as GradebookIcon,
  TrendingUp as PerformanceIcon,
  Announcement as AnnouncementIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import {
  sidebarContainerStyles,
  logoContainerStyles,
  listContainerStyles,
  bottomListContainerStyles,
  listItemButtonStyles,
  bottomListItemButtonStyles,
  listItemIconStyles,
  bottomListItemIconStyles,
  listItemTextStyles,
  bottomListItemTextStyles,
} from "../styles/layout/Sidebar.styles";

interface SidebarProps {
  onItemClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const [selected, setSelected] = React.useState("Dashboard");
  const navigate = useNavigate();

  const menuItems = [
    {
      label: "Dashboard",
      icon: <DashboardIcon />,
      value: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Schedule",
      icon: <ScheduleIcon />,
      value: "Schedule",
      path: "/schedule",
    },
    {
      label: "Courses",
      icon: <CoursesIcon />,
      value: "Courses",
      path: "/courses",
    },

    {
      label: "Announcement",
      icon: <AnnouncementIcon />,
      value: "Announcement",
      path: "/announcements",
    },
  ];

  const handleNavigation = (value: string, path: string) => {
    setSelected(value);
    navigate(path);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <Box sx={sidebarContainerStyles}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          marginBottom: "2rem",
          alignSelf: "flex-start",
          paddingLeft: "16px",
        }}
      >
        <Box sx={logoContainerStyles}>
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            Coligo
          </motion.span>
        </Box>
      </motion.div>

      <List sx={listContainerStyles}>
        {menuItems.map((item) => (
          <ListItem key={item.value} disablePadding sx={{ mb: 1 }}>
            <ListItemButton
              selected={selected === item.value}
              onClick={() => handleNavigation(item.value, item.path)}
              sx={listItemButtonStyles(selected === item.value)}
            >
              <ListItemIcon sx={listItemIconStyles(selected === item.value)}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={listItemTextStyles(
                  selected === item.value
                )}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
