import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/navbar.jsx"

export const meta: MetaFunction = () => {
  return [
    { title: "v01d.dev" },
    { name: "landing-page", content: "Welcome to v01d.dev!" },
  ];
};

export default function Index() {
  return (
      <>
      <NavBar />
      <h1>Hello</h1>
      </>
  );
}
