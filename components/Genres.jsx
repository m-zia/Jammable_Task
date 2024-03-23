import GenresBadge from "./GenresBadge";

function Genres() {
  return (
    <>
      <div className="flex gap-2 pt-4 pb-9 flex-wrap sm:justify-center">
        <GenresBadge image="/genres/weekend.png" text="Music" />
        <GenresBadge image="/genres/sponge.png" text="Cartoon" />
        <GenresBadge image="/genres/vegeta.png" text="Anime" />
        <GenresBadge image="/genres/sonic.png" text="Gaming" />
        <GenresBadge image="/genres/german.png" text="German" />
        <GenresBadge image="/genres/Korean.png" text="Korean" />
        <GenresBadge image="/genres/macron.png" text="French" />
        <GenresBadge image="/genres/trump.png" text="Public Figure" />
      </div>
    </>
  )
}

export default Genres