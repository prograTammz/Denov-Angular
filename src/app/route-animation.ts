import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
 } from '@angular/animations';
 export const FadeAnimation =
 trigger('FadeAnimation', [
     transition('* => *', [
       query(
         ':enter',
         [style({ opacity: 0 }), animate('0.2s ease-in-out', style({ opacity: 1 }))],
         { optional: true }
       ),
       query(
         ':leave',
          [style({ opacity: 1 }), animate('0.2s ease-in-out', style({ opacity: 0 }))],
         { optional: true }
       )
     ])
   ]);
