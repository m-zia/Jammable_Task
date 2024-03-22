import PromotedCard from './PromotedCard';

const Promoted = () => {
    return (

        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />

                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />

            </div>

        </>


    );
};

export default Promoted;
