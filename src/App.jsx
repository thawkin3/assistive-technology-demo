import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>Fantastic Assistive Technologies and Where to Find Them</h1>
      <h2>Buttons</h2>
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
              event.preventDefault();
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
        <a
          className="btn primary"
          type="button"
          onClick={() => alert('clicked button 5!')}
          href="#"
        >
          Button 5
        </a>
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
      <h2>Text</h2>
        <p className="adjustableFontSize"><b>This text will adjust to browser zoom and text zoom.</b></p>
        <p className="adjustableFontSize">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis justo et nisl efficitur tincidunt. Aliquam erat volutpat. Etiam at molestie velit. Nunc lobortis diam quis velit aliquet pellentesque. Curabitur laoreet ex eu justo efficitur, vitae sollicitudin risus facilisis. Sed sodales augue vitae sem sollicitudin, vel lobortis justo scelerisque. Nunc malesuada ligula id nibh elementum, ac tincidunt mauris convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sodales eu nulla a dictum. Donec vitae nibh at diam pellentesque varius quis eu quam. Duis odio felis, varius ut congue scelerisque, pulvinar et quam. Etiam scelerisque dapibus fermentum. Sed quis mattis lorem. Ut aliquam laoreet diam pulvinar efficitur. Ut ac metus rhoncus justo convallis molestie. Morbi et justo at ligula dignissim tincidunt.</p>
        <p className="nonAdjustableFontSize"><b>This text will adjust to browser zoom but not text zoom.</b></p>
        <p className="nonAdjustableFontSize">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis justo et nisl efficitur tincidunt. Aliquam erat volutpat. Etiam at molestie velit. Nunc lobortis diam quis velit aliquet pellentesque. Curabitur laoreet ex eu justo efficitur, vitae sollicitudin risus facilisis. Sed sodales augue vitae sem sollicitudin, vel lobortis justo scelerisque. Nunc malesuada ligula id nibh elementum, ac tincidunt mauris convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sodales eu nulla a dictum. Donec vitae nibh at diam pellentesque varius quis eu quam. Duis odio felis, varius ut congue scelerisque, pulvinar et quam. Etiam scelerisque dapibus fermentum. Sed quis mattis lorem. Ut aliquam laoreet diam pulvinar efficitur. Ut ac metus rhoncus justo convallis molestie. Morbi et justo at ligula dignissim tincidunt.</p>
    </main>
  );
}

export default App;
