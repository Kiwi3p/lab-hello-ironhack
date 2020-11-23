import React from 'react';
//import MyButton from 'MyButton'

function MyHeader() {
    return (
        <section id="slide1">
          <nav>
            <img src='/images/ironhack-logo.svg' />
            <img src='/images/menu-top.svg' />
          </nav>  
          <h2>Say Hello <br/>to ReactJS</h2>
          <p>You will learn to use the most popular front end library and become a super ninja developer.</p>
          <div class="button">  
            <a class="awesome" href="#">Awesome</a>
          </div>
        </section>
    )
}

export default MyHeader;