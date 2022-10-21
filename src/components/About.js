import { profile } from "../images/index";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h2>
          I am a recent graduate of UCLA. I earned a bachelor’s degree in
          Geology, where I was trained to be a detail-oriented, analytical, and
          collaborative geoscientist. I am well-versed in full-stack development
          and can build user-friendly applications from mock-up to rollout. With
          my background as a scientist and the skills I have learned, I am
          equipped to work collaboratively with a like-minded team to ensure
          optimal results for user-centered and technology-centered designs.
        </h2>
        <img
          className="profile-image"
          alt="image of jeanette ralph"
          src={profile}
        ></img>
      </div>
    </div>
  );
};

export default About;
