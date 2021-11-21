import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selector';
import s from './Filter.module.css';

function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        className={s.TaskEditor_input}
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onchangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: getFilter(state),
})

const mapDispatchToProps = dispatch => ({
  onChangeFilter: (event) => dispatch(changeFilter(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)