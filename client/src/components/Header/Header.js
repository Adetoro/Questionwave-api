import React from 'react';
import { withRouter } from "react-router-dom";
import logo from './logo.svg';

import './header.css';

function Header({history}) {
    return (
      <div className=" sm:w-12/12 mx-auto  top-0 bg-white">
        <div className=" md:w-10/12 mx-auto sm:px-10 px-5
        pt-5  ">
          <div className="cursor-pointer flex justify-between items-center w-full" onClick={() => history.push('/')}>
            <div>
              <img  alt='logo' src={logo} className="image-rendering"/> 
            </div>
            <div className="producthunt-badge">
              <a href="https://www.producthunt.com/posts/questionwave?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-questionwave" target="_blank">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=308661&theme=light&period=daily"
                alt="Questionwave - The easiest way to take questions from your audience | Product Hunt" 
              style="width: 200px; height: 50px;" width="200" height="50" />
              </a>
            </div>
          </div>
        </div>
        <div className="custom-shape-divider-top-1617219337">
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 160" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
         </svg>
        </div>
      </div>

       
    );
  }
  
  export default withRouter(Header);
  