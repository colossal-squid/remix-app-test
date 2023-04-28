import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
    return json({
        joke: await db.joke.findFirst({
           where: {
            id: params.jokeId
           }
          }),
    });
};

export default function JokesByIdRoute() {
    const data = useLoaderData<typeof loader>();
    return (
      <div>
        <p>Here's a joke loaded:</p>
        <p>
         { data.joke?.content } by {data.joke?.name}
        </p>
      </div>
    );
  }