//each app is rendered through from parent component to the browser.
//components are building blocks for making reusable html
//jsx wrapper around js/html syntax
//props & state pass, maintain/change data in app
//event; strong interactivity
//life cycle; hook into diff time events in components
//fetch api; retrieve data using http;
//forms

//why use react?;
//1. speed

//2. virtual DOM; makes DOM work much faster than regular DOM;

//2b. virtual DOM; DOM contains tree-structure = slow to traverse

/*2c. Dynamic SPAs need speed, VDOM = lightweight & detached from 
browser specific implementation detals
*/


/*3. known for Reusability; takes an abundance of html an stores it into components(pieces)
that make up app.
*/

//4. constantly maintained.

/*4.
think of the virtual DOM as React’s 
local and simplified copy of the HTML DOM. 

4b. 
It allows React to do its computations an 
abstract way and skip the “real” DOM operations, 
which are often slow and browser-specific.
*/

//code is inserted/rendered into an html page.
import React from 'react'
import ReactDOM from 'react-dom'//virtual DOM


ReactDOM.render(
    //jsx; not really html
    /*react elements and components should be wrapped in a parent
     element 'div'
    */
    <div> 
        <h1>Hello From React.js</h1>
    </div>, 
    document.getElementById('root')
)

ReactDOM.render(
    //what we want to reander
    <div>
        <ol>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript/ES6</li>
            <li>JSX</li>
            <li>React.js</li>
        </ol>
    </div>,
    //where we want to render
    document.getElementById('root')
)

//react fuctional components;
//allows us to create reusable web components
import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './profile.js'


ReactDOM.render(
    {/*instance of component/function*/}
    <MyListApp/>,
    document.getElementById('fake-root')
)

function MyListApp(){//constructor function creates objects.
    return (//returns jsx
        <div>
            <ol>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript/ES6</li>
                <li>JSX</li>
                <li>React.js</li>
            </ol>
        </div>
    )
}


//functional component practice
//components should be in their own seperate file.
//jsx needs to be imported and exported

import React from 'react'
import ReactDOM from 'react-dom'
import Profile from './profile.js'


ReactDOM.render(
    {/*instance of component/function*/}
    <Profile/>,
    document.getElementById('fake-root')
)

//new file
function Profile(){
    return(
        <div>
            <h1>Aaron E. Bevans</h1>
                <p>My name is Aaron Bevans, I am an aspiring 
                front-end/react.js software engineer.
                </p>
            <h1>Top 3 Vacation Spots</h1>
                <ul>
                    <li>Belize</li>
                    <li>Mexico</li>
                    <li>Japan</li>
                </ul>
        </div>
    )
}
export default Profile

//
//React Parent/child components
//styling components
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(
    <div>
        <Parent/>
    </div>,
    document.getElementById('root')
)

//should not write a lot of jsx
//one parent component can render many child components
import React from 'react'
import Header from './header'
import MainContent from './mainContent'
import Footer from './footer'

//should be mostly components
function Parent(){
    return(
        <div>
            {/*Child component nested and rendered inparent*/}
            {/* style individual elements wwithin compnents */}
            <Header/>
            <MainContent/>
            <Footer/> 
        </div>
    )
}
export default Parent

//new file
import React from 'react'

function Header(){
    //javaScript is usually written here
    let name = 'aaron'
    let alias = 'cyberman'
    let lastName = 'bevans'

    if(firstName === 'aaron'){
        firstName = 'aaron'
    }else if(firstName === 'cyberman'){
        firstName = 'cyberman'
    }else if(firstName === 'bevans'){
        firstName = 'bevans'
    }

    return (
        //can only apply className to jsx/html elements
        //go to component for style and style the jsx/html elements individually.
        <header className='nav-bar'>
            <h1>Header Element</h1>
            <nav>
                <ul>
                {/* place js within curly braces */}
                    <li id='first-element'>First Name: {`${firstName}`}</li>
                    <li id='second-elemnt'>Alias: {alias}</li>
                    <li id='third-elemnt'>Last Name: {`${lastName}`}</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header

//new file
import React from 'react'

function MainContent(){

    //styles need to be js objects
    //can use dot notation to access/modify different style properties.
    const styles = {
        color: 'blue',
        backgroundColor: 'black'
    }

    const p = document.querySelector('p')

    if(p){
        styles.color = 'green'
    }

    return (
        <div>
            <main>
            {/* css needs to be js object and wrapped */}
            {/* js needs to be wrapped with curly braces */}
                <p style={styles}>Main Content</p>
            </main>
        </div>
    )
}

export default MainContent

//new file
import React from 'react'

function Footer(){
    return (
        <footer>
            <h3>Footer element</h3>
        </footer>
    )
}

export default Footer

//react props
//props modify how a component acts
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
)

import React from 'react'
import ContactCard from './contactCard'

function App(){
    return (
        <div>
            <ContactCard 
                name='aaron'
                title='front end engineer'
            />
             <ContactCard
                name='angelica'
                title='reacords specialist'
             />
              <ContactCard
                name='avrie'
                title='baby'
              />
               <ContactCard
                name='baby a'
                title='new born'
               />
        </div>
    )
}
export default App

import React from 'react'

function ContactCard(props){
    return (
        <div>
            <div className="contact-card">
                <img src={props.imgUrl}/>
                <h3>{props.name}</h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        </div>
    )
}
export default ContactCard












