import { styled } from "@mui/material/styles";
import { Paper, Card, Box, Typography, Button } from "@mui/material";

export const HeroSection = styled(Paper)(({ theme }) => ({
  background: "linear-gradient(120deg, #4facfe 0%, #00f2fe 100%)",
  color: theme.palette.common.white,
  padding: theme.spacing(10, 2),
  position: "relative",
  borderRadius: 0,
}));

export const FeaturesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  justifyContent: "center",
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
  flex: "1 1 280px",
  textAlign: "center",
  padding: theme.spacing(3),
  borderRadius: 2 * 2,
  boxShadow: theme.shadows[3],
  transition: "transform 0.3s ease",
  "&:hover": { transform: "translateY(-5px)", boxShadow: theme.shadows[6] },
}));

export const FeatureIcon = styled("div")(({ theme }) => ({
  fontSize: 40,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

export const TitleWithUnderline = styled(Typography)(({ theme }) => ({
  color: "#144272",
  fontWeight: 600,
  marginBottom: theme.spacing(6),
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -10,
    left: "50%",
    transform: "translateX(-50%)",
    width: 60,
    height: 4,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  borderRadius: 30,
  "&:hover": { backgroundColor: theme.palette.primary.dark },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,0.2)",
  color: "#fff",
  padding: theme.spacing(1, 2),
  fontWeight: 500,
  borderRadius: 20,
  "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
}));

export const CtaSection = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: "#fff",
  padding: theme.spacing(8, 2),
}));
