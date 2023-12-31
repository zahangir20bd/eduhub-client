import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMyAdmission = () => {
  const [myAdmission, setMyAdmission] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://edu-hub-server-liart.vercel.app/myadmission?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyAdmission(data);
        setLoading(false);
      });
  }, [user?.email]);

  return [myAdmission, loading];
};

export default useMyAdmission;
