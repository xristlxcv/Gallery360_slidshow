import { AppRegistry, } from 'react-360';
import RightPanel from "./components/RightPanel"
import LeftPanel from "./components/LeftPanel"
import slideshow from "./components/MainPanel"


AppRegistry.registerComponent('slideshow', () => slideshow);
AppRegistry.registerComponent("RightPanel", () => RightPanel);
AppRegistry.registerComponent("LeftPanel", () => LeftPanel);
