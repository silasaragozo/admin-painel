import React, { useRef } from "react";
import Animation from "../components/Animation";
import Dashboard from "../components/Dashboard";
import LayoutHome from "../components/LayoutHome";
import { useScreen } from "../providers/Screen";

export default function Home() {
  const { setShowingHome, showingHome } = useScreen();
  return (
    <>
      <LayoutHome>
        {showingHome === "Dashboard" && (
          <Animation>
            <Dashboard />
          </Animation>
        )}
        {showingHome === "Folders" && (
          <>
            <Animation>
              <h1>Folders</h1>
            </Animation>
          </>
        )}
        {showingHome === "Settings" && (
          <>
            <Animation>
              <h1>Settings</h1>
            </Animation>
          </>
        )}
      </LayoutHome>
    </>
  );
}
