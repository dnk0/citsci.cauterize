import React from 'react'
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from './PageLayout.css';

const PageLayout = ({children}) => (
        <div>
                <Header />
                <div className={"content"}>
                    {children}
                </div>
                <Footer />
        </div>
)

export default PageLayout;
