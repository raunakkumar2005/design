
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <>
      <div className="alttop">
        <img src="https://th.bing.com/th/id/R.757dcae10509bdbcbbbe7231f9cec8ab?rik=7RO2A7Du7jYBww&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fleft-arrow-png-left-icon-1600.png&ehk=nQr%2fWbRJHtKEaV53ijq71OpNptgpG4FZxnChrIO0fBI%3d&risl=&pid=ImgRaw&r=0" alt="toparrow" className="arrow" />
        <button className="btn btn-light">Learn more</button>
      </div>
      <div className="top">
        <div className="topLeft">
          <img src="https://www.atg.world/public/assets/Frontend/img/colorednewlogo.svg" alt="topimg" />
        </div>
        <div className="topCenter">
          <form class="d-flex input-group w-auto">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />

          </form>
        </div>
        <div className="topRight">
          {user ? (

            <button type="button" data-toggle="modal" data-target="#loginModal">
              <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
            </button>

          ) : (
            <ul className="topList">
              <li className="topListItem">

                LOGIN

              </li>
              <li className="topListItem">

                REGISTER

              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>

  );
}
