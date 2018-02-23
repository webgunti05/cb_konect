import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

  private menuList : Array<any>;
  constructor() { 
    this.menuList = ["Dashboard","Members", "Celebrities","Content", "Inventory", "Auctions","Activities", "Orders", "Transactions","User Management", "Event Log"];
  }

  getMenuList(){
    return this.menuList;
  }

}
