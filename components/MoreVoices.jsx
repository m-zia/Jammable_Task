import Card from './Card';
import Image from "next/image"
import MoreVoiceTitles from "./MoreVoicesTitle"

function MoreVoices() {
  return (
    <>

    <MoreVoiceTitles />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

      <Card title="Michael" text="45K uses · 1K likes" image="/moreVoices/mj.png" />
      <Card title="Patrick" text="45K uses · 1K likes" image="/moreVoices/patrick.png" />
      <Card title="Taylor" text="45K uses · 1K likes" image="/moreVoices/taylor.png" />
      <Card title="Patrick" text="45K uses · 1K likes" image="/moreVoices/patrick.png" />

      <Card title="Kanye" text="45K uses · 1K likes" image="/moreVoices/kanye.png" />
      <Card title="Weeknd" text="45K uses · 1K likes" image="/moreVoices/weekend.png" />
      <Card title="Justin" text="45K uses · 1K likes" image="/moreVoices/justin.png" />
      <Card title="Weeknd" text="45K uses · 1K likes" image="/moreVoices/weekend.png" />


      <Card title="Michael" text="45K uses · 1K likes" image="/moreVoices/mj.png" />
      <Card title="Patrick" text="45K uses · 1K likes" image="/moreVoices/patrick.png" />
      <Card title="Taylor" text="45K uses · 1K likes" image="/moreVoices/taylor.png" />
      <Card title="Patrick" text="45K uses · 1K likes" image="/moreVoices/patrick.png" />

      <Card title="Kanye" text="45K uses · 1K likes" image="/moreVoices/kanye.png" />
      <Card title="Weeknd" text="45K uses · 1K likes" image="/moreVoices/weekend.png" />
      <Card title="Justin" text="45K uses · 1K likes" image="/moreVoices/justin.png" />
      <Card title="Weeknd" text="45K uses · 1K likes" image="/moreVoices/weekend.png" />
    </div>
</>
  )
}

export default MoreVoices