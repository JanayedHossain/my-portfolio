import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section className="w-[90%] mx-auto mb-16">
      <h2 className="text-2xl sm:text-3xl font-semibold ">Educational Qualification</h2>
      <hr className="border-gray-300 mt-3 mb-10" />
      <div className="space-y-8">
       
        <div className="flex items-center justify-center gap-6 p-6 rounded-2xl bg-base-100 dark:bg-base-300 shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaGraduationCap className="text-5xl text-secondary" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Diploma in Engineering
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              2020 - 2024 | Computer Technology
            </p>
          </div>
        </div>

       
        <div className="flex items-center justify-center gap-6 p-6 rounded-2xl bg-base-100  shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaSchool className="text-5xl text-secondary" />
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              SSC - Fatullah Pilot High School
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              2019 - 2020 | Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
