declare type GestureEvent = import('svelte-gesture').GestureEvent;

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		ondrag?: (event: CustomEvent<GestureEvent<'drag'>> & { target: EventTarget & T }) => void;
		onpinch?: (event: CustomEvent<GestureEvent<'pinch'>> & { target: EventTarget & T }) => void;
		onmove?: (event: CustomEvent<GestureEvent<'move'>> & { target: EventTarget & T }) => void;
		onscroll?: (event: CustomEvent<GestureEvent<'scroll'>> & { target: EventTarget & T }) => void;
		onhover?: (event: CustomEvent<GestureEvent<'hover'>> & { target: EventTarget & T }) => void;
		onwheel?: (event: CustomEvent<GestureEvent<'wheel'>> & { target: EventTarget & T }) => void;
	}
}
