import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const Header = () => {
  return (
    <>
      <h1><u>ABOUT</u></h1>
      <p> ➱ Working on electronic projects at the workbench, whether prototyping with a circuit, powering a small desktop device, or simply testing a component, all require a specified source of power. </p>
      <p> ➱ Using power adapters and other DC sources such as batteries won't always be enough as they're only temporary power solutions.</p>
      <p> ➱ This is where the variable Lab Bench Power Supply unit comes in being a hands-down essential apparatus to have on any maker's workbench. </p>
      <p> ➱ With this homemade variable Power Supply unit, you can set a specific voltage (0-36V) and current limit (0-5A) for that circuit you want to power. </p>
      <p> ➱ The device even has some common fixed voltage outputs at the front as well.</p>
      <p> ➱ To top things off, all these power features internally are fully temperature regulated with the heat-activated fan seen at the top of the Power Supply Unit.</p>
      <p> ➱ Having all of these features handy, you'll be even more well-equipped in the world of hobby electronics.</p>
      <p> ➱ Today, with this Instructable, you'll learn how to make a similar Power Supply of your own, the DIY way.</p>
<br></br>
      <h1><u>DESIGN</u></h1>
      <h3>COMPONENTS REQUIRED:</h3>
      <p> • DUAL VOLTMETER AMMETER PANEL (100V 10Amp)</p>
      <p> • STEP DOWN BUCK CONVERTER (10Amp)</p>
      <p> • POTENTIOMETER (10K)</p>
      <p> • SWITCHED MODE POWER SUPPLY(10Amp 24V)</p>
      <p> • DC FAN (5V)</p>
      <p> • SWITCH (16Amp)</p>
      <p> • LED</p>
      <p> • MALE& FEMALE CONNECTORS</p>
      <p> • POTENTIOMETER KNOBS</p>
      <p> • BANANA CLIPS</p>
      <p> • PLYWOOD</p>
      <p> • PVC SHEETS</p>
      <p> • WIRES</p>
      <p> • USB PORT </p>
      <br></br>
      <h1>Let's Start by designing it with the following Designing Steps:</h1>
      <h2><u>STEP 1-Preparing the Unit's Enclosure Shells by using PVC sheets.</u></h2>
      <img src="images/step1.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ By taking PVC sheets we'll begin by marking out areas where we'd want certain components and parts to stick out.</p>
      <p>➱ Afterward, we'll cut out these areas with an angle grinderor instead drill sequenced holes in the shells with a drill machine until you get the desired cutouts.</p>
      <h2><u>STEP 2-Spray Painting</u></h2>
      <img src="images/step2.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ Using the color of choice  we'll spray paint both shells and any other potential parts.</p>
      <p>➱ With the paint being dry, let's give the bottom shell some grippy feet.</p>
      <br></br>
      <h2><u>STEP 3-Mounting Parts and Modules</u></h2>
      <img src="images/step3.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ Here, we can now fixate the selected parts to be fitted into the front and rear faces of the unit.</p>
      <br></br>
      <h2><u>STEP 4-Setting Up Power Modules</u></h2>
      <img src="images/step4.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ Mounting a 100v AC to DC SMPS Converter along with an 10Amp Buck Converter to the base shell, we then connect them up. </p>
      <p>➱ The smaller buck converter steps down the SMPS converter's for a handful of modules within the PSU that run on that lower voltage.</p>
      <p>➱ The buck converter must be tuned to a desired output, continuing with the wiring.</p>
      <br></br>
      <h2><u>STEP 5-Wiring the Electronics Parts and Modules</u></h2>
      <img src="images/step5.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ Starting with the connections, hooking up switches and output ports from the board of components, we'll get the toggle switch to toggle the DC side of the circuit from either being powered through DC input from a battery or straight from the AC-DC SMPS converter within the box.</p>
      <p>➱ Since we won't dive into more detail with the wiring of the Power Supply, I advise you follow the circuit diagram for fewer errors.</p>
      <br></br>
      <h2><u>STEP 6-DIY Heat-activated Fan Circuit</u></h2>
      <img src="images/step6.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ With very few components, we'll make this by cooling the temperature of the unit by adding  5v DC Fan.</p>
      <p>➱ The added benefit of equipping the fan with such a circuit is how quiet the Power Supply unit normally is until things inside get cooking from a heavier load.</p>
      <br></br>
      <h2><u>STEP 7-Mounting the Cooling Fan</u></h2>
      <img src="images/step7.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ We'll hook up the 5V DC Fan to the Temp-controlled Switch circuit board, after being bolted to the upper shell with its fan grill.</p>
      <br></br>
      <h2><u>STEP 8-Securing Down the Digital Power Converter</u></h2>
      <img src="images/step8.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ Finally, the last module we will mount is the Digital DC (Step Down) Variable Power Supply Module.</p>
      <p>➱ A handy installment feature it's got is that the wire terminal block can be disconnected for ease of wiring and reconnected back into the module.</p>
      <br></br>
      <h2><u>STEP 9-Wiring</u></h2>
      <img src="images/step9.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ Dealing with mains power, we're wiring the AC input connector to the input of the SMPS power converter board via a switch to toggle the AC power on/off.</p>
      <p>➱ The single-port outlet at the front is also wired.</p>
      <p>➱ let's make sure that the base is grounded with the power input connector's ground pin, along with any other AC-related modules from around.</p>
      <p>➱ This is a crucial step to take in order to make sure that any leakage Of AC currents don't zap you, but instead drain through the ground path.</p>
      <br></br>
      <h2><u>STEP 10-Tuning and Checking to See How the PSU Works</u></h2>
      <img src="images/step10.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ Plugging the AC cord into an outlet, flicking the AC switch on, then flipping the DC toggle switch down, we have power! We should check each and every module, power output, and input for potential problems, just to check and see that all is working before closing things up.</p>
      <p>➱ Then, let's tune the potentiometer on the Heat-activated Fan circuit to get the fan to only start spinning when things inside start getting warm.</p>
      <br></br>
      <h2><u>STEP 11-Insulating Connections</u></h2>
      <img src="images/step11.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ We'll insulate any exposed module terminals and connections within the enclosure. Hot glue should work well to do so.</p>
      <br></br>
      <h2><u>STEP 12-Closing Things Up</u></h2>
      <img src="images/step12.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ With things properly insulated and fixed in place firmly, let's seat the front and back sides into the bottom base of the unit with superglue.</p> 
      <p>➱ The upper base of the enclosure shouldn't have to be glued for ease of removal when needed.</p>
      <br></br>
      <h2><u>STEP 13-Making the Power Supply's Variable Output Jumper Wires</u></h2>
      <img src="images/step13.jpg" alt="Italian Trulli"></img>
      <br></br>
      <p>➱ The two jumper wires for the output of the Power Supply can be made using AWG thick wire with RCA or Banana style plugs on one end, and  Clips on the other end to clip onto a circuit to test.</p>
      <br></br>
      <h1><u>USER GUIDE</u></h1>
      <br></br>
      <h2><u>STEP 1-How to Use the Power Supply | Setting Power Output</u></h2>

      <p>➱ To quickly run you through how this Power Supply works, it's easier than it seems.</p>

      <p>➱ Pressing on the "ON" button will get you to the overall list of power settings and feature controls within the digital power converter module.</p>
      
      <p>➱ Firstly, the power supply begins by converting the incoming AC mains voltage into a lower AC voltage through a transformer. </p>
      
      <p>➱ This lower voltage AC is then rectified into DC using a bridge rectifier circuit, ensuring that the power supply can handle a wide range of input voltages.</p>

      <p>➱ Next, the rectified DC voltage undergoes smoothing through filter capacitors, reducing any remaining ripple and fluctuations in the output voltage.</p>
      
      <p>➱ This results in a more stable DC output suitable for powering electronic circuits.</p>

      <p>➱ The regulated DC output voltage is achieved through a voltage regulator circuit, which maintains a constant output voltage regardless of changes in input voltage or load conditions.</p>
      
      <p>➱ This regulation can be achieved using either linear or switching voltage regulation techniques, depending on the design requirements and desired performance characteristics.</p>

      <p>➱ To provide flexibility and control to the user, lab bench power supplies often include adjustable voltage and current settings.</p>
      
      <p>➱ These settings can be adjusted using knobs or digital controls, allowing users to tailor the output voltage and current to suit the specific requirements of their projects.</p>

      <p>➱ Furthermore, lab bench power supplies commonly incorporate various protection features to safeguard both the power supply itself and the connected circuits.</p>
      
      <p>➱ These features may include overvoltage protection, overcurrent protection, and short-circuit protection, helping to prevent damage in case of unexpected faults or error.</p>
<br></br>
<h2><u>STEP 2-Testing the Finished Unit</u></h2>

<p>➱ Now that we've gotten the grips on using this Power Supply, let's finally power some things with it! The banana clips make connecting to circuits and components really quick and effective.</p>

<p>➱ Additionally, thanks to these two main specific power converters within the unit, this PSU is fully protected from short circuits and reverse polarity connections between any of the outputs. </p>

<p>➱ That is to say that both have the same protective features making it a secure power supply. </p>

<p>➱ Of course, I just had to try shorting the output leads, just for the sake of it! Another thing about the power supply that makes it unique is that with the main power converter, looking at the display, you can probe with the output leads to even measure voltage and current (Like a Voltmeter/Ammeter) just as you would on a multimeter.</p>
    <br></br>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);