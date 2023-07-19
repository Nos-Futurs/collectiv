import {
  Accessor,
  JSX,
  Setter,
  createContext,
  createResource,
  createSignal,
  useContext,
} from "solid-js";
import { User } from "shared-types-collectiv";
import { getMe } from "../api/userApi";

interface AuthProviderProps {
  children: JSX.Element;
}

type TypeUserContext = User | undefined;
const currentUser: User | undefined = undefined;
export const UserContext = createContext<TypeUserContext>(currentUser);

export function useUserContext(): TypeUserContext {
  return useContext(UserContext);
}

export function UserProvider(props: AuthProviderProps): JSX.Element {
  const [currentUser] = createResource(getMe);

  return (
    <UserContext.Provider value={currentUser()}>
      {props.children}
    </UserContext.Provider>
  );
}
