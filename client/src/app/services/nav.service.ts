import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

  private menuList : Array<any>;
  constructor() { 
    this.menuList = ["Home", "Login"];
  }

  getMenuList(){
    return this.menuList;
  }

}
