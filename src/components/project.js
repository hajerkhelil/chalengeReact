
import Mapcart from "./projectchaleng";

function Project ({data}) {

  return(
<div>
<section id="projects">
      <h2 class="text-important">Projects</h2>
      <div class="projects-container">
        {
          data.map(el=>  < Mapcart el={el} />  )
          
          }
      </div>
    </section>
  </div>
  );
  
}
export default Project;
