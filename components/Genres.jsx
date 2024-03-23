import Image from "next/image";
import GenresBadge from "./GenresBadge";

function Genres() {
  return (

    <>
      <div className="flex gap-2 pt-4 pb-9 flex-wrap sm:justify-center">

      
      
      <GenresBadge image="/Goku.png" text="Music"/>

      <GenresBadge image="/Goku.png" text="Cartoon"/>
      <GenresBadge image="/Goku.png" text="Anime"/>
      <GenresBadge image="/Goku.png" text="Gaming"/>
      <GenresBadge image="/Goku.png" text="German"/>
      <GenresBadge image="/Goku.png" text="Korean"/>

      <GenresBadge image="/Goku.png" text="French"/>

      <GenresBadge image="/Goku.png" text="Public Figure"/>


      </div>
    </>





  )
}

export default Genres