import type { View } from "../types";

export const API_BASE_URL = "";
export const MAX_CART_ITEMS = 10;
export const CATEGORIES = ["All", "women", "men", "kids"] as const;

export const UI_CURRENT_VIEW: Record<View, View> = {
  home: "home",
  cart: "cart",
};
