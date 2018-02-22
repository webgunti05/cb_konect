import { Component, OnInit } from '@angular/core';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'Sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  menuList : Array<any>;
  logoBg : String;
  constructor(private navSvc : NavService) {
    this.menuList = this.navSvc.getMenuList();
   this.logoBg = "assets/images/logo-trans.png";
   }

  ngOnInit() {
  }

}
