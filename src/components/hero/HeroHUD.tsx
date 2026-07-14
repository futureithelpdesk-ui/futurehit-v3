import "./HeroHUD.css";

export default function HeroHUD() {

  return (

    <>

      <div className="hud hud-left">

        <span>STATUS</span>
        <strong>ONLINE</strong>

      </div>

      <div className="hud hud-right">

        <span>SECURITY</span>
        <strong>ENCRYPTED</strong>

      </div>

      <div className="hud hud-bottom-left">

        <span>NETWORK</span>
        <strong>CONNECTED</strong>

      </div>

      <div className="hud hud-bottom-right">

        <span>VERSION</span>
        <strong>FUTURE V3</strong>

      </div>

    </>

  );

}
