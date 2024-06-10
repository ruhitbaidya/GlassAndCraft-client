import { useLoaderData } from "react-router-dom"
import { FaStar } from "react-icons/fa";
const CraftDetails = () => {
    const itemdata = useLoaderData();
    console.log(itemdata)
  return (
    <div>
        <div className="py-[50px]">
            <h2 className="text-center text-[20px] lg:text-3xl font-[600]"> Paper Crafts & Glass Art Details</h2>
        </div>
        <div className="container mx-auto px-[20px] my-[50px]">
            <div>
                <div className="card p-[30px] bg-gray-200">
                    <div className="lg:flex gap-[25px] items-center">
                        <div className="flex-1 flex justify-center items-center">
                            <img className="rounded-lg" src={itemdata.image} alt="" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-[20px] lg:text-3xl font-[600]">{itemdata.name}</h2>
                            <p className="text-[18px] font-[400] my-[10px]">{itemdata.description}</p>
                            <div className="lg:flex gap-[25px] justify-between my-[20px]">
                                <div>
                                    <p className="p-[10px] rounded-lg  text-[18px] font-[400] ">Customize : {itemdata.customization}</p>
                                </div>
                                <div>
                                <p className="p-[10px] rounded-lg  text-[18px] font-[400] ">Stock : {itemdata.stock_status}</p>
                                </div>
                            </div>
                            
                            <div>
                                <p className="p-[10px] rounded-lg  text-[18px] font-[400] ">Processing Time {itemdata.times} days</p>
                            </div>
                            <div className="lg:flex gap-[25px] justify-between my-[20px]">
                                <div className="flex-1">
                                    <p className="p-[10px] rounded-lg  text-[18px] font-[400] bg-green-500 text-white">Price : ${itemdata.price}</p>
                                </div>
                                <div className="flex-1">
                                <p className="p-[10px] flex items-center gap-[10px] rounded-lg  text-[18px] font-[400] text-center"><div className="flex text-yellow-400">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                    </div> {itemdata.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CraftDetails