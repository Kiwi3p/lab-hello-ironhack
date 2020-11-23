import React from 'react';

function MyFooter() {
    return (
        <article class="flex-work">
                <div class="config">
                    <img src='/images/icon1.png' alt="Training Logo" />
                    <h4>Declarative</h4>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div class="team">
                    <img src='/images/icon2.png' alt="Training Logo" />
                    <h4>Components</h4>
                    <p>Build encapsulated Components that manage their state.</p>
                </div>
                <div class="features">
                    <img src='/images/icon3.png' alt="Training Logo" />
                    <h4>Single Way</h4>
                    <p>A set of immutable values are passed to the components</p>
                </div>
                <div class="audit">
                    <img src='/images/icon4.png' alt="Training Logo" />
                    <h4>JSX</h4>
                    <p>Statically-typed. Designed to run on modern browsers</p>
                </div>
         </article>
    )
}

export default MyFooter;