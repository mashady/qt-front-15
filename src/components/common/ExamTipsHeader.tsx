import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  containerStyles,
  textContainerStyles,
  titleStyles,
  subtitleStyles,
  buttonStyles,
  imageContainerStyles,
  imageStyles,
} from "../styles/common/ExamTipsHeader.styles";
import {
  containerAnimation,
  imageAnimation,
  buttonAnimation,
} from "../styles/common/ExamTipsHeader.animations";

const ExamTipsHeader = () => {
  const navigate = useNavigate();

  return (
    <Box sx={containerStyles}>
      <Box sx={textContainerStyles}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={titleStyles}
        >
          Exam Time
        </Typography>
        <Typography variant="body1" sx={subtitleStyles}>
          Here we are, Are you ready for the exams? Let's get you prepared!
        </Typography>
        <Button
          variant="contained"
          sx={buttonStyles}
          onClick={() => navigate("/exams")}
        >
          View Exams
        </Button>
      </Box>
    </Box>
  );
};

export default ExamTipsHeader;
