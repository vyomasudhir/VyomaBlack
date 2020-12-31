import { NavigatedData, Page } from "@nativescript/core";
import { BrowseViewModel } from "./learn-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new BrowseViewModel();
}
