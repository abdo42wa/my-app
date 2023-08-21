import React from 'react';
import MagicScroll from 'magic-scroll';

const Page = () => {

    return (
        <div className="page">
            <MagicScroll>
                <div className="centered-text">Page 1</div>
                <div className="centered-text">Page 2</div>
                <div className="centered-text">Page 3</div>
                <div className="centered-text">Page 4</div>
                <div className="centered-text">Page 5</div>
                <div className="centered-text">Page 6</div>
                <div className="centered-text">Page 7</div>

            </MagicScroll>
        </div>
    );
};

export default Page;