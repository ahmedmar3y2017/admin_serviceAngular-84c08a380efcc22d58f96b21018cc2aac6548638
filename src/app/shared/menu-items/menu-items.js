"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var  MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'ti-home'
      },

      {
        state: 'products',
        short_label: 'P',
        name: 'Products',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      },

      {
        state: 'orders',
        short_label: 'O',
        name: 'Orders',
        type: 'link',
        icon: 'ti-crown'
      },

      {
        state: 'customers',
        short_label: 'C',
        name: 'Customers',
        type: 'link',
        icon: 'ti-id-badge'
      },

      {
        state: 'reports',
        short_label: 'R',
        name: 'Reports',
        type: 'link',
        icon: 'ti-layout-grid2-alt'
      }
    ]
    }

];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    return MenuItems;
}());
MenuItems = __decorate([
    core_1.Injectable()
], MenuItems);
exports.MenuItems = MenuItems;
