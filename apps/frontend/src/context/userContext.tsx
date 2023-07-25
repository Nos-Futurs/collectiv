import { User } from "@collectiv/shared-types";
import {
  Accessor,
  JSX,
  Setter,
  createContext,
  createEffect,
  createResource,
  createSignal,
  useContext,
} from "solid-js";
import { getMe } from "../api/userApi";

interface UserProviderProps {
  children: JSX.Element;
}

type TypeUserContext = [Accessor<User | undefined>, Setter<User | undefined>];
const [currentUser, setCurrentUser] = createSignal<User | undefined>(undefined);

export const UserContext = createContext<TypeUserContext>([
  currentUser,
  setCurrentUser,
]);

export function useUserContext(): TypeUserContext {
  return useContext(UserContext);
}

export function UserProvider(props: UserProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = createSignal<User>();
  return (
    <UserContext.Provider value={[currentUser, setCurrentUser] }>
      {props.children}
    </UserContext.Provider>
  );
}
