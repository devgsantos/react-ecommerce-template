import { GenericProductCarouselComponent } from "../../components/GenericProductCarouselComponent";
import { environment } from "../../configs/api";
import { iProduct } from "../../interfaces/product.interfaces";
import Slideshow from "./components/Slideshow"
import { useEffect, useState } from 'react';


const Home: React.FC = () => {

    const [data, setData] = useState<iProduct[]>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(environment.makeupApi + '?brand=covergirl&product_type=lipstick');
          const jsonData = await response.json();
          jsonData.slice(0,4)
          setData(jsonData);
          console.log(jsonData)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    return (
        <>
            <Slideshow/>
            <div className="uk-container uk-margin-auto">
                <GenericProductCarouselComponent products={data}/>
            </div>
        </>
    )   
}

export default Home