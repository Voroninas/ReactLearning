import React from 'react'
import styles from './ShrinkingHeader.module.css'
import userPhoto from '../../../assets/images/user.png'

/*i can`t make it work, probably because it not for react, i don`t know*/
// todo поменять имена классов на камелкейс без -
// сделать обращение к классам CSS через "styles."
// возможно не срабатывает из-за того что в приложении уже есть один тег <header>
// тогда может надо этот пример вместо моей компоненты Header прописать

const ShrinkingHeader = (props) => {
  return (<header className="header-outer">
    <div className="header-inner">
      <div className="header-logo">Lorem, ipsum dolor sit amet.</div>
      <nav className="header-navigation">
        Lorem ipsum dolor sit amet consectetur adipisicing, elit. Hic repudiandae vitae adipisci, neque! Quod consectetur dicta ipsam unde atque nulla natus facilis sapiente cumque, placeat aperiam perferendis veritatis ipsa, voluptatem alias qui quasi? Optio quas, modi molestiae officiis dolor recusandae fugiat nam eius iure illum minima excepturi illo dolorem delectus?
      </nav>
    </div>
  </header>)
}

export default ShrinkingHeader;




//Sticky header
<header className="header-outer">
  <div className="header-inner responsive-wrapper">
    <div className="header-logo">
      <img src="https://assets.codepen.io/285131/acme-2.svg" />
    {/*вместо картинки по урле, она шла с примером, вставить что-то из ассетов*/}
    </div>
    <nav className="header-navigation">
      {/*<a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#">Contact Us</a>*/}
      <button>Menu</button>
    </nav>
  </div>
</header>
//Content
<main className="main">
  <div className="main-content responsive-wrapper">
    <article className="widget">
      <h2>How does it work without JS?</h2>
      {/*<p>This sticky header consists of two elements: an <strong>outer</strong> and an <strong>inner</strong> container. The outer container is taller than the inner — and the inner is centered vertically.
      <p>By utilizing the <code>position: sticky</code> property <strong>twice</strong>, both on the header's <strong>outer container</strong> and <strong>inner container</strong> the outer container will stick to the <code>body</code>, while the inner container will stick to the outer container.</p>
      <p>Note that the outer container has a negative <code>top</code> value equal to the height difference between the two containers. This causes the outer container to stick <strong>above</strong> the <code>body</code>, making the inner container stick to the "ceiling" on scroll.
      <p></p>*/}
    </article>
  </div>
</main>
