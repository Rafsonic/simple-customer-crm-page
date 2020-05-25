import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(html: any): SafeHtml {
    if (!html) {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
