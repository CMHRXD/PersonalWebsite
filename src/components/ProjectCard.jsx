
export const ProjectCard = ({ title, description, imgUrl, link, width, shadow }) => {
  return (
    <a className="cursor-pointer" href={link} >
      <div  className={`proj-imgbx ${shadow} duration-500`}>
        <img src={imgUrl} className={width} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  );
};
