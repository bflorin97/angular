import {Component, OnInit} from '@angular/core';
import {CustomOption} from '../components/mselector/Models';
import {ProviderService} from '../components/mselector/Provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'multi-selector';
  options: CustomOption[] = [];
  report = 1;

  constructor(private provider: ProviderService) {
  }

  ngOnInit(): void {
    this.options = this.provider.provideOptions(1);
  }

  increment(): void {
    this.report = (this.report + 1) % 3 + 1;
    console.log(this.report)
    this.options = this.provider.provideOptions(this.report);
  }

  getValues(): void {
    console.log();
  }
}
