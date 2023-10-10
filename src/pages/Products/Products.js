import TopPanle from "../Products/TopPanle/TopPanle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { callApi, apiStaus } from "../../redux/productSlice";
import store from "../../redux/store";

function Products() {
// create for redux-
    const initialData = {
        search: "",
        sort: "",
    }
    const [actionData, setActionData] = useState(initialData);

    useEffect(() => {
        store.dispatch(callApi())
    }, [])

    const { data, status } = useSelector((state) => {
        return state.reciveReducer
    })
    if (status === apiStaus.loading) {
        return <h2>Looding</h2>
    }
//searching -
    function handletrack(e) {
        console.log(e.target.value);
        const { name, value } = e.target;
        setActionData((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(actionData);
    }
    let newData = data.filter((item) => {
        return item.title.toLowerCase().includes(actionData.search.toLowerCase())
    })
//sorting-
    const sortData = (newData) => {
        const sorted = [...newData];
        if (actionData.sort === "price") {
            sorted.sort((a, b) => {
                const priceA = parseFloat(a.price);
                const priceB = parseFloat(b.price);
                    return priceA - priceB;
            });
        } 
        else if (actionData.sort === "name") {
            sorted.sort((a, b) =>
            a.title.localeCompare(b.title)
            );
        }
        return sorted;
    };
   
    return (
        <>
            <div className="page-width grid grid-cols-1 md:grid-cols-4 gap-2">
            <div className="md:col-span-3">
{/* props send to TopPanle */}
                <TopPanle initialData={initialData} handletrack={handletrack} />
{/* use map function here */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {
                        sortData(newData).map((item,index) => (
                            <div className="listing-tem" key={index}>
                            <div className="product-thumbnail-listing">
                                <a><img src={item.image}/></a>
                            </div>
                            <div className="product-name product-list-name mt-1 mb-025"><a
                                className="font-bold hover:underline h5"><span>{item.title}</span></a>
                            </div>
                            <div className="product-price-listing">
                                <div><span className="sale-price font-semibold">{item.price}</span></div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
            </div>
        </>
    )

}

export default Products;