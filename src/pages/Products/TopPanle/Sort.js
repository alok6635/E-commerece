// recive props
function Sort({handletrack}){
    
    return (
        <>
        <div className="product-sorting mb-1">
        <div className="product-sorting-inner flex justify-end items-center space-x-05">
            <div><span>Sort By</span></div>
            <div >
                <div className="form-field-container dropdown null">
                    <div className="field-wrapper flex flex-grow items-baseline">
 {/* insert on change event */}
                        <select className="form-field" name="sort" onChange={(e)=>{handletrack(e)}}>
                            <option defaultValue="" value="" disabled="">Please select</option>
                            <option value="price">Price</option>
                            <option value="name">Name</option>
                        </select>
                        <div className="field-border"></div>
                        <div className="field-suffix"><svg viewBox="0 0 20 20" width="1rem" height="1.25rem"
                                focusable="false" aria-hidden="true">
                                <path d="m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z"></path>
                            </svg></div>
                    </div>
                </div>
            </div>
          
        </div>
    </div>
        </>
    )
}

export default Sort;