import { Observable } from "@nativescript/core";
import { firebase } from "@nativescript/firebase";
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const appSettings = require("tns-core-modules/application-settings");




export class HomeViewModel extends Observable {
   
    sections: typeof ObservableArray;
    recentSection: Observable;
    isBusy: Boolean;
    
    constructor() {
        super();
        
        this.set("isBusy",true);
        

        if ( this.sections && this.sections.length >0) { return; }
        
        this.sections = new ObservableArray();
        
        //---- Add recent section ----
        this.recentSection = new Observable();
        this.recentSection.set("sectionTitle", "Current List");
        this.recentSection.set("playlists",new ObservableArray());
        console.log("adding Section: " + "Current List");
        
        if(appSettings.getString("recents"))
        {
            console.log("------adding recents---:" + appSettings.getString("recents"));
            this.sections.push(this.recentSection);  
        }
        else
        {
            console.log("------NOT adding recents---");
        }
        
        //--- Add recent section DONE---
        
        
        
        console.log("<<<<<<<<<<<<<<   Firebase Query >>>>>>>>>>>>>>>>>>>>");
        //console.log(Object.getOwnPropertyNames(firebase));
        
        const cats = firebase["firestore"].collection("ytvideo");
        
        cats.get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log("------------------------------------------");
                    //console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                    
                    this.addSection(doc);
                    //this.addSection(doc.data().sectionTitle);
                });
                
                this.set("isBusy",false);
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
        playlist.set("type","playlist");
        playlist.set("sectionTitle", doc.data().sectionTitle);
         playlist.set("playlistTitle", doc.data().playlistTitle);
        if(doc.data().playlistTitle.length > 16)
        {
            playlist.set("playlistTitleToShow", doc.data().playlistTitle.substring(0,17).padEnd(17,' .'));
        }
        else
        {
            playlist.set("playlistTitleToShow", doc.data().playlistTitle.substring(0,16).padEnd(17,' '));
        }
        playlist.set("videos",new ObservableArray());
        playlist.set("videoThumbnail", doc.data().videoThumbnail);
        playlist.set("ytLink", "~/assets/yt.html?v=" + doc.data().videoId);
        
        var videoOrder = 0;
    
        try
        {
            videoOrder = appSettings.getNumber(doc.data().playlistTitle);
        }
        catch (error) {
            videoOrder = 0;
        }
        
        if(videoOrder == null) videoOrder=0;
        
        playlist.set("curVideoOrder",videoOrder);
        
        
        for (var i = 0; i < section.get("playlists").length; i++) {
            if (section.get("playlists").getItem(i).get("playlistTitle") === doc.data().playlistTitle) {
                this.addVideo(doc,section.get("playlists").getItem(i));
                return;
            }
        }
        section.get("playlists").push(playlist);
        this.addVideo(doc,playlist);
        
        
        
        
        // --- add to recent section ---
        if(appSettings.getString("recents") && appSettings.getString("recents").indexOf(playlist.get("playlistTitle")) > -1)
        {
            console.log("*********found in recents:" + playlist.get("playlistTitle"));
            for (var i = 0; i < this.recentSection.get("playlists").length; i++) {
                if (this.recentSection.get("playlists").getItem(i).get("playlistTitle") == playlist.get("playlistTitle")) {
                    return;
                }
            }

            this.recentSection.get("playlists").push(playlist);
            playlist.set("playlistTitleToShow", "*" + playlist.get("playlistTitleToShow"));


        }
        //--- end add to recent setion ---
       
        
    }
    
    addVideo(doc, playlist)
    {
        //console.log("adding Video:" + doc.data().videoTitle);
        
        const video = new Observable();
        video.set("type","video");
        video.set("sectionTitle", doc.data().sectionTitle);
        video.set("playlistTitle", doc.data().playlistTitle);
        video.set("videoOrder", doc.data().videoOrder);
        video.set("videoTitle", doc.data().videoTitle);
        video.set("videoDescription", doc.data().videoDescription.substring(0,150));
        video.set("videoThumbnail", doc.data().videoThumbnail);
        video.set("ytLink", "~/assets/yt.html?v=" + doc.data().videoId);
        video.set("videoId", doc.data().videoId);
        

        playlist.get("videos").push(video);
    
        playlist.get("videos").sort((a, b) => (a.get("videoOrder") > b.get("videoOrder")) ? 1 : -1);
        
        video.set("playlist", playlist);
        

       
        
    }
    
    
    
}
