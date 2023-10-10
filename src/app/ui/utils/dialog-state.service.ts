import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DialogStateService {
  dialogClose = new BehaviorSubject(false);
}
