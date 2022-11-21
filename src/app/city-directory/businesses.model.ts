export class Businesses {
    public id: string;
    public name: string;
    public lat: string;
    public long: string;
  
    constructor(id: string, name: string, lat: string, long: string ) {
      this.id = id;
      this.name = name;
      this.lat = lat;
      this.long = long;
    }
}