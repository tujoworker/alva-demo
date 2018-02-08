/**
 * Global App Style
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

import { css } from 'react-emotion'

export default css`
  font-size: 0.5em; /* We could use rem; here if HTML element has synamic font sizing! */

  fieldset {
    /*background-color: red !important;*/
    /*stacking fieldsets above each other*/
    position: relative;

    border: 0 none;
    border-radius: 3px;
    box-sizing: border-box;

    background: white;
    /*box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);*/
  }
  label {
    display: block;
    font-size: 2em;
    color: black;
    padding: 0 0 0.4em;
  }
  .form_con {
    position: relative;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
  }
  .input_set {
    margin-top: 0.8em;
    margin-bottom: 2em;
  }
  .err_msg {
    cursor: default;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: absolute;
    right: -4px;
    width: 30vw;
    max-width: 30vmin;
    min-height: 2.6em;
    padding: 0.6em 1.2em;

    border-radius: 6px;
    background-color: rgba(255, 10, 50, 0.8);

    font-size: 1.7em;
    color: white;
    /*text-align: center;*/
    line-height: 1.5em;
  }
  .err_msg:before {
    content: '';
    position: absolute;
    /*display: flex;*/
    /*justify-content: center;*/
    /*left: -0.8em;*/
    top: 40%; /*firefox fix*/
    left: -11px;
    border-color: rgba(255, 10, 50, 0.8) transparent;
    /*border-color: black transparent;*/
    border-style: solid;
    border-width: 0 6px 10px 6px;
    /*border-width: 0 0.6em 0.8em 0.6em;*/
    /*height: 0;
        width: 0;*/
    transform: rotate(-90deg);
  }

  /*.err_msg:after {
        content: '';
        position: absolute;
        left: -6px;
        top: 100%;
        border-color: black transparent;
        border-style: solid;
        border-width: 8px 8px 0px 8px;
        height: 0px;
        width: 0px;
    }*/

  input,
  textarea {
    width: 100%;
    /*padding: 15px 15px 14px;*/
    /*padding: .15em .15em .14em;*/
    padding: 1em 1em 0.8em;
    /*padding: 1.5rem 1.5rem 1.4em;/* We could use rem; here if HTML element has synamic font sizing! */
    */: 0.15em;

    font-size: 2em;
    /*font-size: 2em;*/
    font-weight: 100;
    color: #2c3e50;

    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  /*buttons*/
  .action-button {
    padding: 0.6em 1em;
    margin: 0.2em 0.2em;
    width: 5em;

    background: #27ae60;
    font-weight: bold;
    font-size: 2em;
    color: white;
    border: 0 none;
    border-radius: 2px;
    cursor: pointer;
  }
  .action-button:hover,
  .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #27ae60,
      0 0 0 5px rgba(222, 234, 42, 0.4);
  }
`
