import { View, ItemEventData, NavigatedData, Page } from "@nativescript/core";
const appSettings = require("tns-core-modules/application-settings");
import { HomeViewModel } from "./home-view-model";
import { Item } from "./shared/item";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    if(!page.bindingContext)
    page.bindingContext = new HomeViewModel();
}

export function onItemTap(args: ItemEventData) {
    const view = <View>args.view;
    const page = <Page>view.page;
    const tappedItem = <Item>view.bindingContext;
    
    const video = tappedItem.videos.getItem(tappedItem.curVideoOrder);
    
    if(appSettings.getString("recents"))
    {
        console.log("------Recents:" + appSettings.getString("recents"));
        if(appSettings.getString("recents").search(tappedItem.playlistTitle) < 0 ) 
        {
            appSettings.setString("recents", tappedItem.playlistTitle + "|||" + appSettings.getString("recents"));
            page.bindingContext.recentSection.get("playlists").unshift(tappedItem);
        }
    }
    else
    {
        console.log("---- creating recents ----");
        appSettings.setString("recents", tappedItem.playlistTitle);
    }
    appSettings.setString("recents",appSettings.getString("recents").substring(0,256));
    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: video,
        animated: true,
        transition: {
            name: "slide",
            duration: 300,
            curve: "ease"
        }
    });
}
