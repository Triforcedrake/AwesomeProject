# AwesomeProject
A project undertaken to learn and test a variety of React Native coding. It is not intended for release or selling in any capacity.

I created this project for the purpose of me learning and testing a variety of React Native coding.  
As such it includes basics like layout, styleSheet, navigation and the likes. 
But it also includes an implementation of the Google Maps API,
as well as a Firebase database setup that allows adding of words to a list and the viewing of that list. 
The login/sign up functions while present in design, are not yet implemented. 

## Installation
Step 1: Download the main master project file and unzip it where you want it. 

Step 2: Since this project includes firebase implementation a Firebase.config file is required. Guidance on how to aquire can be found here: https://firebase.google.com/docs/web/setup 

Step 3: Use a command prompt to navigate to the source level of the file (the one with the App.js file).

Step 4: From there, run 

```
$ npm install
```

and wait for it to finish. 

*Before running android build, setup Android Studio*

Step 5: Run the project on the Android device of your choosing or a virtual device, by way of the following command.  

```
$ React-Native Run-Android
```

The project was tested and run succesfully on a Samsung Galaxy Phone (Android 5.1.1, API 22)
And a Nexus 5X API Oreo 27 virtual device. 

IOS is untested. 

## Known issues
Yellow warning about setting a timer for a long period of time. Introduced with integration of Firebase database connection. No observed problems so far, but attempts to find cause have been unsuccesful as well. 

Install will occasionally create copies of dependencies in the Java Main application under GetPackages. If this error occurs, removal of duplicates should fix the issue. 
