import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, arg: any): any {
    const result = [];
    for ( const item of items){
      if ( item.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        result.push(item);
      }
    }
    return result
  }

}
