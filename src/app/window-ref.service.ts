import { Injectable } from '@angular/core';

// https://stackoverflow.com/questions/34177221/how-to-inject-window-into-a-service
export interface ICustomWindow extends Window {
    __custom_global_stuff: string;
}

function getWindow (): any {
    return window;
}

@Injectable()
export class WindowRefService {
    get nativeWindow (): ICustomWindow {
        return getWindow();
    }
}
