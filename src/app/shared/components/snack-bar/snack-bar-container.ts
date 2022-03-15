import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import {
    Component,
    ElementRef,
    NgZone,
    OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { SnackBarConfig } from './snack-bar-config';

export interface _SnackBarContainer {
    snackBarConfig: SnackBarConfig;
    readonly _onExit: Subject<any>;
    readonly _onEnter: Subject<any>;
    enter: () => void;
    exit: () => void;
}

@Component({
    selector: 'snack-bar-container',
    templateUrl: 'snack-bar-container.html',
    styleUrls: ['snack-bar-container.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('state', [
            state('void, hidden', style({
                transform: 'scale(0.8)',
                opacity: 0,
            })),
            state('visible', style({
                transform: 'scale(1)',
                opacity: 1,
            })),
            transition('* => visible', animate('150ms cubic-bezier(0, 0, 0.2, 1)')),
            transition('* => void, * => hidden', animate('75ms cubic-bezier(0.4, 0.0, 1, 1)', style({
                opacity: 0
            }))),
        ])
    ],
    host: {
        'class': 'snack-bar-container',
        '[@state]': '_animationState',
        '(@state.done)': 'onAnimationEnd($event)'
    }
})
export class SnackBarContainer implements OnDestroy, _SnackBarContainer {

    message: string = '';

    private _destroyed = false;

    readonly _onExit: Subject<void> = new Subject();

    readonly _onEnter: Subject<void> = new Subject();

    _animationState: 'void' | 'visible' | 'hidden' = 'void';

    constructor(
        private _ngZone: NgZone,
        private _elementRef: ElementRef<HTMLElement>,
        public snackBarConfig: SnackBarConfig) {
        this.message = snackBarConfig.data?.message;
    }

    onAnimationEnd(event: AnimationEvent) {
        const { fromState, toState } = event;

        if ((toState === 'void' && fromState !== 'void') || toState === 'hidden') {
            this._completeExit();
        }

        if (toState === 'visible') {
            const onEnter = this._onEnter;

            this._ngZone.run(() => {
                onEnter.next();
                onEnter.complete();
            });
        }
    }

    enter(): void {
        if (!this._destroyed) {
            this._animationState = 'visible';
            this._applySnackBarClasses();
        }
    }

    exit(): void {
        this._animationState = 'hidden';
    }

    ngOnDestroy() {
        this._destroyed = true;
        this._completeExit();
    }

    private _completeExit() {
        this._ngZone.onMicrotaskEmpty.pipe(take(1)).subscribe(() => {
            this._onExit.next();
            this._onExit.complete();
        });
    }

    private _applySnackBarClasses() {
        const element: HTMLElement = this._elementRef.nativeElement;
        const type = this.snackBarConfig.type;

        switch (type) {
            case 'danger':
                element.classList.add('snack-bar-danger');
                break;
            case 'success':
                element.classList.add('snack-bar-success');
                break;
            case 'warning':
                element.classList.add('snack-bar-warning');
                break;
            default:
                element.classList.add('snack-bar-info');
                break;
        }
    }
}
