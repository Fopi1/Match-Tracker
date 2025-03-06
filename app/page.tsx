"use client";

import axios from 'axios';
import { TriangleAlert } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';

import { Match } from '@/components/match';
import { BASE_URL } from '@/constants';
import { TMatch } from '@/types';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<TMatch[]>([]);
  const [error, setError] = useState("");

  const getMatches = async () => {
    try {
      setError("");
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}/fronttemp`);
      setMatches(response.data.data.matches);
    } catch (error) {
      console.error("Ошибка запроса: ", error);
      setError("Ошибка: не удалось загрузить информацию");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className="mx-auto">
      <div className="p-[42px] flex flex-col gap-5">
        <header className="flex justify-between items-center">
          <h1 className="font-tactic-sans italic text-[32px] leading-[32px] font-black">
            Match Tracker
          </h1>
          <div className="flex items-center gap-3">
            {error && (
              <div className="bg-[#0F1318] flex items-center flex-1 self-stretch rounded-sm">
                <div className="flex items-center gap-1 px-6">
                  <TriangleAlert size={20} color="#EB0237" />
                  <p>{error}</p>
                </div>
              </div>
            )}
            <button
              onClick={getMatches}
              disabled={isLoading}
              className="w-[204px] h-[56px] bg-[#EB0237] rounded-sm cursor-pointer flex items-center justify-center gap-1 hover:brightness-125"
            >
              <p>Обновить</p>
              {isLoading ? <ClipLoader color="#36d7b7" size={20} /> : ""}
            </button>
          </div>
        </header>
        <main className="flex flex-col gap-2">
          {matches.map((match) => (
            <Match key={match.title} match={match} />
          ))}
        </main>
      </div>
    </div>
  );
}
