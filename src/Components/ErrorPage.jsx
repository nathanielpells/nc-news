export default function ErrorPage({ error }) {
  return (
    <main>
      <h2>
        {error.data.msg}: {error.status}
      </h2>
      <h3>You may have mistyped the URL, please check and try again.</h3>
    </main>
  );
}
