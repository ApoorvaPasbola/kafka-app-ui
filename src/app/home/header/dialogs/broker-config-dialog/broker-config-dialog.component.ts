import {Component} from '@angular/core';
import {HeaderService} from "../../header.service";
import {Deserializer} from "../../../../models/kafkaconfig";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-broker-config-dialog',
  templateUrl: './broker-config-dialog.component.html',
  styleUrls: ['./broker-config-dialog.component.scss']
})
export class BrokerConfigDialogComponent {

  config: FormGroup = new FormGroup({
    id: new FormControl<number>(0),
    configName: new FormControl<string>('local'),
    brokers: new FormControl<string>('localhost:9092'),
    ssl: new FormControl<boolean>(false)
  })
  constructor(private _configService: HeaderService) {
    this._configService.getDefaultConfig().subscribe(value => {
      this.config.setValue(value)
    });
  }

  saveConfig() {
    this._configService.saveConfig(this.config.value)
    this._configService.openSettings = false;
  }


}
