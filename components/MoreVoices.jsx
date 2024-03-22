import Card from './Card';

function MoreVoices() {
  return (
    <>

    <div className='capitalize'>
      <p className='text-6xl leading-10 pb-5 pt-9'>More Voices</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />

      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />

      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />

      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
      <Card title="Card 1" text="Some content" image="/Goku.png" />
    </div>
</>
  )
}

export default MoreVoices