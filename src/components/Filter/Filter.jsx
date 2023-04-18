import { FilterWrapper, FilterInput, Button } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/slice/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(state => state.filter);

  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  const clearFilter = () => {
    dispatch(filterContacts(''));
  };

  return (
    <FilterWrapper>
      <label htmlFor="filter">
        <FilterInput
          type="text"
          value={value}
          name="filter"
          placeholder="Enter to search..."
          onChange={changeFilter}
        />
      </label>
      <Button type="button" onClick={clearFilter}>
        Clear
      </Button>
    </FilterWrapper>
  );
};
