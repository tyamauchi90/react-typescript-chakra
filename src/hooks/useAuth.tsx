import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth = () => {
  const navigation = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);
  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (!res.data || !id) {
            setLoading(false);
            showMessage({ title: "ユーザーが見つかりません", status: "error" });
          } else {
            setLoginUser(res.data);
            showMessage({ title: "ログインしました", status: "success" });
            setLoading(false);
            navigation("/home");
          }
        })
        .catch(() => {
          setLoading(false);
          showMessage({ title: "ログインができません", status: "error" });
        });
    },
    [navigation, showMessage, setLoginUser]
  );
  return { login, loading };
};
