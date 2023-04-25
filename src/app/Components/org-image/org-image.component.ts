import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-org-image',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './org-image.component.html',
  styleUrls: ['./org-image.component.scss']
})
export class OrgImageComponent {

}
