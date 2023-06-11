import React from 'react';
import '../styles/_App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {addDigit, deleteDigit, setEquation, addEquation, deleteEquation} from '../redux/actions';
import PropTypes from 'prop-types';
import $ from 'jquery';


//Calculator component
class Calculator extends React.Component {

constructor(props){
  super(props);

  //using redux state

  this.backspace = this.backspace.bind(this);
  this.inputDecimal = this.inputDecimal.bind(this);
  this.inputDigit = this.inputDigit.bind(this);
  this.inputOperator = this.inputOperator.bind(this);
  this.clearDisplay = this.clearDisplay.bind(this);
  this.calculate = this.calculate.bind(this);
  this.parseEquation = this.parseEquation.bind(this);
}

//function to go back one digit
backspace = () => {

//decrement the array by one digit
  if(this.props.equation.length > 1) {
  this.props.deleteDigit();
}else{
  //if on the last digit turn to 0
  this.props.deleteEquation();
}

}

//function to input a decimal
inputDecimal = (dot) => {

this.props.addDigit(dot);

}

//function to input a digit
  inputDigit = (digit) => {
   
    this.props.addDigit(digit);

  };

//function to input an operator
  inputOperator = (operator) => {

   this.props.addDigit(operator);
    
  };

//function to clear the display
  clearDisplay = () => {

    this.props.deleteEquation();  

  };

//function to call eval and calculate the equation
calculate = async () => {

    let result;
    let postParse = '';

    try {

      //parseEquation removes extra operators and returns a valid equation
      postParse = this.parseEquation(this.props.equation);

      //Math.js evaluate function returns the result of the equation
      //result = eval(postParse);
      result = String(eval(postParse));
      


      //add reult to current equation and  add to equation to the equation array
      this.props.addEquation(postParse + ' = ' + result);
      this.props.setEquation(result);

    } catch (error) {

      result = 'Enter a valid equation';
      this.props.addEquation(result);

    }
};


  //function to parse the equation
  parseEquation = (equation) => {

      let newI = 0;
      let substringArray= [];
      let indexArray = [];
  
     //find the start of a substring
     for(let i = 0; i < equation.length; i++){
      

        if(equation[i] === '+' || equation[i] === '-' || equation[i] === '*' || equation[i] === '/'){
          //find the end of substring
              for(let j = i; j < equation.length; j++){
  
                if(equation[j] === '+' || equation[j] === '-' || equation[j] === '*' || equation[j] === '/'){
                  
                  
                  continue;
                }
                //next loop starts at end of substring
                newI = j;

                //check if last number is negative
                if(equation[j-1] === '-'){
                  j = j - 1;
                }
  
             indexArray.push(i) 
             indexArray.push(j-2);

           //exit substring finder loop
           break;
              }//end of second for loop
             i = newI - 1;
        }// end of if statement 

        //check for end with operator
        if (isNaN(equation[equation.length - 1]) && equation[equation.length - 1] !== '.'){
          return 'Enter a valid equation';
        }

     }//end of outer for loop
  
      //iterate through substring Array and replace the substring with '' which will remove it from the equation
     for(let i = 0; i < indexArray.length; i = i + 2){
     //add substrings to array
      substringArray.push(equation.substr(indexArray[i], indexArray[i+1] - indexArray[i] + 1));
      }
    //replace each substring
      for(let i = 0; i < substringArray.length; i++){
        equation = equation.replace(substringArray[i], '');
      }
    
     return equation;
  }//end of function

//handlers for changing title when hovering calculator
  handleMouseEnter = () => {
    let myspan3 = document.getElementById('span3');
    let myspan2 = document.getElementById('span2');
    let mytitle = document.getElementById('center');
    mytitle.classList.add('transformTitle');
    myspan3.classList.add('transformNodes');
    myspan2.classList.add('transformNodes');
  };

  handleMouseExit = () => {
    let myspan3 = document.getElementById('span3');
    let myspan2 = document.getElementById('span2');
    let mytitle = document.getElementById('center');
    mytitle.classList.remove('transformTitle');
    myspan3.classList.remove('transformNodes');
    myspan2.classList.remove('transformNodes');
  };
  

//jQuery to change title color when hovering equals
jQuerycode = () => {
  $(".equationHistory").on({
  mouseenter:  function(){ 
    $('.display').addClass('button-hover')
    $('.numbers').addClass('button-hover')
    $('.operators').css('color', '#fa725a')
    $('#backspace').css('color', '#ffbb00')
    $('#clear').css('color', '#92dcff')
    $('#equals').css('color', '#49bcfa')
  },
  mouseleave:
   function(){
    $('.display').removeClass('button-hover')
    $('.numbers').removeClass('button-hover')
    $('.operators').css('color', '')
    $('#backspace').css('color', '')
    $('#clear').css('color', '')
    $('#equals').css('color', '')
   }
  });
}
componentDidMount(){
  this.jQuerycode()
} 


