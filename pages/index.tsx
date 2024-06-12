import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>The Porró 2024 November 1st - 3rd</h1>
      <p>
        Go to the
        <Link href="/about">
          <p>About Us</p>
        </Link>
        page to learn more about us.
      </p>
    </>
  );
}
