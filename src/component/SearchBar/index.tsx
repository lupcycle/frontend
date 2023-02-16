import { useRecoilValue } from "recoil";
import useRegisterHook from "../../context/useRegisterHook";
import { dataState } from "../../store/data";
import { SearchBarFrame, SearchIcon } from "./style";




const SearchBar = () => {

  const data = useRecoilValue(dataState)
  const { Register } = useRegisterHook;

  return (
    <SearchBarFrame>
      <SearchIcon/>
    </SearchBarFrame>
  )
}

export default SearchBar;