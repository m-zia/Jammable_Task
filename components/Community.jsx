
import CommunityTitle from '../components/CommunityTitle'

import CommunityCard from '../components/CommunityCard'


function Community() {
  return (
    <>
      <CommunityTitle />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CommunityCard title={"Elvis"} text={"45K uses · 1K likes"} image={"/Goku.png"}  />
        <CommunityCard title={"Minecraft Villager"} text={"45K uses · 1K likes"} image={"/Goku.png"}  />
        <CommunityCard title={"Hatsune Miku"} text={"45K uses · 1K likes"} image={"/Goku.png"}  />
        <CommunityCard title={"Elvis"} text={"45K uses · 1K likes"} image={"/Goku.png"}  />
      </div>

    </>

  )
}

export default Community