import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto py-4">
         <h1 className="text-3xl font-bold text-center underline text-[#fd670a]">What I Do</h1>
        
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 py-5">
       
      <div className="card bg-base-100 shadow-xl image-full">
        <figure className="w-full">
          <img
            src="https://i.ibb.co/rwY7GBs/js.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">JavaScript!</h2>
          <div className="card-actions justify-end">
           
            <Link to="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"> <button className="btn">Explore now...</button></Link>
          </div>
        </div>
        </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/GMs1jJT/react.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">React!</h2>
          <div className="card-actions justify-end">
            <Link to="https://react.dev/"> <button className="btn">Explore now...</button></Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/0BsMQyT/nodejs.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">NodeJs!</h2>
          <div className="card-actions justify-end"> 
            <Link to="https://nodejs.org/en"><button className="btn">Explore now...</button></Link>
          </div>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://i.ibb.co/SJ6GfJB/mongo.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">MongoDB!</h2>
          <div className="card-actions justify-end">
            <Link to="https://www.mongodb.com/atlas/database"><button className="btn">Explore now...</button></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
