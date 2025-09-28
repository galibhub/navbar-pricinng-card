import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const PricingFeature = ({feature,index}) => {
    return (
        <p className="flex items-center mt-4"><CircleCheckBig className="mr-2 "></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;