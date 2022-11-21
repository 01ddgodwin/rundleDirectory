import { Businesses } from "./businesses.model";

export class Category {
    public id!: string;
    public name!: string;
    public image!: string;
    public businesses!: Businesses[];
  
    // constructor(id: string, name: string, image: string, businesses: Businesses ) {
    //   this.id = id;
    //   this.name = name;
    //   this.image = image;
    //   this.businesses = businesses[];
    // }
}