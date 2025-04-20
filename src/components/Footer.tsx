import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Partners</a></li>
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Reports</a></li>
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Bug bounty</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-4">Privacy Notice</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Privacy And GDPR Policy</a></li>
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Cookies Policy</a></li>
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Terms And Conditions</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-4">Our Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Stablebridge Core</a></li>
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Stablebridge Bridge</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#9b87f5] mb-4">For Developers</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">SDK</a></li>
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Integration Guidelines</a></li>
            <li><a href="#" className="hover:text-[#7E69AB] transition-colors">Technical Reference</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-4 border-t border-[#6E59A5]/20 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © {new Date().getFullYear()} All rights reserved. Stablebridge</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#9b87f5] transition-colors">Need assistance?</a>
            <div className="flex space-x-2">
              <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.575-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.049.049 0 0 0-.022.02C1.406 5.613.78 8.573 1.119 11.47a.048.048 0 0 0 .019.039 13.289 13.289 0 0 0 3.998 2.02.052.052 0 0 0 .056-.02c.308-.42.582-.863.818-1.329a.051.051 0 0 0-.028-.07 8.747 8.747 0 0 1-1.248-.595.052.052 0 0 1-.005-.087 6.148 6.148 0 0 0 .212-.181.05.05 0 0 1 .052-.01c2.243.648 4.659.648 6.869 0a.05.05 0 0 1 .053.01c.069.062.138.12.212.181a.052.052 0 0 1-.004.087 8.234 8.234 0 0 1-1.249.595.052.052 0 0 0-.028.07c.24.466.514.909.818 1.329a.052.052 0 0 0 .056.02 13.245 13.245 0 0 0 4.001-2.02.049.049 0 0 0 .019-.039c.423-3.265-.705-6.2-2.975-8.543a.039.039 0 0 0-.022-.02Zm-8.198 6.81c-.994 0-1.81-.894-1.81-1.99 0-1.095.803-1.989 1.81-1.989 1.008 0 1.822.894 1.81 1.99 0 1.095-.803 1.989-1.81 1.989Zm5.322 0c-.993 0-1.81-.894-1.81-1.99 0-1.095.803-1.989 1.81-1.989 1.007 0 1.822.894 1.81 1.99 0 1.095-.803 1.989-1.81 1.989Z"/>
                </svg>
              </a>
              <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.317 4.3698a19.7561 19.7561 0 0 0-4.8583-1.5116.0741.0741 0 0 0-.0784.0371c-.211.3765-.4461.8655-.6106 1.2530-1.8364-.2762-3.68-.2762-5.4958 0-.1645-.3875-.4096-.8765-.6226-1.2530a.077.077 0 0 0-.0784-.0371 19.7561 19.7561 0 0 0-4.8583 1.5116.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.3184 13.5799.0923 18.0578a.0824.0824 0 0 0 .0312.0561c2.0341 1.5979 4.0661 2.568 6.0554 3.2174a.0777.0777 0 0 0 .0084-.0552c.4686-.6715.8872-1.3767 1.2531-2.1180a.076.076 0 0 0-.0416-.1062c-.6954-.2794-1.3627-.6213-2.0011-1.0074a.076.076 0 0 1-.0076-.1261c.135-.1011.27-.2058.3987-.3106a.0757.0757 0 0 1 .0079-.0124c2.6576 1.2694 5.5322 1.2694 8.1532 0a.0757.0757 0 0 1 .0079.0124c.1286.1048.2636.2058.3987.3106a.076.076 0 0 1-.0061.1261c-.6384.3861-1.3057.7280-2.0011 1.0074a.076.076 0 0 0-.0416.1062c.3659.7413.7845 1.4465 1.2531 2.1180a.0761.0761 0 0 0 .0084.0552c1.9893-.6494 4.0213-1.6204 6.0554-3.2174a.0773.0773 0 0 0 .0312-.0561c.4552-5.0490-.7623-9.5367-3.2286-13.4586a.061.061 0 0 0-.0321-.0277zM8.02 15.3312c-1.0755 0-1.9611-.9889-1.9611-2.2067s.8688-2.2067 1.9611-2.2067c1.0922 0 1.9730.9889 1.9610 2.2067 0 1.2178-.8688 2.2067-1.9610 2.2067zm7.9702 0c-1.0755 0-1.9611-.9889-1.9611-2.2067s.8688-2.2067 1.9611-2.2067c1.0922 0 1.9730.9889 1.9610 2.2067 0 1.2178-.8688 2.2067-1.9610 2.2067z"/>
                </svg>
              </a>
              <a href="#" className="text-[#7E69AB] hover:text-[#9b87f5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33zM9.75 15.02V8.98l5.75 3.02-5.75 3.02z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
