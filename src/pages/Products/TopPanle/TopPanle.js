import Search from './Search';
import Sort from './Sort';

function TopPanle({initialData,handletrack}) {
  return (
    <>
{/* props send  to search & sort componets*/}
      <Search initialData={initialData} handletrack={handletrack}/>
      <Sort handletrack={handletrack}/>
    </>
  )
}
export default TopPanle;