import { Application } from "@nativescript/core";
import { firebase } from "@nativescript/firebase";


firebase.init({}).then(
    function () {
      console.log("firebase.init done");
      
    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);


Application.run({ moduleName: "app-root" });
//Application.run({ moduleName: "home/home-items-page" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
