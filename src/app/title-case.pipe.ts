import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;


    let preps = [
      'of', 'the'
    ];

    let words = value.split(' ');
    console.log(words);

    for (let i = 0; i < words.length; i++) {
      if (i> 0 && preps.includes(words[i].toLowerCase()) ) {
        console.log(words[i] + `is a prep.` )
        words[i] = words[i].toLowerCase();
        } else { words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase()};
      }
      return words.join(' ');
    }

}
