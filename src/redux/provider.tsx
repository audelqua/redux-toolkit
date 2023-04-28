"use client";

import { store, persistor } from "./store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { createWrapper } from 'next-redux-wrapper';

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}><PersistGate loading={null} persistor={persistor}>{children}</PersistGate></Provider>;
}


