import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';



@NgModule({
    declarations: [IconsComponent],
    exports: [
        IconsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class IconsModule { }
