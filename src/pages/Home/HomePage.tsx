import React, { useEffect, useState } from "react";
import { Loader, Pagnation, RenderJokes } from "../../components";
import { HomePageType } from "./types";

function HomePage({}: HomePageType) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPages] = useState(1);
  const [nextPage, setNextPage] = useState(1);
  const [perviousPage, setPerviousPages] = useState(1);

  const [jokes, setJokes] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  const fetchJokes = (page: number) => {
    setLoading(true);
    fetch(`https://icanasdasdadhazdadjoke.com/search?page=${page}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJokes(res.results);

        setPage(res.current_page);
        setTotalPages(res.total_pages);
        setNextPage(res.next_page);
        setPerviousPages(res.previous_page);
      })
      .catch(handleError)
      .finally(() => {
        setLoading(false);
      });
  };

  const handleError = (error: any) => {
    console.log(error);
    setJokes([]);

    setError(error.message);
  };

  const handlePage = (page: number) => {
    fetchJokes(page);
  };

  useEffect(() => {
    fetchJokes(page);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!!isError) {
    return <div>{isError}</div>;
  }

  return (
    <div className="App">
      <RenderJokes jokes={jokes} />

      <Pagnation
        page={page}
        onChange={handlePage}
        totalPage={totalPage}
        nextPage={nextPage}
        perviousPage={perviousPage}
      />
    </div>
  );
}

export default HomePage;
