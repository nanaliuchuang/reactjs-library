import logo from './1.jpg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='user'>
      <div className='imgBx'>
        <img src={logo}></img>
      </div>
      <div className='formBx'>
        <form>
        <p className='sign'>Họ tên : Trương Hà Trâm Anh</p>
        <p className='sign'>Giới tính : Nữ</p>
        <p className='sign'>Địa chỉ : 01 Hòa Minh 4,Liên Chiểu,Đà Nẵng</p>
        <p className='sign'>Số điện thoại : 0702564669</p>
        <p className='sign'>Email : nanaliuchuang@gmail.com</p>
        <p className='sign'>Facebook/Zalo : nanaliuchuang@gmail</p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;