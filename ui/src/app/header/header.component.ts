import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['header.component.css']
})
export class HeaderComponent{
  @Input() pageTitle: string | undefined;
  @Input() logoSrc: string | undefined;
}
