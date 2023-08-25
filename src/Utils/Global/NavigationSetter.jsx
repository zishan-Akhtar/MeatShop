import { useNavigate } from "react-router-dom";
import Navigator from "./NavigationHistory";


export const NavigationSetter = () => {
  Navigator.navigate = useNavigate();
  return null;
};

export default NavigationSetter;