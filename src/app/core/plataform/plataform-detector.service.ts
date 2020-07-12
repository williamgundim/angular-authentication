import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {

  constructor(@Inject(PLATFORM_ID) private plataformId: string) {

  }

  /**
   * isPlatformBrowser
   * @description Metodo para retornar se esta executando em um browse
   */
  isPlatformBrowser(){
    return isPlatformBrowser(this.plataformId);
  }

}
