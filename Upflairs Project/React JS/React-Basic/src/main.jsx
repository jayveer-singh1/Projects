import React from 'react'
import ReactDOM from 'react-dom/client'
// function Header() {
//  return <header>
//     <p>This is my header</p>
//   </header>
// }
function MyHeading() {
  return <h2>Pollution</h2>
}
function SubElement() {
 return <div>
    <hr />
    <pre>Article    Talk                                                                     Read    View sourse    View history    Tool</pre>
    <hr />
  </div>
}
function MainContaint() {
  return <div class="container1">
    <div class="paragraph">


      <p>
        From Wikipedia, the free encyclopedia
      </p>
      <p> <i> For other uses, see <span> Pollution (disambiguation).</span>
        "Environmental pollution" redirects here. For the journal, see <span> Environmental Pollution
          (journal)</span>.</i></p>
    </div>

    <p>
      Pollution is the introduction of <span> contaminants </span> into the natural environment that cause
      adverse change.[1]
      Pollution can take the form of any substance (solid, liquid, or gas) or energy (such as radioactivity,
      heat, sound, or light). <span> Pollutants</span>, the components of pollution, can be either foreign
      substances/energies or naturally occurring contaminants.
    </p>
    <p>
      Although environmental pollution can be caused by natural events, the word pollution generally implies
      that the contaminants <span> have an anthropogenic source</span> that is, a source created by human
      activities, such
      as <span>x manufacturing, extractive industries</span>, poor waste management, transportation or
      agriculture. Pollution
      is often classed as point source (coming from a highly concentrated specific site, such as a factory,
      mine, construction site), or nonpoint source pollution (coming from a widespread distributed sources,
      such as <span> microplastics</span> or agricultural runoff).
    </p>
  </div>
}
// function Footer() {
//  return <div>This is my Footer</div>
// }

function MyPage() {
  return <div>
    {/* <Header/> */}
    <MyHeading />
    <SubElement />
    <MainContaint />
    {/* <Footer /> */}
  </div>
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyPage />
  </React.StrictMode>,
)