  //render method
  render() {
    return (
      <div className="app">
        
        <div className="title">
        <div className="center" id="center"><h1>
        <span id="span1">Calculator</span>
        <span id="span2">Calculator</span>
        <span id="span3">Calculator</span>
        </h1></div></div>
        
        <div className="styleChange">
        </div>
        
        <div className="calculator container" onMouseOver={this.handleMouseEnter} onMouseOut={this.handleMouseExit}>
          
          <div className="row">

            <div className="col-sm-12 m-0 p-0">
              {/*display*/}
              <div className="display">{this.props.equation}</div>
              </div>

            <div className="col-sm-3 m-0 p-0">
              {/*operators*/}
              <div className="row">

                <div className="col-sm-12 buttons p-0">
                  <button className=" operators" id="multiply" onClick={() => this.inputOperator('*')}>*</button>
                </div>

                <div className="col-sm-12 buttons p-0">
                  <button className=" operators" id="divide" onClick={() => this.inputOperator('/')}>/</button>
                </div>

                <div className="col-sm-12 buttons ">
                  <button className=" operators" id="add" onClick={() => this.inputOperator('+')}>+</button>
                </div>
                
                <div className="col-sm-12 buttons ">
                  <button className=" operators" id="subtract" onClick={() => this.inputOperator('-')}>-</button>
                </div>

              </div>
            </div>

            <div className="col-sm-6 m-0 p-0">
              {/*numbers . =*/}
              <div className="row"  aria-label="Basic example">

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="one"onClick={() => this.inputDigit(1)}>1</button>
                </div>

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="two" onClick={() => this.inputDigit(2)}>2</button>
                </div>

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="three " onClick={() => this.inputDigit(3)}>3</button>
                </div>
                

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="four" onClick={() => this.inputDigit(4)}>4</button>
                </div>

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="five" onClick={() => this.inputDigit(5)}>5</button>
                </div>

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="six" onClick={() => this.inputDigit(6)}>6</button>
                </div>


                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers"  id="seven" onClick={() => this.inputDigit(7)}>7</button>
                </div>

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="eight" onClick={() => this.inputDigit(8)}>8</button>
                </div>

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="nine" onClick={() => this.inputDigit(9)}>9</button>
                </div>

                <div className="col-sm-4 buttons p-0">
                  <button className=" numbers" id="decimal" onClick={() => this.inputDecimal('.')}>.</button>
                </div>

                <div className="col-sm-8 buttons p-0">
                  <button className=" numbers" id="zero" onClick={() => this.inputDigit(0)}>0</button>
                </div>
    
              </div>
            </div>


            <div className="col-sm-3 m-0 p-0">
            {/* back clear*/}
              <div className="row">

                <div className="col-sm-12 buttons ">
                  <button className=""id="backspace"onClick={this.backspace}>back</button>
                </div>

                <div className="col-sm-12 buttons ">
                  <button className="" id="clear" onClick={this.clearDisplay}>AC</button>
                </div>
                
                <div className="col-sm-12 buttons ">
                  <button className="equals" id="equals" onClick={this.calculate}>=</button>
                </div>

              </div>
            </div>

          {/* end containrer*/}
        
          </div>

          {/* end calculator*/}
        </div>  

        <div id="equationHistory" className="overflow-auto p-2 equationHistory">
            
            {this.props.equationArray.map((val, key) => {return <div className="equation" key={key}>{val}</div>;})}
            
        </div>
            
            {/* end app*/}
      </div>

    );
  }
}//end calculator class

//Connect redux logic
Calculator.propTypes = {
  equation: PropTypes.string.isRequired,
  equationArray: PropTypes.array.isRequired,

  deleteDigit: PropTypes.func.isRequired,
  addDigit: PropTypes.func.isRequired,
  setEquation: PropTypes.func.isRequired,
  addEquation: PropTypes.func.isRequired,
  deleteEquation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    equation: state.equation,
    equationArray: state.equationArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addDigit: (digit) => dispatch(addDigit(digit)),
    deleteDigit: () => dispatch(deleteDigit()),
    setEquation: (equation) => dispatch(setEquation(equation)),
    addEquation: (equation) => dispatch(addEquation(equation)),
    deleteEquation: () => dispatch(deleteEquation()),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Calculator);

//export the redux connected component
export default Container;
