import logo from './logo.svg';
import './App.css';
import WebCam from "react-webcam";
import imageFrame from "./images/zoom_frame.png"
import imageWoman from "./images/zoom_woman.png"

function App() {
  return (
    <div className="App">
      <div className="Zoom">
        <div className="ZoomBackground">
          <img  height="600px" src={imageFrame} alt="Zoom Meeting"></img>
          <div className="WebCamera2Big">
            <img  height="80" width="106" src={imageWoman} alt="Zoom Meeting"></img>
            <div className="YourName">Julia M.</div>
          </div>
          <div className="WebCameraBig">
              <WebCam
                height={360}
                width={426}
              />
              <div className="YourName">You</div>
          </div>
          <div className="Chat">
            <div className="ChatText">
              <div className="Instructions">
                <b>Before starting, read the following instructions:</b> <br></br><br></br>
                <b>Step 1:</b> Allow this website to use your camera on the top of your browser (Your image will not be seen by anybody. Only you can access it); <br></br>
                <b>Step 2:</b> Make sure that your face is in the frame; <br></br>
                <b>Step 3:</b> Read the entire text titled "Planning your Vacation" bellow; <br></br>
                <b>Step 4:</b> Take a photo or press the "print screen" button on your keyboard and save your image with Julia. You will be asked to upload this image at the end of the questionnaire;<br></br>
                <b>Step 5:</b> Enjoy the task :)<br></br><br></br>
              </div>
              <center>------------------------------ <br></br><br></br></center>
              <center><b>PLANNING YOUR VACATION:</b> <br></br><br></br></center>

              You are planning a 5-night Southern Caribbean Cruise vacation during Spring break. You decide to look for a vacation package that includes shipboard accommodations, ocean transportation, all meals and beverages, and all onboard entertainment.<br></br><br></br>
              After a lot of research, you find that vacation packages that you like range from about $700 to $1,300, the more expensive packages for cruises offering you fancier rooms. Because money is a concern, you don’t want to spend any more than you have to.<br></br><br></br>
              Now, are you talking through Zoom with Julia, from CruiseVacations.com, who lets you negotiate a purchase price for vacation packages. Julia provides information about the cruise line as well as a description of the deals, along with a listing price for the vacation package.<br></br><br></br>
              You then negotiate with Julia to decide your purchase price. As is common in negotiations, you can either accept the listed price as is, or you can make a lower offer. Cruise Vacations can then either accept or reject your offer. While you would like to go on a week-long cruise, you don’t want to overpay. You also don’t want to offer a very low price, as it might get rejected and you won’t get another chance to negotiate the price of this package.<br></br><br></br> 
              Julia offered to you a package that includes shipboard accommodation of your choice (it includes a private balcony with a beautiful view). This package also includes ocean transportation, all meals and beverages, and all onboard entertainment. It looks like a great package indeed. You would spend a few relaxing days away from work and from studying. As you look at Julia on your screen, you think about how much you want to pay for this package.<br></br><br></br>
            </div>  
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default App;
