import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allStudents: any[], searchKey: string, propName: string): any[] {
    const result: any = []
    if (!allStudents || searchKey == '' || propName == '') {
      return allStudents
    }
    allStudents.forEach((student: any) => {
      if (student[propName].trim().toLowerCase().includes(searchKey.toLocaleUpperCase())) {
        result.push(student)
      }
    })
    return result;
  }
}
