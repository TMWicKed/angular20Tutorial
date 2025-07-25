import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { ControFlow } from './components/contro-flow/contro-flow';
import { DataBinding } from './components/data-binding/data-binding';
import { SignalEx } from './components/signal-ex/signal-ex';
import { AttDirective } from './components/att-directive/att-directive';

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
    }
];
