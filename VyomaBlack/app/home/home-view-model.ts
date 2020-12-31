import { Observable } from "@nativescript/core";
//import { Item } from "./shared/item";
import { firebase } from "@nativescript/firebase";
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;



export class HomeViewModel extends Observable {
   
    sections: typeof ObservableArray;

    constructor() {
        super();

        if ( this.sections && this.sections.length >0) { return; }
        
        this.sections = new ObservableArray();
        
        
        console.log("<<<<<<<<<<<<<<   Firebase Query >>>>>>>>>>>>>>>>>>>>");
        console.log(Object.getOwnPropertyNames(firebase));
        
        const cats = firebase["firestore"].collection("ytvideo");
        

        cats.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log("------------------------------------------");
                    //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                    
                    this.addSection(doc);
                    //this.addSection(doc.data().sectionTitle);
                });
            });
            
            
    }
    
    
    addSection(doc)
    { 

        //console.log("checking Section: " + doc.data().sectionTitle);
        
        for (var i = 0; i < this.sections.length; i++) {
            if (this.sections.getItem(i).get("sectionTitle") === doc.data().sectionTitle) {
                this.addPlaylist(doc, this.sections.getItem(i));
                return;
            }
        }

        //console.log("adding Section:" + doc.data().sectionTitle);
        const section = new Observable();
        section.set("sectionTitle", doc.data().sectionTitle);
        section.set("playlists",new ObservableArray());
        console.log("adding Section: " + doc.data().sectionTitle);
        this.sections.push(section);
        this.addPlaylist(doc, section);
     
    }
    
    addPlaylist(doc, section)
    {
        //console.log("adding Playlist:" + doc.data().playlistTitle);
        //console.log("adding Thumbnail:" + doc.data().videoThumbnail);
        
        const playlist = new Observable();
        playlist.set("sectionTitle", doc.data().sectionTitle);
         playlist.set("playlistTitle", doc.data().playlistTitle);
        if(doc.data().playlistTitle.length > 16)
        {
            playlist.set("playlistTitleToShow", doc.data().playlistTitle.substring(0,17).padEnd(19,'.'));
        }
        else
        {
            playlist.set("playlistTitleToShow", doc.data().playlistTitle.substring(0,16).padEnd(19,' '));
        }
        playlist.set("videos",new ObservableArray());
        playlist.set("videoThumbnail", doc.data().videoThumbnail);
        playlist.set("videoId", "~/assets/yt.html?v=" + doc.data().videoId);
        //console.log("playlist length:" + section.get("playlists").length);
        
        for (var i = 0; i < section.get("playlists").length; i++) {
            if (section.get("playlists").getItem(i).get("playlistTitle") === doc.data().playlistTitle) {
                this.addVideo(doc,section.get("playlists").getItem(i));
                return;
            }
        }
        section.get("playlists").push(playlist);
        this.addVideo(doc,playlist);
       
        
    }
    
    addVideo(doc, playlist)
    {
        //console.log("adding Video:" + doc.data().videoTitle);
        
        const video = new Observable();
        video.set("sectionTitle", doc.data().sectionTitle);
        video.set("playlistTitle", doc.data().playlistTitle);
        video.set("videoOrder", doc.data().videoOrder);
        video.set("videoTitle", doc.data().videoTitle);
        video.set("videoDescription", doc.data().videoDescription.substring(0,150));
        video.set("videoThumbnail", doc.data().videoThumbnail);
        video.set("videoId", "~/assets/yt.html?v=" + doc.data().videoId);
        
        //console.log("video length:" + playlist.get("videos").length);

        playlist.get("videos").push(video);
    
        playlist.get("videos").sort((a, b) => (a.get("videoOrder") > b.get("videoOrder")) ? 1 : -1);
        
        video.set("playlist", playlist);
        

       
        
    }
    
    
    
}
