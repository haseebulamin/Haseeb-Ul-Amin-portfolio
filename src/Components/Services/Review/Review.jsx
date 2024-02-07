import React,{useReducer} from 'react'
import './Review.scss'
import '../../Common/Variables.scss'
import client1 from '../../../Images/Ven-Humesh.jpg'
import client2 from '../../../Images/theristen-Dixon.jpg'
import client3 from '../../../Images/uvais-ur-rehman.jpg'



export default function Review() {
  
  const initialState = {
    active1: "active",
    active2: "",
    active3: ""
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 1:
        return {
          ...state,
          active1: "active",
          active2: "",
          active3: ""
        };
      case 2:
        return {
          ...state,
          active1: "",
          active2: "active",
          active3: ""
        };
      case 3:
        return {
          ...state,
          active1: "",
          active2: "",
          active3: "active"
        };
      default:
        return state;
    }
  };
   const [state,dispatch] = useReducer(reducer, initialState);
  return (
    <div id="carouselExampleCaptions" className="carousel  slide overflow-hidden" data-bs-ride="false" >
        <div className="grid">
          <div className=" col-12  ">
            <div className='text-center pt-5'><p className='title-line text-xl inline-block font-bold uppercase main-color pl-6 animate__animated animate__fadeInDown'>Client Says</p></div>
            <div className="carousel-inner ">
            <div className="carousel-item active">
            <div className=" flex flex-column align-items-center justify-content-center">
            <img src={client1} className="clienttImg border-circle my-5 animate__animated  animate__flip" height={220} width={220} alt="" />
            <h5 className="text-3xl  main-color font-bold animate__animated animate__fadeInUp">Ven Humesh</h5>
            <p className="text-xl text-white text-center w-7 animate__animated animate__fadeInUp">
            Exceptional frontend development skills! The developer delivered a visually stunning and seamlessly performing website. Their dedication to a high-quality user experience is evident. Would gladly recommend for top-notch frontend work.
            </p>
            </div>
            </div>
            <div className="carousel-item">
            <div className=" flex flex-column align-items-center justify-content-center">
            
            <img src={client2} className="clienttImg border-circle my-5 animate__animated  animate__flip" height={220} width={220} alt="" />
            <h5 className="text-3xl  main-color font-bold animate__animated animate__fadeInUp">Theristen Dixon</h5>
            <p className="text-xl text-white text-center w-7 animate__animated animate__fadeInUp">
            The frontend developer exceeded expectations, bringing our vision to life with a sleek and user-friendly website. Their attention to detail and responsiveness made the collaboration seamless. Highly recommended!
            </p>
            </div>
            </div>

            <div className="carousel-item">
            <div className=" flex flex-column align-items-center justify-content-center">
            
            <img src={client3} className="clienttImg border-circle my-5 animate__animated  animate__flip" height={220} width={220} alt="" />
            <h5 className="text-3xl  main-color font-bold animate__animated animate__fadeInUp">Uvais ur Rehman</h5>
            <p className="text-xl text-white text-center w-7 animate__animated animate__fadeInUp">
            A game-changer for our online presence. The frontend developer's proficiency in HTML, CSS, and JavaScript resulted in a responsive and visually appealing design. Collaborative, receptive to feedback, and always met deadlines. Thrilled with the outcome!
            </p>
            </div>
            </div>
            </div>
            <div className="buton text-center border-0 my-4 animate__animated animate__fadeInDown">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" onClick={ ()=> dispatch({type: 1}) } className={`${state.active1} mx-1`} aria-current="true" aria-label="Slide 1" >1</button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" onClick={ ()=> dispatch({type: 2}) }  className={`${state.active2} mx-1`} aria-label="Slide 2" >2</button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" onClick={ ()=> dispatch({type: 3}) } className={`${state.active3} mx-1`} aria-label="Slide 3" >3</button>
        </div>
          </div>

        </div>
      </div>
  )
}
