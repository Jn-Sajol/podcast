import gray from '../../assets/Rectangle 134.png'
import yellow from '../../assets/Rectangle 133.png'
import union from '../../assets/Union.png'
import vector from '../../assets/Vector 2 (1).png'

const Testimonial = () => {
  return (
    <section className="mx-32 mt-32 p-5">
      <div className="room grid grid-cols-2">
        <div className="left ps-24 ms-14 relative">
          <img className=' absolute left-[-80px] top-16' src={gray} alt="" />
          <img className=' ms-5' src={yellow} alt="" />
        </div>
        <div className="right relative ms-5">
            <img src={union} alt="" />
            <h1 className='font-plus-jakarta-sans text-[42px] font-bold leading-[52px] text-left'>What our listeners <br /> saying about us</h1>
              <img className='w-[139px] h-[19px] opacity-100 absolute left-[210px] top-[70px]' src={vector} alt="" />
              <br />
            <p>Whoa whoa, let me take some notes! A wealth of audio <br /> knowledge. Every episode is a gem! I’ve upped my game <br />considerably since I started listening. Really a wonderful <br /> platofrm for podcasts.</p>
            <br />
            <p>Scott Adams</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial