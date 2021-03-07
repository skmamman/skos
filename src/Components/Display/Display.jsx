import React from 'react';
import Typical from 'react-typical';
import 'tachyons';

const Display = () => {
    return (
        <>
        <section className="display">
            <div className="content b fl-100">
            <h1 className="f1">Welcome to My World!</h1>
            <br />
            <h2 className="heading f3">I'm
            <Typical
                    loop={Infinity}
                    steps={[
                        ' Sandeep Kumar Mamman',
                        1500,
                        ' learning web-development',
                        1500,
                        ' not the best, but as I am crazy about learning this, in the future, I will try to be one of the best.',
                        3000
                    ]}
                />
            </h2>
        </div>
        </section>
        </>
    );
  };

  export default Display;
