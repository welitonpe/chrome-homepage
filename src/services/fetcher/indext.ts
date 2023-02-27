import { useEffect, useMemo, useState } from "react";

function Fetcher(resource: string, options: any) {
  const [users, setUsers] = useState<any>();

  const getApiData = async () => {
    const response = await fetch(resource).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return users;
}

export default Fetcher;
