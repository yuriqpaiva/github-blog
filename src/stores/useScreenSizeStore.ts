import { create } from 'zustand'

type ScreenSize = {
  width: number
  height: number
}

type ScreenSizeState = {
  screenSize: ScreenSize
  setScreenSize: (size: ScreenSize) => void
}

const useScreenSizeStore = create<ScreenSizeState>((set) => ({
  screenSize: { width: window.innerWidth, height: window.innerHeight },
  setScreenSize: (size) => set({ screenSize: size }),
}))

export default useScreenSizeStore
