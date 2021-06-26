'use strict';

import Image from 'next/image'
import pic from '../images/headshot.png'

export const Headshot = () => {
    return (
        <>
            <div>
                <Image className="rounded-full mx-auto inline-flex" src={pic} alt="Robert Woods Head Shot" />
            </div>
        </>
    );
}