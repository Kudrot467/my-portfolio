const About = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row-reverse py-5"> 
      <div>
        <div className="card bg-base-100 shadow-xl py-5 px-5">
          <p>
            <div className="mb-3">
                <p className="font-bold">
                🌱 I’m currently learning and exploring the latest in web
            development, deepening my understanding of the MERN stack, and
            staying up-to-date with industry trends.
                </p>
            </div>
            <div className="mb-3">
                <p className="font-bold">
                👯 I’m looking to
            collaborate on Innovative projects that challenge and inspire. If
            you have a cool idea or need an extra pair of hands, lets create
            something awesome together! 
                </p>

            </div>
           <div className="mb-3">
            <p className="font-bold">
            🤔 I’m looking for help with Continuous
            improvement! I am open to learning from experienced developers and
            am always appreciative of constructive feedback on my projects.
            </p>
           </div>
            <div className="mb-3">
                <p className="font-bold">
                💬Ask me about Anything related to the MERN stack, web development,
            PHP/C++/C#. I am here to share knowledge and learn from the
            community! 
                </p>
            </div>
            <div className="mb-3">
                <p className="font-bold">
                ⚡ Fun fact: I have a peculiar love affair with errors.
                </p>
            </div>
          </p>
         <div className="flex flex-col md:flex-row justify-between bg-[#fd670a] text-white rounded-xl p-4 font-bold text-center">
         <div  >
            <h4>Name:</h4>
            <p>Md.Kudrot-E-Khoda </p>
          </div>
          <div>
            <h4>Email:</h4>
            <p>kkudrotekhoda@gmail.com</p>
          </div>
          <div>
            <h4>Date of birth:</h4>
            <p>31 November 2000</p>
          </div>
          <div>
            <h4>From:</h4>
            <p>Mirpur-12, Dhaka</p>
          </div>
         </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-3xl font-bold text-center underline text-[#fd670a]">
            My Education
          </h3>
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                <h2>BSc in Computer Science and Engineering</h2>
              </div>
              <div className="collapse-content">
                <p>
                  <div className="card bg-base-100 shadow-xl text-center">
                    <h3 className="text-xl text-green-600">
                      American International University / 2020 - 2024
                    </h3>
                    <p className="text-xl text-green-600">
                      CGPA: 3.48(current)
                    </p>
                  </div>
                </p>
              </div>
            </div>
            <hr />
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                <h2>H.S.C</h2>
              </div>
              <div className="collapse-content">
                <p>
                  <div className="card bg-base-100 shadow-xl text-center">
                    <h3 className="text-xl text-green-600">
                      Nawabgonj. Government College
                    </h3>
                    <p className="text-xl text-green-600">GPA:4.50</p>
                  </div>
                </p>
              </div>
            </div>
            <hr />
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-200"
            >
              <div className="collapse-title text-xl font-medium">
                <h2>S.S.C</h2>
              </div>
              <div className="collapse-content">
                <p>
                  <div className="card bg-base-100 shadow-xl text-center">
                    <h3 className="text-xl text-green-600">
                      Fullkuri Islamic Academy
                    </h3>
                    <p className="text-xl text-green-600">GPA:5.00</p>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
