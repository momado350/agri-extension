import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">

            <div className="footer__nav">
                <div className="footer__option">
                    <span className="footer__optionOne">Annual Reports</span>
                    <span className="footer__optionTwo">Field Reports</span>
                    <span className="footer__optionTwo">Office Reports</span>
                    <span className="footer__optionTwo">Inter-Departmental Reports</span>
                </div>

                <div className="footer__option">
                    <span className="footer__optionOne">Important Links</span>
                    <span className="footer__optionTwo">FAO Website</span>
                    <span className="footer__optionTwo">World Bank</span>
                    <span className="footer__optionTwo">Technology</span>
                    <span className="footer__optionTwo">Local Knowlodge</span>
                    <span className="footer__optionTwo">Motivation</span>
                </div>

                

            </div>
            
        </div>
    )
}

export default Footer
