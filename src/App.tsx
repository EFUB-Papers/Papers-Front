import './App.css';
import { RecoilRoot } from 'recoil';
import CombinedProvider from './CombinedProvider';

function App() {
  return (
    <RecoilRoot>
      <CombinedProvider />
    </RecoilRoot>
  );
}

export default App;
