import LocalizedStrings from 'react-native-localization';
const strings = new LocalizedStrings({
  "dk":{

    //HomeScreen
    header1: "Indgang",
    header2: "Velkommen i dragens hule", 
    password: "Kodeord",
    enter: "Videre",
    signUp: "Skriv op", 
    itemAdd: "Tilføj ting", 
    itemList: "Se liste",
    map: "Kort", 

    //Sign Up
    signUpHeader: "Skriv dig op her!",
    confirm: "Bekræft",
  },
  "en":{
    //HomeScreen
    header1: "Entrance",
    header2: "Welcome to the dragon's lair",
    password: "Password", 
    enter: "Enter",
    signUp: "Sign Up",
    itemAdd: "Add Item", 
    itemList: "View list", 
    map: "Map",

    //Sign Up
    signUpHeader: "Sign Up here!",
    confirm: "Confirm",
  },
});
export default strings;