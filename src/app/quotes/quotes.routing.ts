import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

export const QuotesRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component:  ListComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit/:id',
        component: EditComponent
      },
      {
        path: ':id',
        component: DetailComponent
      }
    ]
  }
];
