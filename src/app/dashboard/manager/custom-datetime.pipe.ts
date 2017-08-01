import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/


@Pipe({
    name: 'CustomDateTime'
})
export class CustomDateTime implements PipeTransform {
    transform(value: string, format: string): string {
            let momentDate = moment(new Date(value));        
            if (momentDate.isValid()){
                // console.log("original value: ");
                // console.log(value);
                // console.log("return value: ");
                // console.log(momentDate.utc().format(format));
                return momentDate.format(format);
            }
            else{
                return value;
            }
        }
    }