import PromotedCard from './PromotedCard';
import HorizontalCard from './HorizontalCard';

const Promoted = () => {
    return (

        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:hidden">
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />

                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
            </div>



            <div className="grid-cols-4 grid-rows-1 gap-4 grid lg-max:hidden">
                <div className="col-span-3">
                    <HorizontalCard />
                </div>
                
                <div className="col-start-4">
                    <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                </div>
                
                <div className="row-start-2">
                    <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                </div>
                
                <div className="row-start-2">
                    <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                </div>
                
                <div className="row-start-2">
                    <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                </div>
                
                <div className="row-start-2">
                    <PromotedCard title="Card 1" text="Some content" image="/Goku.png" />
                </div>
            </div>


        </>


    );
};

export default Promoted;
