const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
export interface Item {
    name: string;
    description: string;
    playlistTitle: string;
    curVideoOrder: number;
    videoOrder: number;
    ytid: string;
    videos: typeof ObservableArray;
}
