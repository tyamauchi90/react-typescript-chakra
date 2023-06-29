import { useCallback, useState } from "react";
import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    //findメソッドは見つかればuserを返却し、見つからなければundifinedを返す
    // setSelectedUser(targetUser ?? null); ← undifinedが返却されたnullを設定する
    setSelectedUser(targetUser!); //!をつけることでtypescriptの監視を無視する（確実にuserが存在するので今回はよいが、慎重に使用すべき）
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
