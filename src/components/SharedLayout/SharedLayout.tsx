import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Loader } from "../../components";

import s from "./SharedLayout.module.css";

export const SharedLayout = () => {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <div className={s.layout}>
          <header>Header</header>
          <aside>Sidebar</aside>
          <main>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
      ) : (
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      )}
    </>
  );
};
