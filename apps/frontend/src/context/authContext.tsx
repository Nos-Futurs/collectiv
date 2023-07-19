import {
  Accessor,
  JSX,
  Setter,
  createContext,
  createSignal,
  useContext,
} from "solid-js";
import { User } from "./User";

interface AuthProviderProps {
  children: JSX.Element;
}

type TypeUserContext = [
  Accessor<
    | {
        user: User;
        accessToken: string;
      }
    | undefined
  >,
  Setter<
    {
        user: User;
        accessToken: string;
      }
    | undefined
  >
];
const [currentUser, setCurrentUser] = createSignal<
  | {
      user: User;
      accessToken: string;
    }
  | undefined
>(undefined);
export const UserContext = createContext<TypeUserContext>([
  currentUser,
  setCurrentUser,
]);

export function useUserContext(): TypeUserContext {
  return useContext(UserContext);
}

export function UserProvider(props: AuthProviderProps): JSX.Element {
  const [currentUser, setCurrentUser] = createSignal<
    | {
        user: User;
        accessToken: string;
      }
    | undefined
  >(undefined);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </UserContext.Provider>
  );
}
