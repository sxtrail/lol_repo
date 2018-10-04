import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'online';
    buttonStatus = false;

    constructor(){
        setTimeout(() => {
            this.buttonStatus = true;
        } ,2000)
    }

    getServerStatus(){
        return this.serverStatus;
    }
}