import { useState } from "react";
import { useLocalStorage } from "react-use";
import { Icon, Card, DateSelect } from "~/components";
import { Navigate } from "react-router-dom";
import { format, formatISO, setDate } from "date-fns";

export const Profile = () => {
  const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)));
  const [auth, setAuth] = useLocalStorage("auth", {});

  const logout = () => setAuth({});

  if (!auth?.user?.id) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <header className="bg-red-500 text-white ">
        <div className="container max-w-3xl p-4 flex justify-between">
          <img
            src="../public/logo/logo-fundo-vermelho.svg"
            className="w-28 md:w-40"
          ></img>
        </div>
      </header>
      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container max-w-3xl space-y-2 p-4">
            <a href="/dashboard">
              <Icon name="back" className="w-10" />
            </a>
            <h3 className="text-2xl font-bold">Eduardo Gobbato</h3>
          </div>
        </section>

        <section id="content" className="p-4 container max-w-3xl space-y-4">
          <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

          <DateSelect currentDate={currentDate} onChange={setDate} />

          <div className="space-y-4">
            <Card
              timeA={{ slug: "sui" }}
              timeB={{ slug: "cam" }}
              match={{ time: "7:00" }}
            />
            <Card
              timeA={{ slug: "uru" }}
              timeB={{ slug: "cor" }}
              match={{ time: "7:00" }}
            />
            <Card
              timeA={{ slug: "por" }}
              timeB={{ slug: "gan" }}
              match={{ time: "7:00" }}
            />
          </div>
        </section>
      </main>
    </>
  );
};
