
import logo from './logo.svg';
import './App.css';
import { jscode, code } from './code';
 
 function App() {
  return (
     <div className="App">
       <header className="App-header">
         <h1>
           <p>abbreviatedjs</p>
         </h1>
         <h4><code>A 8.31 kB library to help you write JS faster.</code></h4>
         <code
           style={{
             backgroundColor: '#00000F'
           }}
         >
           npm install --save-dev abbreviatedjs
         </code>
         <br/>
         <br/>
         <code>Here's some code written in AbJS (click to copy)</code>
         <pre>
           <code style={{
             backgroundColor: '#00000F',
             whiteSpace: 'pre-wrap',
             display: 'inline-block',
             align: 'left',
             justify: 'left',
             padding: '17px',
             borderRadius: '15px',
             cursor: 'pointer',
           }} onClick={() => {navigator.clipboard.writeText(code)}}>{code}</code>
         </pre>
         <code>...and the {'equivalent'} in vanilla JS</code>
         <pre>
           <code style={{
             backgroundColor: '#00000F',
             whiteSpace: 'pre-wrap',
             display: 'inline-block',
             align: 'left',
             justify: 'left',
             padding: '17px',
             borderRadius: '15px',
             cursor: 'pointer',
           }} onClick={() => {navigator.clipboard.writeText(jscode)}}>{jscode}</code>
         </pre>
         <code>Both print the same output (1..99)</code><code>Abbreviatedjs does so in 55 keystrokes, vanilla JS does so in 85</code>
         <h4>Caveats:</h4>
         <code>
           <ul style={{
             margin: '32px'
           }}>
             <li>All abbreviations MUST have a space before them (in order to distinguish a variable called {'req'} from the abbreviation for {'require'})</li>
             <li>You must write in .ajs files, and re-compile the files every edit</li>
             <li>JSX becomes a bit buggy if you have abbreviations in the {'<tags>'}</li>
           </ul>
         </code>
 
         <a
           className="App-link"
           href="https://www.npmjs.com/package/abbreviatedjs"
           style={{
             fontSize: '42px',
             border: 'none',
             background: '#272727',
             color: '#FFF',
             cursor: 'pointer',
             borderRadius: '15px',
             padding: '2vh 4vh',
             textDecoration: 'none',
           }}
         >
           Docs and more
         </a>
         <br />
         <p>A RandomZ project, written in abbreviatedjs</p>
         <br />
       </header>
     </div>
   );
 }
 
export default App;
 