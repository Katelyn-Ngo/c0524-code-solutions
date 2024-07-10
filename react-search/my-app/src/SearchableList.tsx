import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { Items } from './Items';

type Props = {
  list: string[];
};
export function SearchableList({ list }: Props) {
  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (value: string) => {
    setSearchItem(value);
  };
  const filteredList = list.filter((item) =>
    item.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <SearchBar searchItem={searchItem} onSearch={handleSearch} />
      {filteredList.length > 0 ? (
        <Items items={filteredList} />
      ) : (
        <p>No items match the filter</p>
      )}
    </div>
  );
}
