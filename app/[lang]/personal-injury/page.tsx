import Image from 'next/image'
import headerbg from '../../../public/assets/img-city.png'
import {Service_Card} from '../../../DUMMY_DATA'
import lawyerpic from '../../../public/assets/lawyerpic.jpg' 
import ServiceCard from '@frontComponents/ServiceCard'
import Testimonials from '@frontComponents/Testimonials'
import {getDictionary} from '../../../lib/getDictionary'
import bg from '../../../public/assets/pi_bg.jpg' 
import Faq3 from '../../../frontComponents/Faq3'
import Iframe from 'react-iframe'
import personalInjurypic from '../../../public/assets/personal-injury.jpg'
import piSmallBG from '../../../public/assets/pi-small-bg.png'
import groupbg from '../../../public/assets/profile-group.jpg'
import laweyer3 from '../../../public/assets/lawyer3.jpg' 
import lawfam from '../../../public/assets/lawfam.png'
import bgpi from '../../../public/assets/carcrashpi.jpeg'
import injury from '../../../public/assets/icon-injury.svg'
import HomeBlog from '@frontComponents/HomeBlog'
import carAccident from '../../../public/assets/card-car-accident.jpeg'
 


const PersonalInjury = async ({
    params,
  }: {
    params: {
      lang: string;
      };
  }) => {

    const locale = params.lang

    const dictionary = await getDictionary(locale)
    
    return (
 

        <div>

        
         
 <div className="relative   ">
       <Image 
           layout="fill"
           className="object-center object-cover pointer-events-none md:min-h-[650px] bg-fixed "
           src={bgpi}
           alt="header pic"
           priority
           quality={80}
           
       />
       <div className="relative z-1 md:min-h-[450px]  sm:min-h-[300px]">
                
 
       </div>
    
  

      </div> 
 



 <div>
     <div className="md:hidden sm:block p-6">
                     <p className="text-logoBlue   sm:text-[28px] text-[32px] font-bold track-leading ">COMPASSIONATE ADVOCATES FOR PERSONAL INJURY VICTIMS</p>
                     <p className="text-black track-leading pt-5 ">At our personal injury law firm, we are dedicated to providing unwavering support and expert legal representation to those who have been injured due to the negligence of others. With a deep commitment to justice and a track record of successful outcomes, our team of compassionate advocates is here to help you secure the compensation you deserve.</p>
     </div>
 </div>

 

   <div className="relative container   sm:hidden md:block h-32 w-32 mx-auto md:min-h-[225px] md:min-w-[1000px] lg:min-w-[1200px] md:mt-[-360px] lg:mt-[-336px]   mb-[160px] ...">
            <div className="absolute inset-x-5 bottom-0 h-16  text-white mx-auto     opacity-100">
                <div className="flex flex-row  border-l-4 border-logoBlue ">
                    <div className="w-4/5 flex flex-col bg-white min-h-[229px] p-[20px]">
                        <p className="text-logoBlue    text-[32px] font-bold track-leading ">COMPASSIONATE ADVOCATES FOR PERSONAL INJURY VICTIMS</p>
                        <p className="text-black track-leading pt-5 ">At our personal injury law firm, we are dedicated to providing unwavering support and expert legal representation to those who have been injured due to the negligence of others. With a deep commitment to justice and a track record of successful outcomes, our team of compassionate advocates is here to help you secure the compensation you deserve.</p>
                        <span className="border-dotted border-b-2 border-logoBlue pt-10 mb-10">

                            
                        </span>
          
                                <button className="w-1/5 flex text-left text-white bg-logoBlue  border-0 py-2 px-9 focus:outline-none hover:bg-gray rounded text-lg">Book</button>
                            
                            
                
                      
                    </div>
                    

                    <div className="w-2/5 p-7 flex flex-col bg-logoBlue min-h-[280px]  ">
                        <div className="flex flex-row inline-block align-top space-x-5">
                           
                                     <Image className="   " width={20} height={10} src={injury} alt=""/>
                          
                        
                              <p className="text-[20px]"> PERSONAL INJURY</p>
                              
                        </div>
                           <span className="border-dotted border-b-2 border-white pt-4  "></span>
                        
                   
                        <ul className="list-disc text-[16px] pt-5 p-3">
                        <li>Car accidents</li>
                        <li>Motorcycle accidents</li>
                        <li>Commercial truck accidents</li>
                        <li>Pedestrian and bicycle accidents</li>
                        <li>Slip-and-falls</li>
                        <li>Other premises liability cases</li>
                        <li>Dangerous and defective products</li>
                        <li>Wrongful death</li>
                        <li>Workers Compensation</li>
                        </ul>
                    


                        <p className="text-[18px]   lg:mb-[-26px] md:mb-[-200px]"> Explore More</p>
                       
                    </div>
                </div>
      
            </div>
       </div>

<div>
        
</div>

<div className="mt-[400px] sm:mt-[50px] md:container md:mx-auto md:pl-[130px] md:pr-[130px]">
      <p className="md:mt-[400px]  text-4xl tracking-wide w-full border-b-4 border-dotted border-logoBlue text-logoBlue p-3">Personal Injury Services:</p>
</div>
 
<div className='grid md:container md:mx-auto md:grid-cols-3 sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense pt-10 max-w-[1000px] md:pl-[130px] md:pr-[130px]  '>
   
      <div className='bg-logoBlue   shadow-xl min-h-[350px] row-span-1 md:col-span-2' > 
      <div className=" flex md:flex-row w-full  sm:flex-col sm:pl-10 ">
            <div className="flex flex-row md:w-7/8 sm:w-full sm:pr-8">
            <Image className="sm:max-h-[350px] sm:max-h-[600px] p-6 pt-8 pr-3 sm:pl-1" width={480} height={200} src={carAccident} alt=""/>
            </div>
            <div className="flex flex-col pr-12"> 
                <p className="md:text-[28px] sm:text-2xl text-white  pt-7 p-2 border-dotted border-b-4 border-white w-full">MOTOR VEHICLE ACCIDENTS</p>
            
                <p className="pt-5 text-2xl text-white">FROM BASIC RESEARCH TO PRACTICAL APPLICATIONS</p>
                <p className="w-full text-1xl pt-6 text-white">We provide our clients with compassionate, yet aggressive representatio  vehicle accidents.</p>
                <p className="w-full text-1xl  text-white pt-12 sm:mb-5">Learn More Here...</p>
            </div>
        </div>
        
      </div>

   

      <div className='bg-truck bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">TRUCK ACCIDENTS</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
     
<div className='grid md:grid-cols-3 md:container md:mx-auto sm:grid-cols-1 gap-x-2 gap-y-3 grid-flow-row-dense  mt-[19px] md:pl-[130px] md:pr-[130px] '>
       
<div className='bg-slip bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">SLIP AND FALLS</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-death bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">WRONGFUL DEATH</p>
                </div>
            </div>
        </div>
      </div>
      <div className='bg-worker bg-cover shadow-xl min-h-[350px]' >
         <div className="relative h-96   ...">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-logoBlue opacity-90 w-full">
                <div className="mx-auto text-center">
                    <p className="text-white text-2xl pt-5">WORKERS COMPENSATION</p>
                </div>
            </div>
        </div>
      </div>
 
 
   
    </div>
 

<div className="md:bg-white sm:bg-logoBlue md:p-0 md:mt-[338px] lg:mt-[25px] sm:mt-[0px] text-center   md:mx-auto sm:text-white md:text-black sm:p-3  md:mb-[-40px] pt-[200px]  ">
    <div className="flex sm:flex-col md:flex-row md:container md:mx-auto    text-center mx-auto pt-16  mb-16">
            
            <div className="md:w-/4 sm:text-center sm:mx-auto sm:w-full md:text-[22px] md:max-w-[800px] md:text-right">
                <Image className="  md:w-1/10  " width={5200} height={10} src={lawfam} alt=""/>
            </div>
            <div className="md:w-2/4 sm:text-center sm:mx-auto sm:w-full md:text-[25px] md:max-w-[450px] md:text-left">
            <p className="pt-3 sm:text-white md:text-black  border-l-4 border-logoBlue p-6">My son was in a very serious car accident and Gerardo immediately helped him - step by step - take care of working with the lender getting the totaled car paid off and then working with the other insurance company to make sure my son was taken care of as was appropriate.</p> 
            <p className="justify-end pt-3 text-[16px] border-logoBlue p-8">- Kelly A.</p>
            </div>
            
            <div className="md:w-1/4 sm:text-center sm:mx-auto sm:w-full md:text-[20px] md:max-w-[450px] md:text-left sm:hidden  ">
            <p className="pt-3 sm:text-white md:text-black  border-l-4 border-logoBlue p-6">My son was in a very serious car accident and Gerardo immediately helped him - step by step - take care of working with the lender getting the totaled car paid off and then working with the other insurance company to make sure my son was taken care of as was appropriate.</p> 
            <p className="justify-end pt-3 text-[16px] border-logoBlue p-8">- Kelly A.</p>
            </div>

    </div>
  </div>
    
  <div className="sm:hidden md:block">
          <div className="flex items-center justify-center h-96 bg-fixed bg-piSmall bg-cover space-x-10  ">
            <div className="flex sm:flex-col md:flex-r w-1/2">
                   <p className="text-4xl tracking-wide text-white w-3/4  ">
                   Strong And Effective Atlanta Personal Injury Representation from a Georgia Personal Injury Lawyer
                   </p>
                   <p className="text-[18px] text-white pt-4 ">
                     At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama and Florida who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.
                   </p>
                   <div className="pt-3">
                         <button className="w-1/6 flex text-left text-logoBlue bg-white  border-0 py-2 px-9 focus:outline-none hover:bg-gray rounded text-2xl">Book</button>
                   </div>

                 
            </div>
     
            <div className="md:w-1/4 sm:text-center sm:mx-auto sm:w-full md:text-[22px] md:max-w-[450px] md:text-right">
                <Image className="    " width={2200} height={10} src={laweyer3} alt=""/>
            </div>
     
   </div>

   </div>

 
   <HomeBlog dictionary={dictionary}/>


    <div>




    </div>


    <div className="md:container md:mx-auto">



    </div>



{/*  */}

     
        </div>
    )
}

