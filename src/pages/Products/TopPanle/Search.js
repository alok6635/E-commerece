// recive props-
function Search({initialData,handletrack}) {
    return (
        <>
 {/* insert on change event */}
            <input type="text" name="search" value={initialData.Search} placeholder="search product" onChange={(e)=>{handletrack(e)}}/>
        </>
    )
}

export default Search;