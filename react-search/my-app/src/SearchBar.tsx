import searchIcon from './search-solid.svg';

type Props = {
  searchItem: string;
  onSearch: (value: string) => void;
};

export function SearchBar({ searchItem, onSearch }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <div className="relative flex items-center w-full">
      <img src={searchIcon} alt="search" className="absolute left-3 w-5 h-5" />
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        className="pl-10 py-2 w-full border rounded-md"
      />
    </div>
  );
}
