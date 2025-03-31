import PlayerRow from "@/components/ranks/PlayerRow";
import RankCard from "@/components/ranks/RankCard";
import PointsCard from "@/components/ranks/PointsCard";
import { useState } from "react";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/liquidity/Header";
import { cn } from "@/lib/utils";
import { Coins, Crown, RotateCcw, Send, Star } from "lucide-react";
import Footer from "@/components/liquidity/Footer";

const Ranks = () => {
  const players = [
    {
      rank: 1,
      name: "Minimal Lion",
      score: "208,048,005",
      trophy: "gold" as const,
    },
    {
      rank: 2,
      name: "Overseas Hippo",
      score: "175,894,305",
      trophy: "silver" as const,
    },
    {
      rank: 3,
      name: "Rare Capybara",
      score: "36,776,688",
      trophy: "bronze" as const,
    },
    { rank: 4, name: "Medieval Llama", score: "35,377,875", trophy: null },
    { rank: 5, name: "Lonely Tiger", score: "27,758,626", trophy: null },
    { rank: 6, name: "Inner Tiger", score: "19,223,625", trophy: null },
    { rank: 7, name: "Outside Bull", score: "17,773,098", trophy: null },
    { rank: 8, name: "Related Bulldog", score: "8,407,376", trophy: null },
    { rank: 9, name: "Gentle Hippo", score: "6,945,563", trophy: null },
    { rank: 10, name: "Human Bear", score: "6,859,210", trophy: null },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col",
        darkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-b from-white to-purple-300 text-foreground"
      )}
    >
      <Header />

      <div
        className={cn(
          "container max-w-5xl px-4 md:px-6 lg:px-8 py-4 md:py-8 mx-auto transition-all duration-300",
          isScrolled ? "mt-[72px]" : ""
        )}
      >
        <div className="w-full max-w-6xl ">
          <div className="mb-8 flex items-center gap-2">
            <div className="w-9 h-9 text-violet-600 flex items-center justify-center">
              <Star />
            </div>
            <h1 className="text-4xl font-semibold text-violet-800">
              Leaderboard
            </h1>
          </div>

          <div className="flex bg-[rgba(255,255,255,0.4)] md:flex-row flex-col rounded-3xl p-3 backdrop-blur-sm gap-4">
            <div className="flex-1 rounded-3xl">
              <div className="flex items-center gap-2 mb-6 pl-4">
                <div className="w-5 h-5 text-violet-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <path
                      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 8V14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 11H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="text-violet-800 font-medium">Top players</h2>
              </div>

              <div className="space-y-1">
                {players.map((player) => (
                  <PlayerRow
                    key={player.rank}
                    rank={player.rank}
                    name={player.name}
                    score={player.score}
                    trophy={player.trophy}
                  />
                ))}
              </div>

              <div className="flex items-center justify-center gap-1 mt-6">
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-violet-600 hover:bg-violet-50">
                  <span className="text-md">«</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-violet-600 hover:bg-violet-50">
                  <span className="text-md">‹</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-violet-600 bg-violet-50 hover:bg-violet-100">
                  <span className="text-sm">1</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-violet-600 hover:bg-violet-50">
                  <span className="text-md">›</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-md text-violet-600 hover:bg-violet-50">
                  <span className="text-md">»</span>
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-6 flex justify-between flex-col rounded-2xl bg-gradient-to-r from-purple-100 to-purple-400">
              <RankCard />

              <div className="">
                <h2 className="text-xl font-medium text-violet-800 pl-5 mb-5">
                  Get points for
                </h2>

                <div className="space-y-4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <PointsCard
                    icon={<RotateCcw />}
                    title="Swap"
                    description="Relayer fee returns as points"
                  />

                  <PointsCard
                    icon={<Send />}
                    title="Referrals"
                    description="More points for each new user"
                  />

                  <PointsCard
                    icon={<Coins />}
                    title="Liquidity"
                    description="Points for each claimed reward"
                  />

                  <PointsCard
                    icon={<Crown />}
                    title="...and more"
                    description="New features coming soon!"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Ranks;
