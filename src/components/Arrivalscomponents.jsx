



import { TiHeartFullOutline } from "react-icons/ti";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Container from './Container'



const Arrivalscomponents = ({item}) => {
   
    
  return (
    <section>
           
            <Container>
            <div className="flex gap-[20px] items-center">
            <div className="md:!w-[97%] w-full border-[1px] border-[#dddd] bg-[#f8f9fa] rounded-[8px] shadow-inner  bg-transparent h-[500px] ">
                <div className="">
                    <div className="">
                        <div className="relative group overflow-hidden">
                            <img className='w-full mix-blend-color-burn' src={item.thumbnail} alt="" />
                        <ul className='text-end bg-[#ffffffe0] absolute left-0 h-[150px] duration-300 ease-in-out bottom-[-130px] w-full group-hover:bottom-0 p-4'> 
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Add to Wish List <TiHeartFullOutline className='inline-block text-[25px] pl-1' /> </li>
                            <li className='py-1 text-[16px] text-[#767676] font-DMs font-normal'>Compare <FaCodeCompare className='inline-block text-[20px] pl-1'/></li>
                            <li className='py-1 text-[16px] text-[#262626] font-DMs font-bold'>Add to Cart <FaShoppingCart className='inline-block text-[20px] pl-1'/></li>
                        </ul>
                        <div className="absolute top-[20px] left-[20px]">
                            <button className='h-[35px] w-[92px] bg-black text-white text-[14px] font-DMs font-bold  hover:bg-[#F39422] duration-300 ease-in-out'>New</button>
                        </div>
                      
                     
                        <div className="pl-2 mt-3 font-DMs ">{item.warrantyInformation}</div>
                        
                       
                        </div>
    
    
                    </div>
                    
                </div>
                <div className="flex justify-between pl-2">
                    <div className="">
                        <h3 className='text-[#262626] font-bold text-[20px] font-DMs'>{item.title}</h3>
                        <h4 className='text-[#767676] font-normal text-[16px] font-DMs'>{item.brand}</h4>
    
                    </div>
                    <p className='text-[#767676] font-normal text-[16px] font-DMs pr-2'>${item.price}</p>
                    
                </div>
            </div>
          
            </div>

            </Container>

           
        </section>
  )
}

export default Arrivalscomponents;
