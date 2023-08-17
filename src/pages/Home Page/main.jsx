import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import default_user_photo from "../../assets/default_user_photo.png";
import sidebarBg from "../../assets/background.png";
import { Box } from "@mui/material";

import { FinancialAccounting } from "./components/Accounting header/header";
import { AccountingTable } from "./components/Table/table";
export const HomePage = () => {
  return (
    <Box style={{ display: "flex", height: "100%", position: "relative" }}>
      <Sidebar
        style={{
          height: "100%",
          width: "293px",
          borderColor: "#fff",
        }}
        backgroundColor="#6677a2"
        image={sidebarBg}>
        {/* // > */}
        <Box
          style={{
            height: "250px",
            display: "flex",
            justifyContent: "center",
          }}>
          <img className="ico photo" alt="Ico" src={default_user_photo} />
        </Box>
        <Box>
          <Menu
            menuItemStyles={{
              button: {
                backgroundColor: "#9fa9c2",
                // the active class will be added automatically by react router
                // so we can use it to style the active menu item
                [`&.active`]: {
                  backgroundColor: "#9fa9c2",
                  color: "#b6c8d9",
                },
              },
            }}>
            {/* <MenuItem
              active={false}
              icon={<HomeOutlinedIcon />}
              component={<Link to="/Home_page" />}>
              {" "}
              Dashboard
            </MenuItem> */}
          </Menu>
        </Box>
        <Menu
          menuItemStyles={{
            button: {
              backgroundColor: "#fff",
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#c0cceb",
                color: "#b6c8d9",
              },
            },
          }}
          style={{ bottom: "20px", position: "absolute", width: "100%" }}>
          <MenuItem icon={<SettingsIcon />} component={<Link to="/settings" />}>
            Settings
          </MenuItem>
          <MenuItem icon={<LogoutIcon />} component={<Link to="/" />}>
            Log out
          </MenuItem>
        </Menu>
      </Sidebar>
      <Box style={{ width: "100%" }}>
        {/* <Clock /> */}
        <Box
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <FinancialAccounting />
          <AccountingTable />
        </Box>
      </Box>
    </Box>
  );
};
