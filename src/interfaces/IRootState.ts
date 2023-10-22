import { User } from "@/classes/User";

interface IRootState {
  isFirstEntry: boolean;
  isLoading: boolean;
  isAuthorized: boolean;
  isVisibleTheChatsPanel: boolean;
  isVisibleChat: boolean;
  usersList: User[];
  currentUser: User | null;
}

export { IRootState };
