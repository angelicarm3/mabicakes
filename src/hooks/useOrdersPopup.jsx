import { useState } from 'react';
import axios from 'axios';

const useOrdersPopup = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    }, []);
    return products;
};

export default useOrdersPopup;