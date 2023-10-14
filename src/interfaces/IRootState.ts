import { User } from "@/classes/User";

interface IRootState {
  isLoading: boolean;
  isAuthorized: boolean;
  isVisibleTheChatsPanel: boolean;
  isVisibleChat: boolean;
  usersList: User[];
}

export { IRootState };
