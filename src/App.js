import './App.css';
import { Router} from "@reach/router"

import Authors from './views/authors';
import NewAuthor from './views/newAuthor';
import EditAuthor from './views/editAuthor';
import NotFound from './views/notFound';

function App() {
  return (
      <Router>
        <Authors path="/"></Authors>
        <NewAuthor path="/authors/new"></NewAuthor>
        <EditAuthor path="authors/:id/edit"></EditAuthor>
        <NotFound default></NotFound>
      </Router>
  );
}

export default App;
