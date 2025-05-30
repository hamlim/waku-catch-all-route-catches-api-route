import { ClientComponent } from "#/client-component";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h2>Catch All Route matches before API routes</h2>
      <p>
        This is the home page. The below element should show the response from
        the `/api/greet` handler, instead it shows the HTML response from the
        `[...notFound]` route.
      </p>
      <ClientComponent />
    </div>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
