import * as React from 'react'

let css = `
* {
  box-sizing: border-box;
}
.color--blue {
  color: #007AFF;
}
html, body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
               Helvetica, Arial, sans-serif, "Apple Color Emoji",
               "Segoe UI Emoji", "Segoe UI Symbol";
}
.react-password-manager {
  display: flex;
  width: 100%;
  height: 100%;
}
.react-password-sheet-mask {
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: fixed;
  pointer-events: none;
  background: rgba(0,0,0,0.175);
  transition: opacity 0.3s ease-out;
}
.react-password-sheet {
  top: 0;
  right: 0;
  opacity: 0;
  width: 50%;
  height: 100vh;
  background: #fff;
  position: fixed;
  transform: translateX(100%);
  box-shadow: -8px 0 40px rgba(0,0,0,.135);
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.react-password-sheet-content {
  padding: 16px;
}
.react-password-list-view {
  width: 100%;
  height: 100%;
  display: flex;
  min-width: 440px;
  border-right: 1px solid rgba(0,0,0,.05);
  flex-direction: column;
}
.react-password-list-view-header {
  height: 64px;
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0,0,0,.05);
}
.react-password-list-view-header-title {
  line-height: 44px;
  font-size: 1.1rem;
  font-weight: 600;
}
.react-password-list-view-header-action {
  line-height: 44px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
.react-password-list-view-header-action:hover {
  opacity: 0.8;
}
.react-password-list-view-header-action:active {
  opacity: 0.6;
}
.react-password-list-view-header,
.react-password-list-view-search,
.react-password-list-view-search-facets {
  height: 44px;
  background: white;
}
.react-password-list-view-search-header {
  height: 88px;
  overflow: hidden;
}
.react-password-list-view-search-header,
.react-password-list-view-search {
  border-bottom: 1px solid rgba(0,0,0,.05);
}
.react-password-list-view-header-title,
.react-password-list-view-search-layer {
  transform: translateY(0);
  transition: transform 0.2s ease-out;
}
.react-password-list-view-search-cancel {
  position: absolute;
  right: 16px;
  top: 13px;
  opacity: 0;
  cursor: pointer;
  font-size: 16px;
  pointer-events: none;
  transform: translate3d(125%,0,0);
  transition: transform 0.15s ease-out, opacity 0.2s ease-out;
}
.facet-visible .react-password-list-view-search-cancel {
  opacity: 1;
  pointer-events: all;
  transform: translate3d(0,0,0);
}
.facet-visible .react-password-list-view-search-cancel:hover {
  opacity: 0.8;
}
.facet-visible .react-password-list-view-search-cancel:active {
  opacity: 0.6;
}
.react-password-list-view-search-facets,
.react-password-list-view-search {
  padding: 8px 16px;
  position: relative;
}
.react-password-list-view-search-facets {
  display: flex;
}
.react-password-list-view-search-facets-item {
  padding: 0 8px;
  margin-right: 8px;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 24px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  cursor: pointer;
}
.react-password-list-view-search-facets-item:hover {
  background: rgba(0,0,0,.025);
}
.react-password-list-view-search-facets-item:active {
  background: rgba(0,0,0,.045);
}
.react-password-list-view-search-input {
  position: relative;
  z-index: 2;
  width: 100%;
  height: 28px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 6px;
  -webkit-appearance: none;
  padding: 4px 8px 4px 32px;
  background: rgba(0,0,0,.05);
  transition: width 0.125s ease-out;
}
.react-password-list-view-search-input:hover,
.react-password-list-view-search-input:focus {
  background: rgba(0,0,0,.075);
}
.react-password-list-view-search-icon {
  position: absolute;
  top: 50%;
  left: 25px;
  fill: #777;
  transform: translateY(-50%);
}
.facet-visible .react-password-list-view-header-title {
  transform: translateY(-100%);
}
.facet-visible .react-password-list-view-search-layer {
  transform: translateY(-50%);
}
.facet-visible .react-password-list-view-search-input {
  width: calc(100% - 66px);
}
.react-password-list-view-item {
  display: flex;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0,0,0,.05);
}
.react-password-list-view-item:hover {
  cursor: pointer;
  background: rgba(0,0,0,.025);
}
.react-password-list-view-item:active {
  cursor: pointer;
  background: rgba(0,0,0,.045);
}
.react-password-list-view-item-icon {
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border-radius: 17%;
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
}
.react-password-list-view-item-text {
  font-size: 0.9rem;
}
.react-password-list-view-item-title {
  font-size: 0.9rem;
  font-weight: 500;
}
.react-password-list-view-item-subtitle {
  color: #a2acb6;
  font-size: 0.7rem;
}
@media (max-width: 767px) {
  .react-password-list-view {
    width: 50%;
  }
}
.react-password-strength-indicator {
  width: 100%;
  display: flex;
  margin-top: 8px;
  justify-content: space-between;
}
.react-password-strength-bar {
  height: 8px;
  width: 23.5%;
  background: #e8e8e8;
}
.react-password-strength-bar--red {
  background: #EC4C47;
}
.react-password-strength-bar--yellow {
  background: #F7D154;
}
.react-password-strength-bar--green {
  background: #47B881;
}
.react-password-strength-bar:first-of-type {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.react-password-strength-bar:last-of-type {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.react-password-input {
  padding: 0 10px;
  min-width: 300px;
  line-height: 32px;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgba(67, 90, 111, 0.3) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.14) 0px 1px 2px inset;
  font-size: 16px;
  color: #425A70;
  outline: none;
  border: none;
}
.react-password-input[readonly] {
  background: #f8f8f8;
  cursor: default;
  opacity: 0.8;
}
.react-password-input-label {
  margin: 4px 0;
  display: block;
  font-size: 12px;
  font-weight: 500;
}
.react-password-credential-view {
  width: 100%;
}
.react-password-credential-header {
  display: flex;
  height: 88px;
  padding: 16px;
  align-items: center;
  border-bottom: 1px solid rgba(0,0,0,.05);
}
.react-password-credential-content {
  padding: 16px;
}
.react-password-credential-card {
  padding: 16px;
  background: white;
  border-radius: 3px;
  box-shadow: rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 2px 4px -2px;; 
}
.react-password-hint {
  display: inline-block;
  margin-top: 8px;
  font-size: 12px;
  color: #8e8e8e;
}
.react-password-credential-empty-view-text {
  text-align: center;
  max-width: 400px;
  color: #8e8e8e;
}

.react-password-button {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  vertical-align: middle;
  text-decoration: none;
  transition: box-shadow 80ms ease-in-out;
  appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  cursor: pointer;
  background: #fff;
  color: #425a70;
  font-weight: 500;
  line-height: 32px;
  height: 32px;
  padding: 0 16px;
  min-width: 80px;
  border-radius: 3px;
  font-size: 12px;
  user-select: none;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(to bottom, #FFFFFF, #F4F5F7);
  background-image: -moz-linear-gradient(to bottom, #FFFFFF, #F4F5F7);
  background-image: linear-gradient(to bottom, #FFFFFF, #F4F5F7);
  box-shadow: rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px -1px 1px 0px inset;
  -webkit-transition: box-shadow 80ms ease-in-out, background 80ms ease-in-out;
  -moz-transition: box-shadow 80ms ease-in-out, background 80ms ease-in-out;
}
.react-password-button:not([disabled]):not([data-disabled]):focus,
.react-password-button:not([disabled]):not([data-disabled]):focus {
  z-index: 2;
  box-shadow: 0 0 0 3px rgba(1,108,209,0.301), inset 0 0 0 1px rgba(67,90,111,0.204), inset 0 -1px 1px 0 rgba(67,90,111,0.204);
}
.react-password-button:hover {
  background-image: -webkit-linear-gradient(to bottom, #FAFBFB, #EAECEE);
  background-image: -moz-linear-gradient(to bottom, #FAFBFB, #EAECEE);
  background-image: linear-gradient(to bottom, #FAFBFB, #EAECEE);
}
.react-password-button:active {
  background-image: none;
  background-color: rgba(16, 112, 202, 0.09);
  box-shadow: rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset, rgba(67, 90, 111, 0.06) 0px 1px 1px 0px inset;
}
.react-password-button--blue:not([disabled]) {
  color: #fff;
  background-color: #015ebd;
  box-shadow: inset 0 0 0 1px rgba(67,90,111,0.204), inset 0 -1px 1px 0 rgba(67,90,111,0.204);
  background-image: -webkit-linear-gradient(to top, #0165c7, #0173df);
  background-image: -moz-linear-gradient(to top, #0165c7, #0173df);
  background-image: linear-gradient(to bottom, #0788DE, #116AB8);
}
.react-password-button--blue:not([disabled]):hover {
  background-image: -webkit-linear-gradient(to top, #015ebd, #016cd1);
  background-image: -moz-linear-gradient(to top, #015ebd, #016cd1);
  background-image: linear-gradient(to top, #015ebd, #016cd1);
}
.react-password-button--blue:not([disabled]):active {
  box-shadow: inset 0 0 0 1px rgba(67,90,111,0.204), inset 0 -1px 1px 0 rgba(67,90,111,0.204);
  background-image: -webkit-linear-gradient(to top, #0055b0, #004ca3);
  background-image: -moz-linear-gradient(to top, #0055b0, #004ca3);
  background-image: linear-gradient(to top, #0055b0, #004ca3);
}
.react-password-button[disabled] {
  pointer-events: none;
  opacity: 0.8;
}
`

export const Styles = () => <style dangerouslySetInnerHTML={{ __html: css }} />
