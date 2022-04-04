import React from "react";


export default function Main() {
    return (
        <div className="Main">
            {/*<h3 className="main--title">About</h3>*/}
            <p className="main--p"> I am an IT and Security Professional and a React/Flask developer passionate about security and automation. I built this site and set up and configured the cloud server it is currently hosting on.</p> 
            
            {/*<p className="main--p">In my previous life, I worked in corporate finance. I started as a part-time bank teller. Within four years was traveling across the US to meet and manage the relationships of corporate finance clients.</p>*/}

            <h3 className="main--title">Projects</h3>
            <div className="main--listBox">
                <div className="main--list1">
                    <ul>
                        <li>
                            <a href="https://www.mberg.ca/FightingGame01" target="_blank" className="main--ProjectButton">
                                Fighting Game
                            </a>
                        </li>
                        <li>
                            <a href="https://www.mberg.ca/airbnb" target="_blank" className="main--ProjectButton">
                                Airbnb
                            </a>
                        </li>
                        <li>
                            <a href="https://www.mberg.ca/bookreview" target="_blank" className="main--ProjectButton">
                                Book Review</a>
                        </li>
                    </ul>
                </div>
            
            
            <div className="main--list2">
                    <ul>
                        <li>
                            <a href="https://www.mberg.ca/memegenerator" target="_blank" className="main--ProjectButton">
                                MemeGenerator
                            </a>
                        </li>
                        <li>
                            <a href="https://www.mberg.ca/classic" target="_blank" className="main--ProjectButton">
                                My First Site
                            </a>
                        </li>
                        <li>
                            <a href="https://www.mberg.ca/teacozy" target="_blank" className="main--ProjectButton">
                                Tea Cozy
                            </a>
                        </li>
                    </ul>
            </div>
            </div>
        </div>
        
    )
}