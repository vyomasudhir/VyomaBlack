const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
export interface Item {
    name: string;
    description: string;
    ytid: string;
    videos: typeof ObservableArray;
}
