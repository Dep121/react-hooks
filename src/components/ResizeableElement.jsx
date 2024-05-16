import { useSyncExternalStore } from 'react'

export default function ResizableElement() {
	const subscribe = (listener) => {
		window.addEventListener('resize', listener)
		return () => {
			window.removeEventListener('resize', listener)
		}
	}
	const width =
		useSyncExternalStore(subscribe,
			() => window.innerWidth);
	return (
		<div>
			<p>Size: {width}</p>
		</div>
	)
}
