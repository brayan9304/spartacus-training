import { Injectable } from '@angular/core';
import { TcCartFacade } from '../../root';
import { StateWithCart, TcCartActions } from '../store';
import { Store } from '@ngrx/store';
import { OrderEntry, UserIdService } from '@spartacus/core';

@Injectable()
export class TcCartService implements TcCartFacade {
  constructor(protected store: Store<StateWithCart>, protected userIdService: UserIdService) {
  }

  saveManyForLater(products: OrderEntry[]): void {
    this.userIdService.takeUserId(true).subscribe(
      (userId) => this.store.dispatch(new TcCartActions.SaveManyForLater({ userId, products })),
      () => {
      },
    );
  }
}
