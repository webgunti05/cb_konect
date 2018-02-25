import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  private showActionsOne: boolean;
  private showActionsTwo: boolean;
  private showActionsThree: boolean;
  constructor() {
    this.showActionsOne = false;
    this.showActionsTwo = false;
    this.showActionsThree = false;
  }

  showPopActionsOne() {
    this.showActionsOne = true;
    this.showActionsTwo = false;
    this.showActionsThree = false;
  }
  showPopActionsTwo() {
    this.showActionsOne = false;
    this.showActionsTwo = true;
    this.showActionsThree = false;
  }
  showPopActionsThree() {
    this.showActionsOne = false;
    this.showActionsTwo = false;
    this.showActionsThree = true;
  }

  hidePopActions() {
    this.showActionsOne = false;
    this.showActionsTwo = false;
    this.showActionsThree = false;
  }
  ngOnInit() {
  }

}
