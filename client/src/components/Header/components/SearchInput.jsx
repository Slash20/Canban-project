import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../../../store/slices/searchSlice';
import { Search } from './Search';
import { SearchIconWrapper } from './SearchIconWrapper';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInputBase } from './StyledInputBase';

const SearchInput = () => {
  const value = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const onChangeHeandler = (e) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={value}
        onChange={(e) => onChangeHeandler(e)}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export { SearchInput };
