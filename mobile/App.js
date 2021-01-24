import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Font } from "expo";

import NavigationApp from "./src/navigation/NavigationApp";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      "Proxima-Nova-Thin": require("../../assets/fonts/Metropolis-Thin.otf"),
      "Proxima-Nova-Thin-Italic": require("../../assets/fonts/Metropolis-ThinItalic.otf"),
      "Proxima-Nova-Light": require("../../assets/fonts/Metropolis-Light.otf"),
      "Proxima-Nova-Light-Italic": require("../../assets/fonts/Metropolis-LightItalic.otf"),
      "Proxima-Nova-Regular": require("../../assets/fonts/Metropolis-Regular.otf"),
      "Proxima-Nova-Regular-Italic": require("../../assets/fonts/Metropolis-RegularItalic.otf"),
      "Proxima-Nova-Medium": require("../../assets/fonts/Metropolis-Medium.otf"),
      "Proxima-Nova-Medium-Italic": require("../../assets/fonts/Metropolis-MediumItalic.otf"),
      "Proxima-Nova-Bold": require("../../assets/fonts/Metropolis-Bold.otf"),
      "Proxima-Nova-Bold-Italic": require("../../assets/fonts/Metropolis-BoldItalic.otf"),
    });
    setFontLoaded(true);
  }, []);
  return (
    <>{fontLoaded ? <NavigationApp /> : <ActivityIndicator size="larger" />}</>
  );
}
