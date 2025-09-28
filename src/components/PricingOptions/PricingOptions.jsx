import React,{use} from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingData=use(pricingPromise)
    
    return (
        <div className="mt-4">
            <h2 className="text-5xl text-center mb-3">Get Our Membership</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
             
             {
                pricingData.map(pricing=> <PricingCard key={pricing.id}pricing={pricing}></PricingCard>)
             }

            </div>
        </div>
    );
};

export default PricingOptions;