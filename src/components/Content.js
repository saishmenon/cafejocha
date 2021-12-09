import React from 'react';
import ImageOne from '../images/img_1.webp';
import ImageTwo from '../images/img_2.webp';

export default function Content() {
    return (
        <div>
            <div className="menu-card">
                <img src={ImageOne} alt="Egge Benedict" className="h-full rounded mb-20 shadow"/>
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Two Guns Espresso</h2>
                    <p className="mb-2">Awakening, delicious and energizing</p>
                    <span>$10.00</span>
                </div>
            </div>

            <div className="menu-card">
                <img src={ImageTwo} alt="Egge Benedict" className="h-full rounded mb-20 shadow"/>
                <div className="center-content">
                    <h2 className="text-2xl mb-2">Jocha Cold Brew</h2>
                    <p className="mb-2">Specialty, cold and refreshing</p>
                    <span>$12.00</span>
                </div>
            </div>
        </div>
    )
}
