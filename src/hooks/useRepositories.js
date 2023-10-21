import { useEffect, useState } from "react";

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchResponse = async () => {
    return fetch("http://192.168.100.4:5000/api/repositories")
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  const repositoriesNode = repositories
    ? repositories.edges.map((edges) => edges.node)
    : [];

  return { repositories: repositoriesNode };
};

export default useRepositories;
