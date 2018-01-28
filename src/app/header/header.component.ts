import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/api";
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
        label: "Our history",
        icon: "fa-address-card",
        items: [{
          label: "Company",
          icon: "fa-building-o",
          items: [
            {label: "Projects"},
            {label: "Team"},
          ]
        },
          {label: "Jobs",
          icon: "fa-briefcase"}
        ]
      },
      {
        label: "Contact",
        icon: "fa-handshake-o",
        items: [
          {label: "Remote", icon: "fa-phone-square"},
          {label: "Our offices", icon: "fa-university"}
        ]
      }
    ];
  }
}
