import React from "react";
import CardTitle from "../atoms/cardTitle";
import SkillBar from "../atoms/skillBar";
import Callout from "../organisms/callout";

export const Tabs = (color: any) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex">
        <div className="w-full">
          <ul className="flex flex-auto list-none pt-3 pb-4 flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-3" role="tablist">
            <li className="flex flex-auto text-center hover:shadow-md hover:shadow-rai-blue hover:-translate-y-2">
              <a className={
                  "w-full text-xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-rai-black " +
                  (openTab === 1 ? "bg-rai-green" : "bg-rai-bone")}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist">
                Skills
              </a>
            </li>
            <li className="flex flex-auto text-center hover:shadow-md hover:shadow-rai-blue hover:-translate-y-2">
              <a className={
                  "w-full text-xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-rai-black " +
                  (openTab === 2 ? "bg-rai-green" : "bg-rai-bone")}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist">
                 Education
              </a>
            </li>
            <li className="flex flex-auto text-center hover:shadow-md hover:shadow-rai-blue hover:-translate-y-2">
              <a className={
                  "w-full text-xl font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-rai-black " +
                  (openTab === 3 ? "bg-rai-green" : "bg-rai-bone")}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist">
                 Experience
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
            <div className="px-4 py-5 flex-auto m-auto w-full">
              <div className="tab-content tab-space flex-auto">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  { /** Skills Content Block */ }
                  <div className='m-auto xl:max-w-3xl pb-5'>
                    <CardTitle title='Languages' />
                    <SkillBar skill='C#'length='w-full'/>
                    <SkillBar skill="JavaScript" length="w-full" />
                    <SkillBar skill="TypeScript" length="w-full" />
                    <SkillBar skill="HTML" length="w-full" />
                    <SkillBar skill='CSS'length='w-3/4'/>
                    <SkillBar skill='Java'length='w-1/2'/>
                    <SkillBar skill='php'length='w-1/2'/>
                  </div>
                  <div className='m-auto xl:max-w-3xl pb-5'>
                    <CardTitle title='Frameworks' />
                    <SkillBar skill='ASP.NET' length='w-full' />
                    <SkillBar skill='EF6' length="w-3/4" />
                    <SkillBar skill='Next.js'length='w-3/4' />
                    <SkillBar skill="React" length="w-1/2" />
                    <SkillBar skill="Angular" length="w-1/2" />
                  </div>
                  <div className='m-auto xl:max-w-3xl pb-5'>
                    <CardTitle title='Data Analytics and Cloud Solutions' />
                    <SkillBar skill='SQL'length='w-full'/>
                    <SkillBar skill='ETL Process'length='w-full'/>
                    <SkillBar skill='CRUD'length='w-3/4'/>
                    <SkillBar skill="Talbeau" length="w-3/4" />
                    <SkillBar skill='No-SQL' length='w-1/2'/>
                    <SkillBar skill='GCP' length='w-1/2'/>
                    <SkillBar skill='AWS' length="w-1/2" />
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  { /** Education Content Block */ }
                  <div className='rounded-full space-y-10 xl:text-end'>
                    <Callout title='University of Wisconsin Stevens Point' imgsrc='/uwsp.webp' date='09/2020 to 05/2022'>
                      <ul>
                        <li className='pb-16'>
                          <span className='text-xl block'>Bachelors of Science</span>
                          <span className="text-xs">Earned May 2022</span>
                        </li>
                        <li className='pb-4'>
                          <span className='text-md'>Major in Computor Information Systems</span>
                        </li>
                        <li>
                          <span className='text-md'>Minor in Web Development</span>
                        </li>
                      </ul>
                    </Callout>
                    <Callout title='Northcentral Technical College' imgsrc='/ntc.webp' date="09/2017 to 12/2019">
                      <ul>
                        <li className='pb-16'>
                          <span className='text-xl block'>Internet Technology Associates Degree</span>
                          <span className="text-xs">Earned May 2019</span>
                        </li>
                        <li className='pb-4'>

                          <span className='text-md'>Focus on Software Development</span>
                        </li>
                        <li>
                          <span className='text-md'>Data Analysis Specialist Certificate</span>
                        </li>
                      </ul>
                    </Callout>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  { /** Experience Content Block */ }
                  <div className='m-auto pb-5 rounded-full space-y-10 xl:text-end'>
                    <Callout title='University of Wisconsin Stevens Point' imgsrc='/uwsp.webp' date='01/2022 to 05/2022'>
                      <ul className="">
                        <li className='pb-6'>
                          <span className='text-xl block'>IT Support</span>
                          <span className="text-xs">Spring of 2022</span>
                        </li>
                        <span className="text-xl">Responsibilies</span>
                        <li className='pb-4'>
                          <span className='text-md'>Updated server used for admittance day event to patch a security vulnerability</span>
                        </li>
                        <li className='pb-4'>
                          <span className='text-md'>Provided support and training for event staff during the event</span>
                        </li>
                        <li>
                          <span className='text-md'>Worked in a team using WordPress to redesign the SGA section of the universities website</span>
                        </li>
                      </ul>
                    </Callout>
                    <div className="h-screen"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
