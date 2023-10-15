import { createContext as createReactContext, useContext as useReactContext } from "react";

export const createContext = <T = unknown>(providerName: string, defaultValues?: T | undefined) => {
  const Context = createReactContext(defaultValues);

  const useContext = () => {
    const ctx = useReactContext(Context);

    if (!ctx) {
      throw new Error(`useContext hook must be used within a ${providerName} provider`);
    }
    return ctx;
  };

  return [Context, useContext] as const;
};