export default PersonalInjury

/*

 <div className="md:container md:mx-auto text-center  ">
                <div className="flex flex-col space-y-10">
                    <div className="flex md:flex-row sm:flex-col space-y-10 ">
                        <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue">1</p>
                    </div>
                    <div className="flex md:flex-row sm:flex-col space-y-10 ">
                    <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue  ">1</p>
                        <p className="w-1/4  mx-auto bg-logoBlue">1</p>
                    </div>
                    
                     </div>

            </div>


/*

  <div className=" md:mx-auto md:p-[80px] sm:pt-8">
           
                <div className="flex md:flex-row sm:flex-col mx-auto w-full">
            

            <div className="md:w-1/2 md:min-w-[80px] sm:w-full">
                    <Image className=" h-full md:min-h-[300px] shadow-2xl w-full " width={2000} height={2000} src={lawyer2} alt=""/>
            </div>
                  
             
              


                
                <div className="flex flex-col p-10  text-left">

                          <p className="   md:w-1/3 text-left  text-[24px] text-white tracking-wide    sm:pb-3 md:text-left sm:text-center">Our Expertise</p>
                          <div className=" w-16 h-1 rounded-full bg-amber-500 inline-flex inline sm:text-center md:block sm:hidden "></div>
                <p className="md:p-10 w-full md:text-left max-w-[800px] text-white tracking-wide text-[20px] sm:pt-6 sm:text-center ">At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama and Florida who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.

                    A Georgia personal injury lawyer from Cheves Briceno is prepared to negotiate a settlement or go to trial for the fair and just compensation that you deserve.</p>
                </div>
          
                </div>
            </div>
*/


