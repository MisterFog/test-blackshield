import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary/ErrorBoundary';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Routes from './Routes';
import { store } from './store';
import history from 'history/browser';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router history={history}>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
