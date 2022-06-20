export class Constants{
    static HttpEndpoints = class {
        static IP : string = 'http://localhost:8080';
        static ALL_HEROES: string = this.IP + '/all-heroes';
        static ADD_HERO: string = this.IP + '/insert-hero';
    }
}