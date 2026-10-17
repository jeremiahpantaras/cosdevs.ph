/**
 * Tracks whether the app has finished its first client render.
 *
 * Prerendered pages are already visible when JavaScript arrives, so entrance animations that would hide and
 * then re-reveal visible content must be skipped during that first (hydration) pass. Afterwards, and when the
 * app is rendered entirely on the client (dev server), entrances play normally.
 */
let hydrated = false
export const markHydrated = () => {
  hydrated = true
}
export const isHydrated = () => hydrated
