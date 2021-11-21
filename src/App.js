import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import ContactList from './components/ContactList/ContactList';
import ContactsForm from './components/ContactsForm/ContactsForm';
import Filter from './components/Filter/Filter';
import { fetchContacts } from './redux/contacts/contacts-operations';
import { getLoading } from './redux/contacts/contacts-selector';

class App extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render (){

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
      );
  };
};

const mapStateToProps = state => ({
  isLoading: getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  onFetchContacts: () => dispatch(fetchContacts.fulfilled()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;