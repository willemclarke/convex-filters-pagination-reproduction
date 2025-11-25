"use client";

import { api } from "@/convex/_generated/api";
import { usePaginatedQuery } from "convex/react";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const term = searchTerm === "" ? undefined : searchTerm;

  const { results: users, isLoading } = usePaginatedQuery(
    api.queries.paginate,
    {
      searchTerm: term,
    },
    { initialNumItems: 10 }
  );

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8 font-sans dark:bg-black">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
          Users
        </h1>

        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 mb-6 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white"
        />

        {isLoading ? (
          <div className="text-center text-zinc-500 dark:text-zinc-400">
            Loading...
          </div>
        ) : (
          <div className="space-y-3">
            {users && users.length > 0 ? (
              users.map((user) => (
                <div
                  key={user._id}
                  className="p-4 bg-white rounded-lg shadow-sm border border-zinc-200 dark:bg-zinc-800 dark:border-zinc-700"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {user.name}
                    </h2>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      Age: {user.age}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-zinc-500 dark:text-zinc-400">
                No users found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
