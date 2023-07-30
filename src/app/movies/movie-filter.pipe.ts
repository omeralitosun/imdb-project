import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(value: any, filterText?: string): any {
    return filterText?value.filter((p:any)=> p.title.toLocaleLowerCase().indexOf(filterText?filterText.toLocaleLowerCase():"")!==-1):value;
  }

}
