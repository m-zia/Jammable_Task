import GenresBadge from "./GenresBadge";

function Genres() {
  return (
    <>
      <div className="flex gap-2 pt-4 pb-9 flex-wrap sm:justify-center">
        <GenresBadge image="/genres/weekend.png" text="Music" altText="Picture of the Weekend" />
        <GenresBadge image="/genres/sponge.png" text="Cartoon" altText="Picture of SpongeBob"/>
        <GenresBadge image="/genres/vegeta.png" text="Anime" altText="Picture of Vegeta" />
        <GenresBadge image="/genres/sonic.png" text="Gaming" altText="Picture of Sonic" />
        <GenresBadge image="/genres/german.png" text="German" altText="Picture of a German actor" />
        <GenresBadge image="/genres/Korean.png" text="Korean" altText="Picture of a Korean actor" />
        <GenresBadge image="/genres/macron.png" text="French" altText="Picture of President Macron" />
        <GenresBadge image="/genres/trump.png" text="Public Figure" altText="Picture of President Trump" />
      </div>
    </>
  )
}

export default Genres