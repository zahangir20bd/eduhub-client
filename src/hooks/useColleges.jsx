import { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://edu-hub-server-liart.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setColleges(data);
        setLoading(false);
      });
  }, []);

  return [colleges, loading];
};

export default useColleges;
