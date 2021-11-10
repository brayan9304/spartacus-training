import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, arg: any, searchType: string): any {
    const result = [];
    if (searchType == "detail"){
      for ( const item of items){
        if ( item.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || item.summary.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          result.push(item);
        }
      }
    }else if(searchType == "list"){
      for ( const item of items){
        if ( item.name.toLowerCase().indexOf(arg.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
          result.push(item);
        }
      }
    }
    return result
  }

}
