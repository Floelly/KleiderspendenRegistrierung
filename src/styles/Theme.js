export const Theme = {
  spacing: {
    xs: "clamp(0.25rem, 0.5vw, 0.5rem)",
    s: "clamp(0.5rem, 1vw, 1rem)",
    m: "clamp(1rem, 2vw, 2rem)",
    l: "clamp(2rem, 4vw, 4rem)",
    containerWidth: "clamp(20rem, 80vw, 120rem)",
  },
  sizes: {
    contentWidth: "clamp(60vw, 95vw, 1300px)",
    header: {
      large: "20vh",
      small: "8vh",
    },
    footerMinHeight: "20vh",
    titlePageHeight: "90vh",
    navModalWidth: "clamp(280px, 90vw, 40vw)",
    logoSize: "clamp(1.1rem, 11vw, 5.5rem)",
    iconSize: "clamp(1rem, 10vw, 5rem)",
    section: {
      minHeight: "50vh",
      triangleTop: "20vh",
      triangleBottom: "20vh",
    },
  },
  fonts: {
    body: "'Inter', sans-serif",
    heading: "'Segoe UI', 'Helvetica Neue', 'San Francisco', Arial, sans-serif",
    mono: "'Courier New', monospace",
  },
  fontSizes: {
    body: "clamp(1rem, 1.2vw, 1.5rem)",
    h1: "clamp(2rem, 4vw, 3rem)",
    h2: "clamp(1.5rem, 3vw, 2.6rem)",
    small: "clamp(0.875rem, 1vw, 1.2rem)",
    copyright: "clamp(.8rem, 1vw, 1rem)",
  },
  colors: {
    light: "#fdfaf5",
    dark: "#1e1e1e",
    primary: "#b95829",
  },
  breakpoints: {
    s: "480px",
    m: "768px",
    l: "1024px",
  },
  zIndex: {
    background: -1,
    default: 1,
    contentOverlay: 5,
    header: 10,
    footer: 10,
    navigation: 100,
    tooltip: 200,
  },
};
