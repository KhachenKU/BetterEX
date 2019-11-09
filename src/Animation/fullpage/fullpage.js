import React, { Fragment } from 'react';
import { FullPage, Slide } from 'react-full-page';
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap';
import styled from 'styled-components';
import './style.css';

const TweenStyled = styled.div``;

class Animation extends React.Component{
  render(){
    return(
      <FullPage>
        <Slide>
          <div className='section 1'>
            <h1>Promotion</h1>
          </div>
          <TweenStyled>
          {/* <Controls> */}
      <Tween
        wrapper={
          <ul style={{ perspective: '1000px', fontSize: '1.5rem' }} />
        }
        staggerFrom={{
          opacity: 0,
          cycle: {
            rotationX: [-90, 90],
            transformOrigin: ['50% top -100', '50% bottom 100']
          },
        }}
        duration={1}
        stagger={0.1}
      >
        <li>Rich Harris</li>
        <li>Dan Abramov</li>
        <li>Kyle Simpson</li>
        <li>Gregory Brown</li>
        <li>Addy Osmani</li>
        <li>Evan You</li>
        <li>Axel Rauschmayer</li>
        <li>Sarah Drasner</li>
        <li>André Staltz</li>
      </Tween>
    {/* </Controls> */}
    </TweenStyled>
        </Slide>
        <Slide>
          <div className ='section 2'>
          <h1>Category</h1>
          <div class="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non nam
            inventore illum! Libero nisi optio consequuntur tenetur soluta
            debitis
          </p>
          <p>
            saepe eligendi, dicta velit at quod dolores asperiores facilis
            nostrum eius molestias et maxime earum? Tenetur nam magni quae
            tempore beatae rerum impedit quasi id iste sapiente, amet asperiores
            maxime eius.
          </p>
        </div>
          </div>
        </Slide>
        <Slide>
          <div className='section 3'>
          <h1>Mission</h1>
          </div>
        </Slide>
        <Slide>
          <div className='section 4'>
          <h1>Contact</h1>
          </div>
        </Slide>
      </FullPage>
    );
  }
}

export default Animation;