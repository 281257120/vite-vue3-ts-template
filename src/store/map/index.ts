import { Pinia } from 'pinia'
import { useLayerStore } from './layer'
export const mapStore = {
  useLayerStore: (pinia?: Pinia) => useLayerStore(pinia)
}
