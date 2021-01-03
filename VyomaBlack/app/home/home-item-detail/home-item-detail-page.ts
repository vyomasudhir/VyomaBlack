import { ItemEventData,EventData, View, NavigatedData, Page } from "@nativescript/core";
const appSettings = require("tns-core-modules/application-settings");
import { Item } from "../shared/item";
import { Observable } from "@nativescript/core";
import {WebView, LoadEventData} from "@nativescript/core";
import { WebViewInterface } from 'nativescript-webview-interface';
import * as dialogs from "tns-core-modules/ui/dialogs";

var oLangWebViewInterface: WebViewInterface;


export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    const item = args.context as Observable;
    page.bindingContext = item;
    appSettings.setNumber(item.get("playlistTitle"), item.get("videoOrder") - 1);
    console.log("currentVideo:" + item.get("videoId"));
    
    const video = item;
    var nextVideoId=video.get("videoId");
    if(video.get("playlist").get("videos").getItem(video.get("videoOrder")))
    {
        nextVideoId = video.get("playlist").videos.getItem(video.get("videoOrder")).get("videoId");
    }
    video.set("ytLink" ,"~/assets/yt.html?v=" + video.get("videoId") + "&nv=" + nextVideoId + "&from=" + appSettings.getNumber(video.get("videoId")));
    console.log(video.get("ytLink"));
    
    //
    setupWebViewInterface(page, video.get("ytLink")); 

}


function setupWebViewInterface(page: Page, url: String){
    var webView = <WebView>page.getViewById('webView');
    oLangWebViewInterface = new WebViewInterface(webView, url);
    oLangWebViewInterface.on('durationChanged', (duration) => {
        const time = duration.duration + ' ' as String;
        const percentageComplete = duration.duration / duration.totalDuration * 100;
        const percentageCompleteStr = percentageComplete + ' ';
        if(duration.duration && duration.duration > 0)
        appSettings.setNumber(duration.videoId, parseInt(time.substring(0,time.indexOf('.'))));
        
        appSettings.setNumber(duration.videoId + "_PercentageComplete", parseInt(percentageCompleteStr.substring(0,percentageCompleteStr.indexOf('.'))));
        
        //dialogs.alert(duration.videoId + ":" + percentageCompleteStr).then(()=> {
        //    console.log("Dialog closed!");
        //});
        
        
    });
}

export function onBackButtonTap(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;

    //page.frame.goBack();
    page.frame.navigate({
        moduleName: "home/home-items-page",
        });
        
}


export function onItemTap(args: ItemEventData) {
    const view = <View>args.view;
    const page = <Page>view.page;
    const tappedItem = <Item>view.bindingContext;

    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 400,
            curve: "ease"
        }
    });
}

export function onItemLoading(args: ListViewEventData) {
        const video = args.view.bindingContext as Observable;
        if(appSettings.getNumber(video.get("videoId") + "_PercentageComplete"))
        {
            video.set("percentageComplete", "(" + appSettings.getNumber(video.get("videoId") + "_PercentageComplete") + "%)");
        }
        else
        {   
            video.set("percentageComplete"," ");
        }
        
        //dialogs.alert(Object.getOwnPropertyNames(args.view.bindingContext)).then(()=> {
        //    console.log("Dialog closed!");
        //});

}