import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Greeting from "./components/Greeting/Greeting";
import TabsSection from "./components/TabsSection/TabsSection";
import app_theme from "./theme";
import { mainBackgroundImageLink } from "./data/portfolio.data";
import SeoHeader from "./components/common/SeoHeader/SeoHeader";

function App() {
  return (
    <ThemeProvider theme={app_theme}>
      <div
        className="App"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${mainBackgroundImageLink})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          // justifyContent: 'center',
          flexDirection: "column",
          overflowY: "scroll",
        }}
      >
        <SeoHeader />
        <Greeting />

        <TabsSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
