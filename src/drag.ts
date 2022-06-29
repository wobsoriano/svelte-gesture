import { DragGesture } from '@use-gesture/vanilla'

export function drag(node: HTMLElement) {
  const gesture = new DragGesture(node, (payload) => {
    node.dispatchEvent(new CustomEvent('drag', {
      detail: payload,
    }))
  })

  return {
    destroy() {
      gesture.destroy()
    },
  }
}
