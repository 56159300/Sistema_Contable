import { animate, keyframes, query, state, style, transition, trigger } from '@angular/animations';

// Animación para notificaciones
export const Animations = {
	flyInOut: trigger('flyInOut', [
		state(
			'inactive',
			style({
				opacity: 0,
			})
		),
		transition(
			'inactive => active',
			animate(
				'400ms ease-out',
				keyframes([
					style({
						transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
						opacity: 0,
					}),
					style({
						transform: 'skewX(20deg)',
						opacity: 1,
					}),
					style({
						transform: 'skewX(-5deg)',
						opacity: 1,
					}),
					style({
						transform: 'none',
						opacity: 1,
					}),
				])
			)
		),
		transition(
			'active => removed',
			animate(
				'400ms ease-out',
				keyframes([
					style({
						opacity: 1,
					}),
					style({
						transform: 'translate3d(100%, 0, 0) skewX(30deg)',
						opacity: 0,
					}),
				])
			)
		),
	]),
};

// Animación para transiciones con padding
export const fadeAnimation = trigger('fadeAnimation', [
	transition('* <=> *', [
		query(
			':enter, :leave',
			[
				style({
					position: 'absolute',
					left: 0,
					width: '100%',
					opacity: 0,
					'padding-left': '15px',
					'padding-right': '15px',
				}),
			],
			{ optional: true }
		),
		query(':enter', [animate('400ms linear', style({ opacity: 1 }))], { optional: true }),
	]),
]);

// Animación para transiciones sin padding
export const fadeAnimationNoPaddings = trigger('fadeAnimationNoPaddings', [
	transition('* <=> *', [
		query(
			':enter, :leave',
			[
				style({
					position: 'absolute',
					left: 0,
					width: '100%',
					opacity: 0,
				}),
			],
			{ optional: true }
		),
		query(':enter', [animate('400ms linear', style({ opacity: 1 }))], { optional: true }),
	]),
]);