/*


       <div className=" text-center bg-white ">

               <div className="flex-col space-y-3 md:p-[30px] sm:p-[50px]  md:container md:mx-auto">
            
          
                   <div className="flex md:flex-row sm:flex-col text-center  sm:space-y-3 md:space-y-0  ">

            
                        <div className="md:w-1/3   text-center md:mx-auto  "> 
                        <ServiceCard card={Service_Card[0]}/>
                        </div>
                        <div className="md:w-1/3   text-center md:mx-auto     "> 
                        <ServiceCard card={Service_Card[1]} />
                        </div>
                        <div className="md:w-1/3   text-center md:mx-auto   "> 
                        <ServiceCard card={Service_Card[2]}/>
                        </div>

                   </div>
                   <div className="flex md:flex-row sm:flex-col text-center sm:space-y-3 md:space-y-0 min-h-[300px]">
                        <div className="md:w-1/3 mr-5 text-center md:mx-auto sm:w-full   "> 
                        <ServiceCard card={Service_Card[3]}/>
                        </div>
                        <div className="md:w-1/3 mr-5 text-center md:mx-auto sm:w-full   "> 
                        <ServiceCard card={Service_Card[4]}/>
                        </div>
                        <div className="md:w-1/3 mr-5 text-center md:mx-auto sm:w-full   "> 
                        <ServiceCard card={Service_Card[5]}/>
                        </div>
          
                   </div>
    
               </div>

               <div className="bg-white ">
                   <Faq3 dictionary={dictionary} />
               </div>

                <div>

               <Testimonials  dictionary={dictionary}/>
                </div>
            </div>


*/