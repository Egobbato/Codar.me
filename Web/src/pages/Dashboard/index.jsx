import axios from "axios";
import { Navigate } from "react-router-dom";
import { useLocalStorage, useAsyncFn } from "react-use";
import { Icon, Card, DateSelect } from "~/components";
import { format, formatISO, setDate } from "date-fns";
import { useState } from "react";
import { useEffect } from "react";

export const Dashboard = () => {
  const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)));
  const [auth] = useLocalStorage("auth", {});

  const [{ value: user, loading, error }, fetchHunches] = useAsyncFn(
    async () => {
      const res = await axios({
        method: "get",
        baseURL: "http://localhost:3000",
        url: `/${auth.user.username}`,
      });

      const hunches = res.data.hunches.reduce((acc, hunch) => {
        acc[hunch.gameId] = hunch;
        return acc;
      }, {});

      return {
        ...res.data,
        hunches,
      };
    }
  );

  const [games, fetchGames] = useAsyncFn(async (params) => {
    const res = await axios({
      method: "get",
      baseURL: "http://localhost:3000",
      url: "/games",
      params,
    });

    return res.data;
  });

  const isLoading = games.loading || loading;
  const hasError = games.error || error;
  const isDone = !isLoading && !hasError;

  useEffect(() => {
    fetchHunches();
  }, []);

  useEffect(() => {
    fetchGames({ gameTime: currentDate });
  }, [currentDate]);

  if (!auth?.user?.id) {
    return <Navigate to="/" replace={true}></Navigate>;
  }
  return (
    <>
      <header className="bg-red-500 text-white ">
        <div className="container max-w-3xl p-4 flex justify-between">
          <img
            src="../public/logo/logo-fundo-vermelho.svg"
            className="w-28 md:w-40"
          ></img>
          <a href={`/${auth?.user?.username}`}>
            <Icon name="profile" className="w-10" />
          </a>
        </div>
      </header>
      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <span>Olá Eduardo</span>
            <h3 className="text-2xl font-bold">Qual o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="p-4 container max-w-3xl space-y-4">
          <DateSelect currentDate={currentDate} onChange={setDate} />

          <div className="space-y-4">
            {isLoading && "Carregando jogos..."}
            {hasError && "Ops, algo deu errado!"}
            {isDone &&
              games.value?.map((game) => (
                <Card
                  key={game.id}
                  gameId={game.id}
                  homeTeam={game.homeTeam}
                  awayTeam={game.awayTeam}
                  gameTime={format(new Date(game.gameTime), "H:mm")}
                  homeTeamScore={user?.hunches?.[game.id]?.homeTeamScore || ""}
                  awayTeamScore={user?.hunches?.[game.id]?.homeTeamScore || ""}
                />
              ))}
          </div>
        </section>
      </main>
    </>
  );
};
