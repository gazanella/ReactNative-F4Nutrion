import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import __init__ from "./services/sqlite/config";
import Routes from "./views/Routes/Routes";
import { StatusBar } from "react-native";


export default function App(){
  useEffect(() => {
    __init__();
  }, []);

  return (  
    <NavigationContainer>
      <StatusBar barStyle='default'/>
      <Routes />
    </NavigationContainer>
  );
};
