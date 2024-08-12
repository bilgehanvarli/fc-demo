import { useEffect } from 'react';
import { WidgetInstance } from 'friendly-challenge';

// FIXME
const sitekey = 'CHANGE THIS'
const placeholderSelectorId = 'friendly-captcha-placeholder'


function App() {
  useEffect(() => {
    const element = document.querySelector(`.${placeholderSelectorId}`);
    const options = {
      language: 'de-DE',
      startMode: 'auto',
      sitekey,
      startedCallback: () => {console.log('started callback')},
      doneCallback: () => {

      },
      readyCallback: ()=> {
        console.log('ready callback')
      },
      errorCallback: () => {

      }
    };

    new WidgetInstance(element, options);
    
  }, [])
  return (
    <div className="App">
      <div className={placeholderSelectorId}></div>
    </div>
  );
}

export default App;
