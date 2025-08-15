import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Container, Box, Typography, CardContent } from "@mui/material";
import { RootState } from "../../app/store";
import { useTranslation } from "react-i18next";
import {
  HeroSection,
  FeatureCard,
  FeaturesContainer,
  TitleWithUnderline,
  PrimaryButton,
  SecondaryButton,
  CtaSection,
  FeatureIcon,
} from "../styles/Home/Home.styles";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const handleAuthClick = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(
        login({
          token: "dummy-token",
          user: { id: "1", name: "Samir", role: "student" },
        })
      );
      navigate("/dashboard");
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const features = [
    {
      title: t("home.features.0.title"),
      description: t("home.features.0.description"),
    },
    {
      title: t("home.features.1.title"),
      description: t("home.features.1.description"),
    },
    {
      title: t("home.features.2.title"),
      description: t("home.features.2.description"),
    },
  ];

  return (
    <Box>
      <HeroSection>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Box sx={{ position: "absolute", top: 20, right: 20 }}>
            <SecondaryButton onClick={toggleLanguage}>
              {i18n.language === "en" ? "العربية" : "English"}
            </SecondaryButton>
          </Box>
          <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
            {t("home.welcome")}
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            {t("home.subtitle")}
          </Typography>
          <PrimaryButton onClick={handleAuthClick}>
            {isAuthenticated ? t("home.dashboard") : t("home.login")}
          </PrimaryButton>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        <TitleWithUnderline variant="h4" align="center">
          {t("home.featuresTitle")}
        </TitleWithUnderline>
        <FeaturesContainer>
          {features.map((f, idx) => (
            <FeatureCard key={idx}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {f.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {f.description}
                </Typography>
              </CardContent>
            </FeatureCard>
          ))}
        </FeaturesContainer>
      </Container>

      <CtaSection>
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            {t("home.readyTitle")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {t("home.readyDesc")}
          </Typography>
          <PrimaryButton onClick={handleAuthClick}>
            {isAuthenticated ? t("home.dashboard") : t("home.signup")}
          </PrimaryButton>
        </Container>
      </CtaSection>
    </Box>
  );
};

export default Home;
