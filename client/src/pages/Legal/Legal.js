import React from 'react';
import './Legal.css';

const Legal = (props) => {
    function Mailto({ email, subject, body, ...props }) {
        return (
          <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
          </a>
        );
      }
    
        return (
            <div id="container" className="md:w-10/12 mx-auto px-10 py-12">
                <div className="text-4xl font-semibold text-center">
                Terms of use
                </div>
                <div className="pt-3 text-base font-normal space-y-4 legalterms ">
                     <p>Welcome to Questionwave. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Questionwave's relationship with you in relation to this website.</p>
                    
                    <p>The term Questionwave or 'us' or 'we' refers to the owner of the website.</p>

                    <p>The term 'you' refers to the user or viewer of Questionwave's website.</p>

                    <p>The use of this website is subject to the following terms of use:</p>
                    <ul className="list-outside list-disc">
                        <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                        <li>When you publish content or information, it means that you are allowing everyone to access and use that information.</li>
                        <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                        <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
                        <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms of use.</li>
                        <li>All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.</li>
                        <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                        <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                        <li>Effort is made to keep the website up and running smoothly. However, Questionwave takes no responsibility for, and will not be liable for, the website being unavailable due to technical issues.</li>
                        <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of the Federal Republic of Nigeria.</li>
                    </ul>
               	

                <p><span>If you have any questions about this policy, please contact us via email at</span> <Mailto  email="support@questionwave.com" >
                 support@questionwave.com. 
                  </Mailto> </p>

                </div>
             
              
            </div>
                
        );
    }
  
  export default Legal;
  