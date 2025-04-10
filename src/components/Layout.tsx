import { Outlet } from "react-router";
import ResponsiveNavbar from "./ResponsiveNavbar";

export function Layout() {
  return (
    <>
      <ResponsiveNavbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
