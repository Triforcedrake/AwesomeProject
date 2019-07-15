import LocalizedStrings from 'react-native-localization';
const strings = new LocalizedStrings({
  "dk":{

    //HomeScreen
    titleHome: "Indgang",
    header2: "Velkommen i dragens hule", 
    password: "Kodeord",
    enter: "Videre",
    signUp: "Skriv dig op", 
    itemAdd: "Tilføj ting", 
    itemList: "Se liste",
    map: "Kort", 

    //Sign Up
    titleSignUp: "Mød dragen!",
    signUpHeader: "Skriv dig op her!",
    confirm: "Bekræft",

    //AddItem
    titleAdd: "Tilbyd skat", 
    addTitle: "Tilføj skat", 
    addAlert: "Skat tilføjet",
    addButton: "Tilføj", 

    //ListItem
    titleList: "Skatkammer",

    //Map
    titleMap: "Kort",

    //Login
    titleLogin: "Hulen", 
  },
  "en":{
    //HomeScreen
    titleHome: "Entrance",
    header2: "Welcome to the dragon's lair",
    password: "Password", 
    enter: "Enter",
    signUp: "Sign Up",
    itemAdd: "Add Item", 
    itemList: "View list", 
    map: "Map",

    //Sign Up
    titleSignUp: "Meet the dragon!",
    signUpHeader: "Sign Up here!",
    confirm: "Confirm",

    //AddItem
    titleAdd: "Offer treasure",
    addTitle: "Add treasure",
    addAlert: "Treasure added",
    addButton: "Add", 

    //ListItem
    titleList: "Treasury",

    //Map
    titleMap: "Map",

    //Login
    titleLogin: "Lair", 
  },
});
export default strings;