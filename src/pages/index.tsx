import React, { useRef } from "react";
import Dashboard from "../components/Dashboard";
import LayoutHome from "../components/LayoutHome";
import { useScreen } from "../providers/Screen";

export default function Home() {
  const { setShowingHome, showingHome } = useScreen();
  return (
    <>
      <LayoutHome>
        {showingHome === "Dashboard" && (
          <>
            <Dashboard/>
          </>
        )}
        {showingHome === "Folders" && (
          <>
            <h1>Folders</h1>
          </>
        )}
        {showingHome === "Settings" && (
          <>
            <h1>Settings</h1>
          </>
        )}
      </LayoutHome>
    </>
  );
}
