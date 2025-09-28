import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>Fantastic Assistive Technologies and Where to Find Them</h1>
      <h2>Keyboard-only navigation</h2>
      <div className="hStack">
        <button
          className="btn primary"
          type="button"
          onClick={() => alert('clicked button 1!')}
        >
          Button 1
        </button>
        <div className="btn primary" onClick={() => alert('clicked button 2!')}>
          Button 2
        </div>
        <div
          className="btn primary"
          role="button"
          tabIndex={0}
          onClick={() => alert('clicked button 3!')}
          onKeyPress={(event) => {
            if (event.key === ' ' || event.key === 'Enter') {
              alert('clicked button 3!');
            }
          }}
        >
          Button 3
        </div>
        <button
          className="btn primary poorFocus"
          type="button"
          onClick={() => alert('clicked button 4!')}
        >
          Button 4
        </button>
        <button
          className="btn primary"
          type="button"
          onClick={() => alert('clicked button 5!')}
        >
          Button 5
        </button>
      </div>
      <h2>Images</h2>
      <div className="hStack">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </main>
  );
}

export default App;
