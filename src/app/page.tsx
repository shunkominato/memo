import Memo from "./memo";

export default function Home() {
  const array = Array.from({ length: 1000 }, (_, index) => index);
  return (
    <>
      memoあり
      {array.map((i) => {
        return <Memo key={i} />;
      })}
    </>
  );
}
