import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

import { Setting } from './../../api/Setting';
import { Property } from './../../api/Property';

@Component({
    selector: 'as4-runtime-setting',
    templateUrl: 'runtimesetting.component.html',
    styleUrls: ['./runtimesetting.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RuntimeSettingComponent {
    @Input() public control: FormControl;
    @Input() public runtimeType: Property;
    @Input() public value: any;
    @Input() public labelSize: string;
    @Input() public controlSize: string;
    @Output() public onChange = new EventEmitter<Setting>();
    public timeSpanMask = [/[0-9]/, /[0-9]/, ':', /[0-5]/, /[0-9]/, ':', /[0-5]/, /[0-9]/];
    private _regex = new RegExp(/[0-9]_/g);
    private _initial = true;
    public hasParameters(): boolean {
        let array = (<FormArray>this.control.get('attributes')!).controls;
        if (!!!array) {
            return false;
        }
        return array.length > 0;
    }
    public pipe = (input: string) => {
        if (!this._initial) {
            return input;
        }
        this._initial = false;
        let result = '';
        if (!!!input) {
            return input;
        }
        input
            .split(':')
            .forEach((splitted) => {
                // Check if the splitted value contains <number>_
                if (splitted === '__') {
                    result = this.append(result, '00');
                } else if (this._regex.test(splitted)) {
                    result = this.append(result, '0' + splitted[0]);
                } else {
                    result = this.append(result, splitted);
                }
            });
        return result;
    }
    private append(input: string, append: string): string {
        if (!!!input) {
            return append;
        }
        return `${input}:${append}`;
    }
}
