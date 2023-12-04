import {
  JSX,
  createContext,
  useContext,
} from "solid-js";
import { User } from "@collectiv/db-entities/frontend";
import { SetStoreFunction, createStore } from "solid-js/store";

interface UserProviderProps {
  children: JSX.Element;
}

interface UserProviderProps {
  children: JSX.Element;
}

type TypeUserContext = [
  Record<"user", User | undefined>,
  SetStoreFunction<Record<"user", User | undefined>>
];
const [currentUser, setCurrentUser] = createStore<
  Record<"user", User | undefined>
>({ user: undefined });

export const UserContext = createContext<TypeUserContext>([
  currentUser,
  setCurrentUser,
]);

export function useUserContext(): TypeUserContext {
  return useContext(UserContext);
}

export function UserProvider(props: UserProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = createStore<
    Record<"user", User | undefined>
  >({ user: undefined });

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
