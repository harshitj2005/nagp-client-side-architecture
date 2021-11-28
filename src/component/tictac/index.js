import React,{useEffect} from 'react';
import './bootstrap.min.css'
import './tictac.scss'

function Tictac (){
	useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "/tictacScript.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);
    return (
		<>
		<div className="app">
			<div className="container-fluid app-container">
	    	<div className="row app-row">
		    	<div className="col-xs-4 play-box" id="0">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box" id="1">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box last-right" id="2">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box" id="3">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box" id="4">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box last-right" id="5">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box last-bottom" id="6">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box last-bottom" id="7">
		    		<div className="symbol"></div>
		    	</div>
		    	<div className="col-xs-4 play-box last-right last-bottom" id="8">
		    		<div className="symbol"></div>
		    	</div>
		    </div>
			</div>
		</div>
		<div className="modal fade app-modal" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
		  <div className="modal-dialog modal-size">
		    <div className="modal-content">
		      <h3 className="content heading">Warning!!!</h3>
		      <hr className="warning-hr"></hr>
		      <div className="content body">
			      Please save your time and don't even think you're smart. <br></br><strong><em>I'M SMARTER THAN YOU! HA-HA-HA!!!</em></strong> <br></br>
			      Wana try me? Chose : <br></br>
			      <div className="center-block symbol-options">
			      	<button className="symbol-option btn btn-default btn-md" data-dismiss="modal">X</button> OR <button className="symbol-option btn btn-default btn-md" data-dismiss="modal">O</button>
			      </div>
		      </div>
		    </div>
		  </div>
		</div>
		</>
    );
}

export default Tictac;