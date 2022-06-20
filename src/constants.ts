export class Constants{
    static HttpEndpoints = class {
        static IP : string = 'http://localhost:3000';
        static ALL_HEROES: string = this.IP + '/heroes/all-heroes';
        static ADD_HERO: string = this.IP + '/heroes/insert-hero';
        static DELETE_HERO: string = this.IP + '/heroes/delete-hero';
    }

    static Keys = class {
        static HERO = "HERO";
    }
}