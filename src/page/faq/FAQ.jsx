import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Stack } from "@mui/material";
import Header from "../../components/Header";

const FAQ = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box>
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
      <Stack direction={"column"} gap={2}>
        <Accordion onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What is the admin dashboard used for?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The admin dashboard is a centralized platform for managing various
              aspects of the system, such as user accounts, content management,
              analytics, settings, and more.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Who has access to the admin dashboard?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Access to the admin dashboard is typically limited to authorized
              administrators or users with specific roles and permissions
              granted by the system administrator.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How do I log in to the admin dashboard?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To log in to the admin dashboard, visit the login page and enter
              your username and password. If you encounter any issues logging
              in, please contact the system administrator.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How do I add a new user to the system?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To add a new user, navigate to the User Management section of the
              admin dashboard and click on the Add User button. Fill in the
              required information, such as username, email, and role, and save
              the changes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Can I deactivate or delete a user account?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, administrators can deactivate or delete user accounts from
              the admin dashboard. Navigate to the users profile and select the
              option to deactivate or delete the account.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              What roles and permissions are available for users?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The admin dashboard typically offers various roles with different
              levels of access and permissions, such as administrator, editor,
              moderator, etc. You can customize roles and permissions based on
              your organizations needs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          // @ts-ignore
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              How do I create or edit content from the admin dashboard?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To create or edit content, navigate to the Content Management
              section and select the content type you want to manage, such as
              articles, pages, or products. From there, you can add new content
              or edit existing content directly.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Box>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
