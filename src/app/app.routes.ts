import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControFlow } from './components/contro-flow/contro-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';
import { GetApi } from './components/get-api/get-api';
import { User } from './components/user/user';
import { ReactiveUser } from './components/reactive-user/reactive-user';
import { PipeEx } from './components/pipe-ex/pipe-ex';

export const routes: Routes = [
    {
        path:'admin',
        component: Admin
    },
    {
        path: 'control-flow',
        component: ControFlow
    },
    {
        path: 'data-binding',
        component: DataBinding
    },
    {
        path: 'signal',
        component: SignalEx
    },
    {
        path: 'Attribute-Directive',
        component: AttDirective
    },
    {
        path: 'get-api',
        component: GetApi
    },
    {
        path: 'users',
        component: User
    },
    {
        path: 'reactive-users',
        component: ReactiveUser
    },
    {
        path: 'pipe',
        component: PipeEx
    }
];
