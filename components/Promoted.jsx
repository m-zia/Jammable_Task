import PromotedCard from './PromotedCard';
import HorizontalCard from './HorizontalCard';

const Promoted = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:hidden">
                <PromotedCard title="Drizzy" text="45K uses · 1K likes" image="/promoted/drake2.png" alt="Drake" />
                <PromotedCard title="Ariana" text="45K uses · 1K likes" image="/promoted/arianna.jpg" alt="Ariana"/>
                <PromotedCard title="Ariana" text="45K uses · 1K likes" image="/promoted/arianna.jpg" alt="Ariana"/>
                <PromotedCard title="Ariana" text="45K uses · 1K likes" image="/promoted/arianna.jpg" alt="Ariana"/>
                <PromotedCard title="Juice" text="45K uses · 1K likes" image="/promoted/juice.png" alt="Juice"/>
                <PromotedCard title="Plankton" text="45K uses · 1K likes" image="/promoted/plankton.png" alt="Plankton"/>
            </div>

            <div className="grid-cols-4 grid-rows-1 gap-4 grid lg-max:hidden">
                <div className="col-span-3">
                    <HorizontalCard />
                </div>

                <div className="col-start-4">
                    <PromotedCard title="Ariana" text="45K uses · 1K likes" image="/promoted/arianna.jpg" alt="Ariana" />
                </div>

                <div className="row-start-2">
                    <PromotedCard title="Ariana" text="45K uses · 1K likes" image="/promoted/arianna.jpg" alt="Ariana"/>
                </div>

                <div className="row-start-2">
                    <PromotedCard title="Ariana" text="45K uses · 1K likes" image="/promoted/arianna.jpg" alt="Ariana"/>
                </div>

                <div className="row-start-2">
                    <PromotedCard title="Juice" text="45K uses · 1K likes" image="/promoted/juice.png" alt="Juice"/>
                </div>

                <div className="row-start-2">
                    <PromotedCard title="Plankton" text="45K uses · 1K likes" image="/promoted/plankton.png" alt="Plankton"/>
                </div>
            </div>

        </>
    );
};

export default Promoted;
