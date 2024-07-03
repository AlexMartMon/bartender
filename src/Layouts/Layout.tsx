import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Modal from "../Components/Modal";
import { useEffect } from "react";
import { useAppStore } from "../Stores/useAppStore";
import Notification from "../Components/Notification";

export default function Layout() {
  const loadFromStorage = useAppStore((state) => state.loadFromStorage)
  useEffect(() => {
    loadFromStorage()
  }, [])

  return (
    <>
      <Header />
      <main className="container mx-auto py-16">
        <Outlet />
      </main>

      <Modal />
      <Notification />
    </>
  );
}
