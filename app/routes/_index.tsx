import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/navbar.tsx"
import TypeWriter from "~/components/typewriter.tsx"
import Logo from "~/assets/logo.svg"

export const meta: MetaFunction = () => {
  return [
    { title: "v01d.dev" },
    { name: "landing-page", content: "Welcome to v01d.dev!" },
  ];
};

function Home() {
    return (
        <section className="Home">
            <img className="home_logo" src={Logo} alt="v01d's logo" />
            <TypeWriter />
        </section>
    )
}

function Aboutme() {
    return (
        <section className="Aboutme">
            <h2>About me</h2>
            <p>I am a highschool student with a strong affinity for electronics and programming.</p>
        </section>
    )
}

function Work() {
    return (
        <section className="Work">
            <h3>You can find my work on </h3>
            <a href="https://github.com/V01Ddev" target="_blank">github</a>
        </section>
    )
}

export default function Index() {
  return (
      <>
      <NavBar />
      <Home />
      <Aboutme />
      <Work />
      </>
  );
}
