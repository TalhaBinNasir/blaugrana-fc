"use client";

import { useGetTeamsInfoQuery } from "@/api/football-api";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/components/counter/counterSlice";
import { RootState } from "@/lib/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function page() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  // const { data: teamsInfo, isFetching: fetchingTeamsInfo } =
  //   useGetTeamsInfoQuery({ locale: "UK", club_id: 131 });

  return (
    <div className="h-screen bg-barca-bg-3 bg-cover">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        Increment by 2
      </button>
    </div>
  );
}

export default page;
