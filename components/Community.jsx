import Card from './Card';
import CommunityTitle from '../components/CommunityTitle'

function Community() {
  return (
    <>
      <CommunityTitle />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card title="Card 1" text="Some content" image="/Goku.png" />
        <Card title="Card 1" text="Some content" image="/Goku.png" />
        <Card title="Card 1" text="Some content" image="/Goku.png" />
        <Card title="Card 1" text="Some content" image="/Goku.png" />
      </div>
    </>

  )
}

export default Community