import { StateCreator } from "zustand";
import { FavoriteSliceType } from "./favoriteSlice";

type Notification = {
  text: string;
  error: boolean;
  show: boolean;
};

const initialState = {
  text: "",
  error: false,
  show: false,
};

export type NotificationSliceType = {
  notification: Notification;
  showNotification: (payload: Pick<Notification, "text" | "error">) => void;
  hideNotification: () => void;
};

export const createNotificationSlice: StateCreator<
  NotificationSliceType & FavoriteSliceType,
  [],
  [],
  NotificationSliceType
> = (set, get) => ({
  notification: initialState,
  showNotification: (payload) => {
    set({
      notification: {
        text: payload.text,
        error: payload.error,
        show: true,
      },
    });
    setTimeout(() => {
        get().hideNotification()
    }, 5000);
  },
  hideNotification: () => {
    set({
      notification: initialState,
    });
  },
});
