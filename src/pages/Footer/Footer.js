import React from 'react';
import { ReactComponent as Vija } from '../../assets/svg/vija.svg';
import { ReactComponent as Hdfc } from '../../assets/svg/hdfc.svg';
import { ReactComponent as Paypal } from '../../assets/svg/paypal.svg';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
                    <div>
                        <div className="card-icons flex justify-center space-x-1 md:justify-start">
                            <div>
                                <Vija />
                            </div>
                            <div>
                                <Hdfc />
                            </div>
                            <div>
                                <Paypal />
                            </div>
                        </div>
                    </div>
                    <div className="self-center">
                        <div className="copyright text-center md:text-right text-textSubdued"><span>Copyright © 2023 Alok </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;