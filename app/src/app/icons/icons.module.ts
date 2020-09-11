import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [IconsComponent],
    exports: [
        IconsComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class IconsModule { }
