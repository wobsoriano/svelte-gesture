import { DragGesture, HoverGesture, MoveGesture, PinchGesture, ScrollGesture, WheelGesture } from '@use-gesture/vanilla'

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

export function move(node: HTMLElement) {
  const gesture = new MoveGesture(node, (payload) => {
    node.dispatchEvent(new CustomEvent('move', {
      detail: payload,
    }))
  })

  return {
    destroy() {
      gesture.destroy()
    },
  }
}

export function hover(node: HTMLElement) {
  const gesture = new HoverGesture(node, (payload) => {
    node.dispatchEvent(new CustomEvent('hover', {
      detail: payload,
    }))
  })

  return {
    destroy() {
      gesture.destroy()
    },
  }
}

export function scroll(node: HTMLElement) {
  const gesture = new ScrollGesture(node, (payload) => {
    node.dispatchEvent(new CustomEvent('scroll', {
      detail: payload,
    }))
  })

  return {
    destroy() {
      gesture.destroy()
    },
  }
}

export function wheel(node: HTMLElement) {
  const gesture = new WheelGesture(node, (payload) => {
    node.dispatchEvent(new CustomEvent('wheel', {
      detail: payload,
    }))
  })

  return {
    destroy() {
      gesture.destroy()
    },
  }
}

export function pinch(node: HTMLElement) {
  const gesture = new PinchGesture(node, (payload) => {
    node.dispatchEvent(new CustomEvent('pinch', {
      detail: payload,
    }))
  })

  return {
    destroy() {
      gesture.destroy()
    },
  }
}
