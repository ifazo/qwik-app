import { createContextId } from "@builder.io/qwik";

export const AppContext =
  createContextId <
  {
    user,
    cart,
  } >
  "app.context";
