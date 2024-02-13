import React, { Component } from 'react'
import { glassesArr } from "./dataGlasses.js";
import "./Glasses.css";
export default class GlassesComponent extends Component {
    state = {
        glass: null,
    };

    hanldeChangeGlass = (glass) => {
        this.setState({ glass: glass });
    };
    renderGlassesList = () => {
        return glassesArr.map((item) => {
            return (
                <img key={item.id} onClick={() => this.hanldeChangeGlass(item)} className='glasses-img' src={`./ImageSrc/${item.url}`} alt={item.name}
                />
            );
        });
    };
    render() {
        let url = this.state.glass ? `./ImageSrc/${this.state.glass.url}` : "";
        let glassName = this.state.glass ? this.state.glass.name : "";
        let glassDesc = this.state.glass ? this.state.glass.desc : "";
        return (
            <div id="main-container">
 <nav className="navbar " >
      <h1>TRY GLASSES APP ONLINE</h1>
    </nav>

                <div class="grid">
                    <div class="cell">
                        <img className='model-img' src="./ImageSrc/glassesImage/model.jpg" alt="Image 1" />
                    </div>
                    <div class="cell">
                        <img className='model-img' src="./ImageSrc/glassesImage/model.jpg" alt="Image 2" />
                        <img src={url} class="img-overlay"></img>
                        <div class="text-overlay"> 
                            <div className="glass-name">
                                {glassName}
                            </div>
                            <div className="glass-desc">
                                {glassDesc}
                            </div>
                        </div>
                    </div>
                    <div class="cell row2 merge"> {this.renderGlassesList()}</div>
                </div>
            </div>
        )
    }
}
