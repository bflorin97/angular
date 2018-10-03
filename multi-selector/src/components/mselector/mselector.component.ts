import {Component, Input, OnInit, Output} from '@angular/core';
import {CustomOption} from './Models';

@Component({
  selector: 'app-mselector',
  templateUrl: './mselector.component.html'
})

export class MselectorComponent implements OnInit{
  @Input() options: CustomOption[];
  @Output() params: any[] = [];

  ngOnInit(): void {
  }

  change(changed): void {
    this.params = this.params.filter(value => value.type !== changed.type);
    // this.params = [...this.params, changed];
    this.params.push(changed)
    console.log(this.params);
  }
}
